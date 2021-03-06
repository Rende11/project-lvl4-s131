// @flow

import { User } from '../models';
import crypto from '../utilities/encrypt';
import getLogger from '../utilities/logger';

const logger = getLogger('Requests');

export default (router) => {
  router.get('sessionsNew', '/sessions', async (ctx) => {
    ctx.render('sessions/new', { form: {}, errors: {} });
  });

  router.post('sessionsCreate', '/sessions', async (ctx) => {
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
      logger(message);
      ctx.render('sessions/new', { form: userData, errors, flash: { message } });
    } else {
      ctx.session.name = user.firstName;
      ctx.session.id = user.id;
      ctx.flash.set('Welcome back!');
      ctx.redirect(router.url('welcomeIndex'));
    }
  });

  router.delete('sessionsDelete', '/sessions', async (ctx) => {
    ctx.flash.set('You are logged out');
    ctx.session = {};
    ctx.redirect(router.url('welcomeIndex'));
  });
};
