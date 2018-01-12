// @flow

import UserRepository from '../repositories/UserRepository';

export default (router) => {
  router.get('session', '/session', async (ctx) => {
    ctx.render('users/session', { form: {}, errors: {} });
  });

  router.post('session', '/session', async (ctx) => {
    const userData = ctx.request.body;
    const errors = {};
    const errorMessages = {
      email: { message: 'Email cannot be blank' },
      password: { message: 'Password cannot be blank' },
      nouser: { message: 'Wrong email or password' },
    };

    const {
      email, password,
    } = userData;

    Object.keys(userData).filter(key => !userData[key]).forEach((emptyKey) => {
      errors[emptyKey] = [errorMessages[emptyKey]];
    });

    const user = await UserRepository.find(email, password);

    console.error(errors);
    if (Object.keys(errors).length > 0 || !user) {
      const data = { form: userData, errors };
      console.error(data, 'ERRRO');
      ctx.flash.set('Welcome qeqe!');
      ctx.render('users/session', data);
    } else {
      ctx.session.user = user.dataValues.uid;
      ctx.session.name = user.dataValues.firstName;
      ctx.session.id = user.dataValues.id;
      ctx.flash.set('Welcome back!');
      ctx.redirect('/');
    }
  });

  router.delete('session', '/session', async (ctx) => {
    ctx.flash.set('You are logged out');
    ctx.session = {};
    ctx.redirect('/');
  });
};
