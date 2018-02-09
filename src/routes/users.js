// @flow

import _ from 'lodash';
import { User } from '../models';

export default (router) => {
  router.get('userNew', '/users/new', async (ctx) => {
    const message = ('Fill all fields for create new user');
    ctx.render('users/new', { form: {}, errors: {}, flash: { message } });
  });

  router.get('users', '/users', async (ctx) => {
    const activeUsers = await User.findAll({
      where: {
        state: 'active',
      },
    });
    ctx.render('users/index', { users: activeUsers, errors: {} });
  });

  router.get('user', '/users/:id/edit', async (ctx) => {
    try {
      ctx.assert(ctx.state.user.isSigned(), 401, 'Please log in!');
      ctx.assert(ctx.state.user.isCurrentUser(ctx.params.id), 403, 'Please go back, 403 - access forbidden!');
      const { firstName, lastName, email } = await User.findById(ctx.params.id);
      ctx.render('users/profile', { form: { firstName, lastName, email }, errors: {} });
    } catch (err) {
      console.error(err.message);
      ctx.status = err.status;
      ctx.render('errors/error', { err: err.message });
    }
  });

  router.delete('user', '/users/:id', async (ctx) => {
    ctx.assert(ctx.state.user.isSigned(), 401, 'Please log in!');
    ctx.assert(ctx.state.user.isCurrentUser(ctx.params.id), 403, 'Please go back, 403 - access forbidden!');
    const user = await User.findById(ctx.params.id);
    user.update({
      state: 'deleted',
    });
    ctx.session = {};
    ctx.redirect(router.url('users'));
  });

  router.patch('user', '/users/:id/edit', async (ctx) => {
    const userData = ctx.request.body;
    const {
      firstName, lastName, email,
    } = userData;

    ctx.assert(ctx.state.user.isSigned(), 401, 'Please log in!');
    ctx.assert(ctx.state.user.isCurrentUser(ctx.params.id), 403, 'Please go back, 403 - access forbidden!');
    try {
      const user = await User.findById(ctx.session.id);
      await user.update({
        firstName,
        lastName,
        email,
      });
      ctx.session.name = firstName;
      ctx.flash.set('User data updated');
      ctx.redirect(router.url('index'));
    } catch (err) {
      const groupedErrors = _.groupBy(err.errors, 'path');
      console.error({ form: userData, errors: groupedErrors });
      ctx.render('users/profile', { form: userData, errors: groupedErrors });
    }
  });

  router.post('userNew', '/users', async (ctx) => {
    const userData = ctx.request.body;
    const {
      firstName, lastName, email, password,
    } = userData;

    try {
      await User.create({
        firstName,
        lastName,
        email,
        password,
      });
      ctx.flash.set('New user successfully created');
      ctx.redirect(router.url('session'));
    } catch (err) {
      const groupedErrors = _.groupBy(err.errors, 'path');
      console.error({ form: userData, errors: groupedErrors });
      ctx.render('users/new', { form: userData, errors: groupedErrors });
    }
  });
};
