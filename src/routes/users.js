// @flow

import encrypt from '../utilities/encrypt';
import User from '../entyties/User';
import UserRepository from '../repositories/UserRepository';

export default (router) => {
  router.get('/user/new', async (ctx) => {
    ctx.render('users/new', { form: {}, errors: {} });
  });

  router.get('/users', async (ctx) => {
    try {
      const users = await UserRepository.getAllUsers();
      ctx.render('users/index', { users, errors: {} });
    } catch (err) {
      console.error(err, 'ERROR');
    }
  });

  router.get('/user/:id', async (ctx) => {
    try {
      const user = await UserRepository.findUserById(ctx.params.id);
      console.log('USER', user);
      ctx.render('users/profile', { user, errors: {} });
    } catch (err) {
      console.error(err);
      ctx.redirect('/');
    }
  });

  router.delete('/user/:id', async (ctx) => {
    await UserRepository.remove(ctx.params.id);
    ctx.session = {};
    ctx.redirect('/users');
  });

  router.patch('/user/:id', async (ctx) => {
    const userData = ctx.request.body;

    const {
      firstname, lastname, password,
    } = userData;
    await UserRepository.updateUser(ctx.session.user, {
      newFirstname: firstname,
      newLastname: lastname,
      newPassword: password,
    });
    ctx.session.name = firstname;
    ctx.redirect('/');
  });

  router.post('/user/new', async (ctx) => {
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
      ctx.render('users/new', data);
    } else {
      const user = new User(firstname, lastname, email, encrypt(password));
      await UserRepository.save(user);
      ctx.session.user = user.uid;
      ctx.session.name = user.firstName;
      ctx.session.id = await UserRepository.getUserId(user.uid);
      ctx.redirect('/');
    }
  });
};
