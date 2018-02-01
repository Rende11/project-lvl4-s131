// @flow

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import koaLogger from 'koa-logger';
import middleware from 'koa-webpack';
import session from 'koa-session';
import serve from 'koa-static';
import methodOverride from 'koa-methodoverride';
import Rollbar from 'rollbar';
import Pug from 'koa-pug';
import _ from 'lodash';
import path from 'path';
import dotenv from 'dotenv';
import flash from 'koa-flash-simple';


import getConfig from './webpack.config.babel';
import routes from './routes';

export default () => {
  const app = new Koa();

  app.keys = ['secret key'];
  dotenv.config({ path: '../.env' });

  app.use(session(app));
  app.use(flash());

  const router = new Router();
  routes(router);

  app.use(bodyParser());

  app.use(methodOverride((req) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      return req.body._method; // eslint-disable-line
    }
    return null;
  }));

  app.use(async (ctx, next) => {
    ctx.state.user = {
      name: ctx.session.name,
      id: ctx.session.id,
      isSigned: () => !!ctx.session.id,
      isCurrentUser: userId => (Number(userId) === Number(ctx.state.user.id)),
    };
    ctx.state.env = process.env.NODE_ENV;
    ctx.state.flash = ctx.flash;
    await next();
  });

  const rollbar = Rollbar.init({
    accessToken: process.env.ROLLBAR_TOKEN,
    handleUncaughtExceptions: true,
  });

  app.use(async (ctx, next) => {
    try {
      // rollbar.log('Rollbar working');
      await next();
    } catch (err) {
      rollbar.error(err, ctx.request);
    }
  });

  app.use(async (ctx, next) => {
    if (ctx.status === 404) {
      ctx.render('errors/error', { err: 'Page not found :(' });
    }
    await next();
  });

  app.use(router.allowedMethods());
  app.use(koaLogger());

  app.use(serve(path.join(__dirname, '..', 'public')));

  app.use(router.routes());
  if (process.env.NODE_ENV !== 'test') {
    app.use(middleware({
      config: getConfig(),
    }));
  }

  const pug = new Pug({
    viewPath: path.join(__dirname, '..', 'views'),
    debug: true,
    pretty: true,
    compileDebug: true,
    noCache: process.env.NODE_ENV !== 'production',
    locals: [],
    basedir: path.join(__dirname, '..', 'views'),
    helperPath: [
      { _ },
      { urlFor: (...args) => router.url(...args) },
    ],
  });

  pug.use(app);
  return app;
};
