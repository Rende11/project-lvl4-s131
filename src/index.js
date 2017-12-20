// @flow

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import koaLogger from 'koa-logger';
import Rollbar from 'rollbar';
import Pug from 'koa-pug';
import _ from 'lodash';
import dotenv from 'dotenv';


import path from 'path';
import routes from './routes';

export default () => {
  const app = new Koa();
  const router = new Router();
  routes(router);
  const env = dotenv.config();
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
    } catch (err) {
      rollbar.error(err, ctx.request);
    }
  });


  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(koaLogger());

  const pug = new Pug({
    viewPath: path.join(__dirname, '../views'),
    debug: true,
    pretty: true,
    compileDebug: true,
    noCache: true,
    locals: [],
    basedir: path.join(__dirname, '../views'),
    helperPath: [
      { _ },
    ],
  });

  pug.use(app);

  return app;
};
