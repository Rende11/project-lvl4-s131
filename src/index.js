// @flow

import Koa from 'koa';
import Router from 'koa-router';

export default () => {
    const app = new  Koa();
    const router = new Router();
  
    router.get('/', async ctx =>{
        ctx.body = "Hello Koa";
    });
  
    app.use(router.routes())
    app.use(router.allowedMethods());
    return app;
};