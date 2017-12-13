// @flow

import Koa from 'koa';
import Router from 'koa-router';
import Rollbar from 'rollbar';
import Pug from 'koa-pug';

export default () => {
    const app = new  Koa();
    const router = new Router();
    
    const token = '4b893f0e49bd4b47990e08d65eaee576';
    
    const rollbar = Rollbar.init({
        accessToken: token,
        handleUncaughtExceptions: true
      });

    router.get('/', async ctx =>{
        ctx.body = "Hello Koa";
    });

    router.get('*', async (ctx, next) =>{
        next(new Error('404'));
    });
    
    app.use(router.routes())
    app.use(router.allowedMethods());
    
    app.on('error', (err, ctx) => {
        rollbar.log(err);
    });
    
    const pug = new Pug({
        viewPath: './views',
        debug: false,
        pretty: false,
        compileDebug: false,
        locals: global_locals_for_all_pages,
        basedir: 'path/for/pug/extends',
        helperPath: [
          'path/to/pug/helpers',
          { random: 'path/to/lib/random.js' },
          { _: require('lodash') }
        ],
        app: app
      })


    return app;
};