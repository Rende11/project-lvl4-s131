// @flow

import encrypt from '../utilities/encrypt';
import User from '../entyties/User';
import UserRepository from '../repositories/UserRepository';

export default (router) => {

    router.get('/session', async (ctx) => {
        delete ctx.session.user;
        delete ctx.session.name;
        ctx.redirect('/');
    });
}