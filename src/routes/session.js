// @flow

import UserRepository from '../repositories/UserRepository';
export default (router) => {

  router.get('/session/new', async (ctx) => {
    ctx.render('users/session', { form: {}, errors: {} });
  });

  router.post('/session/new', async (ctx) => {
    const userData = ctx.request.body;
    const errors = {};
    const errorMessages = {
      email: 'Email cannot be blank',
      password: 'Password cannot be blank',
      nouser: 'Wrong email or password',
    };
    const {
      email, password,
    } = userData;

    Object.keys(userData).filter(key => !userData[key]).forEach((emptyKey) => {
      errors[emptyKey] = errorMessages[emptyKey];
    });

    const user = UserRepository.find(email, password);
    if (!user) {
      errors.nouser = errorMessages.nouser;
    }

    if (Object.keys(errors).length > 0) {
      const data = { form: userData, errors };
      ctx.render('users/session', data);
    } else {
      ctx.session.user = user.uid;
      ctx.session.name = user.firstName;
      ctx.redirect('/');
    }
  });

  router.delete('/session', async (ctx) => {
    ctx.session = {};
    ctx.redirect('/');
  });
};
