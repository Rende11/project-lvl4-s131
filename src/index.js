// @flow

import Koa from 'koa';
import Router from 'koa-router';
import Rollbar from 'rollbar';
import Pug from 'koa-pug';
import _ from 'lodash';

import path from 'path';

export default () => {
    const app = new  Koa();
    const router = new Router();
    
    const token = '4b893f0e49bd4b47990e08d65eaee576';
    
    const rollbar = Rollbar.init({
        accessToken: token,
        handleUncaughtExceptions: true
      });
    
    router.get('/', async ctx =>{
        ctx.render('index');
    });

    router.get('*', async (ctx, next) =>{
       
        await next(new Error('404'));
    });
    
    app.use(router.routes())
    app.use(router.allowedMethods());
    
    app.on('error', (err, ctx) => {
        rollbar.log(err);
    });
    
    const pug = new Pug({
        viewPath: path.join(__dirname, '/views'),
        debug: false,
        pretty: false,
        compileDebug: false,
        locals: [],
        basedir: path.join(__dirname, '/views'),
        helperPath: [
            { _ }
        ],
        app: app
      })


    return app;
};