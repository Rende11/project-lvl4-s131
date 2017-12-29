// @flow

import encrypt from '../utilities/encrypt';
import User from '../entyties/User';
import UserRepository from '../repositories/UserRepository';

export default (router) => {
  router.get('/user/new', async (ctx) => {
    ctx.render('users/new', { form: {}, errors: {} });
  });

  router.get('/users', async (ctx) => {
    const users = UserRepository.getAllUsers();
    ctx.render('users/index', { users, errors: {} });
  });

  router.get('/user/:id', async (ctx) => {
    const user = UserRepository.findUserById(ctx.params.id);
    console.log(ctx.params.id);
    console.log(user.firstName);
    if (user) {
      ctx.render('users/profile', { user, errors: {} });
    } else {
      ctx.redirect('/');
    }
  });

  router.delete('/user/:id', async (ctx) => {
    const user = UserRepository.findUserById(ctx.params.id);
    if (user) {
      UserRepository.remove(user.uid);
      ctx.session = {};
      ctx.redirect('/users');
    } else {
      ctx.redirect('/');
    }
  });

  router.patch('/user/:id', async (ctx) => {
    const user = UserRepository.findUserById(ctx.params.id);
    const userData = ctx.request.body;

    const {
      firstname, lastname, password,
    } = userData;
    UserRepository.updateUser(user.uid, {
      newFirstname: firstname,
      newLastname: lastname,
      newPassword: password,
    });
    ctx.redirect('/');
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
      ctx.render('users/new', data);
    } else {
      const user = new User(firstname, lastname, email, encrypt(password));
      UserRepository.save(user);
      ctx.session.user = user.uid;
      ctx.session.name = user.firstName;
      ctx.session.id = UserRepository.getUserId(user.uid);
      ctx.redirect('/');
    }
  });
};
