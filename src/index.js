// @flow

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import koaLogger from 'koa-logger';
import middleware from 'koa-webpack';
import session from 'koa-session';
import Rollbar from 'rollbar';
import Pug from 'koa-pug';
import _ from 'lodash';
import dotenv from 'dotenv';
import path from 'path';

import getConfig from '../webpack.config.babel';
import routes from './routes';

export default () => {
  const app = new Koa();
  const router = new Router();
  routes(router);
  const env = dotenv.config();

  app.keys = ['secret key'];

  app.use(bodyParser());
  const rollbar = Rollbar.init({
    accessToken: env.ROLLBAR_TOKEN,
    handleUncaughtExceptions: true,
  });

  router.get('/', async (ctx) => {
    ctx.render('index');
  });

  router.get('/rollbar', async (ctx) => {
    ctx.body = nonExisent; // eslint-disable-line
  });

  app.use(async (ctx, next) => {
    try {
      await next();
      if (ctx.status === 404) {
        throw new Error(404);
      }
    } catch (err) {
      rollbar.error(err, ctx.request);
    }
  });

  app.use(session(app));

  app.use(async (ctx, next) => {
    ctx.state.isSigned = !!ctx.session.user;
    ctx.state.username = ctx.session.name;
    console.log('state', ctx.session);
    await next();
  });
  
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(koaLogger());

  app.use(middleware({
    config: getConfig(),
  }));

  const pug = new Pug({
    viewPath: path.join(__dirname, '..', 'views'),
    debug: true,
    pretty: true,
    compileDebug: true,
    noCache: true,
    locals: [],
    basedir: path.join(__dirname, '..', 'views'),
    helperPath: [
      { _ },
    ],
  });

  pug.use(app);

  return app;
};
