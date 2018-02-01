// @flow

import { User } from '../models';
import crypto from '../utilities/encrypt';

export default (router) => {
  router.get('session', '/session', async (ctx) => {
    ctx.render('session/new', { form: {}, errors: {} });
  });

  router.post('session', '/session', async (ctx) => {
    const userData = ctx.request.body;
    const errors = {};
    const errorMessages = {
      nouser: { message: 'Wrong email or password' },
    };

    const {
      email, password,
    } = userData;

    const user = await User.findOne({
      where: {
        email,
        password: crypto(password),
        state: 'active',
      },
    });

    if (!user) {
      const { message } = errorMessages.nouser;
      ctx.render('session/new', { form: userData, errors, flash: { message } });
    } else {
      ctx.session.name = user.firstName;
      ctx.session.id = user.id;
      ctx.flash.set('Welcome back!');
      ctx.redirect(router.url('index'));
    }
  });

  router.delete('session', '/session', async (ctx) => {
    ctx.flash.set('You are logged out');
    ctx.session = {};
    ctx.redirect(router.url('index'));
  });
};
