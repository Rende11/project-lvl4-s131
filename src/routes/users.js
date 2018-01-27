// @flow

import _ from 'lodash';
import UserRepository from '../repositories/UserRepository';

export default (router) => {
  router.get('userNew', '/user/new', async (ctx) => {
    const message = ('Fill all fields for create new user');
    ctx.render('users/new', { form: {}, errors: {}, flash: { message } });
  });

  router.get('users', '/users', async (ctx) => {
    try {
      const users = await UserRepository.getAllActiveUsers();
      ctx.render('users/index', { users, errors: {} });
    } catch (err) {
      console.error(err, 'get /users');
    }
  });

  router.get('user', '/user/:id', async (ctx) => {
    try {
      if (ctx.state.user.isSigned()) {
        if (ctx.state.user.isCurrentUser(ctx.params.id)) {
          const { firstName, lastName, email } = await UserRepository.findUserById(ctx.params.id);
          ctx.flash.set('Here you can edit your profile');
          ctx.render('users/profile', { form: { firstName, lastName, email }, errors: {} });
        } else {
          ctx.status = 403;
          ctx.render('errors/error', { err: 'Please go back, 403 - access forbidden!' });
        }
      } else {
        ctx.flash.set('Please log in!');
        ctx.redirect(router.url('session'));
      }
    } catch (err) {
      console.error(err);
      ctx.redirect(router.url('index'));
    }
  });

  router.delete('user', '/user/:id', async (ctx) => {
    if (ctx.state.user.isSigned() && ctx.state.user.isCurrentUser(ctx.params.id)) {
      ctx.flash.set('User data deleted');
      await UserRepository.remove(ctx.params.id);
      ctx.session = {};
    }
    ctx.redirect(router.url('users'));
  });

  router.patch('user', '/user/:id', async (ctx) => {
    const userData = ctx.request.body;

    const {
      firstName, lastName, email,
    } = userData;

    if (ctx.state.user.isSigned() && ctx.state.user.isCurrentUser(ctx.params.id)) {
      try {
        await UserRepository.updateUser(ctx.session.id, {
          newFirstname: firstName,
          newLastname: lastName,
          newEmail: email,
        });
        ctx.session.name = firstName;
        ctx.flash.set('User data updated');
        ctx.redirect(router.url('index'));
      } catch (err) {
        const groupedErrors = _.groupBy(err.errors, 'path');
        console.error({ form: userData, errors: groupedErrors });
        ctx.render('users/profile', { form: userData, errors: groupedErrors });
      }
    } else {
      ctx.status = 403;
      ctx.render('errors/error', { msg: 'Please go back, access forbidden' });
    }
  });

  router.post('userNew', '/user/new', async (ctx) => {
    const userData = ctx.request.body;
    const {
      firstName, lastName, email, password,
    } = userData;

    try {
      const user = await UserRepository.create({
        firstName,
        lastName,
        email,
        password,
      });
      ctx.session.user = user.uid;
      ctx.session.name = user.firstName;
      ctx.session.id = user.id;
      ctx.flash.set('New user successfully created');
      ctx.redirect(router.url('index'));
    } catch (err) {
      const groupedErrors = _.groupBy(err.errors, 'path');
      console.error({ form: userData, errors: groupedErrors });
      ctx.render('users/new', { form: userData, errors: groupedErrors });
    }
  });
};
