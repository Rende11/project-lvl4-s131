// @flow

import UserRepository from '../repositories/UserRepository';

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

    const user = await UserRepository.find(email, password);

    if (!user) {
      const { message } = errorMessages.nouser;
      ctx.render('session/new', { form: userData, errors, flash: { message } });
    } else {
      ctx.session.user = user.dataValues.uid;
      ctx.session.name = user.dataValues.firstName;
      ctx.session.id = user.dataValues.id;
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
