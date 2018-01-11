// @flow

import encrypt from '../utilities/encrypt';
// import User from '../entyties/User';
import UserRepository from '../repositories/UserRepository';
import _ from 'lodash';

const isSigned = ctx => !!ctx.session.id;
const isCurrentUser = ctx => (Number(ctx.params.id) === Number(ctx.session.id));

export default (router) => {
  router.get('userNew', '/user/new', async (ctx) => {
    ctx.flash.set('Fill all field for create new user');
    ctx.render('users/new', { form: {}, errors: {} });
  });

  router.get('users', '/users', async (ctx) => {
    try {
      const users = await UserRepository.getAllUsers();
      const message = users.length > 0 ? '' : 'Users not created yet';
      ctx.flash.set(message);
      ctx.render('users/index', { users, errors: {} });
    } catch (err) {
      console.error(err, 'get /users');
    }
  });

  router.get('user', '/user/:id', async (ctx) => {
    try {
      if (isSigned(ctx)) {
        if (isCurrentUser(ctx)) {
          const user = await UserRepository.findUserById(ctx.params.id);
          ctx.render('users/profile', { user, errors: {} });
        } else {
          ctx.redirect(`/user/${ctx.session.id}`);
        }
      } else {
        ctx.redirect('/');
      }
    } catch (err) {
      console.error(err);
      ctx.redirect('/');
    }
  });

  router.delete('user', '/user/:id', async (ctx) => {
    if (isSigned(ctx) && isCurrentUser(ctx)) {
      ctx.flash.set('User data deleted');
      await UserRepository.remove(ctx.params.id);
      ctx.session = {};
    }
    ctx.redirect('/users');
  });

  router.patch('user', '/user/:id', async (ctx) => {
    const userData = ctx.request.body;

    const {
      firstName, lastName, password,
    } = userData;

    if (isSigned(ctx) && isCurrentUser(ctx)) {
      await UserRepository.updateUser(ctx.session.id, {
        newFirstname: firstName,
        newLastname: lastName,
        newPassword: password,
      });
      ctx.session.name = firstName;
      ctx.flash.set('User data updated');
    }
    ctx.redirect('/');
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
      ctx.redirect('/');
    } catch (err) {
      const groupedErrors = _.groupBy(err.errors, 'path');
      console.error({ form: userData, errors: groupedErrors });
      ctx.render('users/new', { form: userData, errors: groupedErrors });
    }
  });
};
