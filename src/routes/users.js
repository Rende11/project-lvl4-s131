// @flow

import encrypt from '../utilities/encrypt';
import User from '../entyties/User';
import UserRepository from '../repositories/UserRepository';

export default (router) => {
  router.get('/user/new', async (ctx) => {
    ctx.render('users/index', { form: {}, errors: {} });
  });

  router.post('/user/new', async (ctx) => {
    console.log(ctx.request.body);
    const errors = {};
    const errorMessages = {
      firstname: 'First name cannot be blank',
      lastname: 'Last name cannot be blank',
      email: 'Email cannot be blank',
      password: 'Password cannot be blank',
    };

    const userData = ctx.request.body;

    const {
      firstname, lastname, email, password,
    } = userData;

    Object.keys(userData).filter(key => !userData[key]).forEach((emptyKey) => {
      errors[emptyKey] = errorMessages[emptyKey];
    });

    if (Object.keys(errors).length > 0) {
      const data = { form: userData, errors };
      console.log(data);
      ctx.render('users/index', data);
    } else {
      console.log('zbs');
      const user = new User(firstname, lastname, email, encrypt(password));
      const repository = new UserRepository();
      repository.save(user);
      ctx.redirect('/');
    }
  });
};
