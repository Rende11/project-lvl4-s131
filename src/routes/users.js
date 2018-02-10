// @flow

import _ from 'lodash';
import { User } from '../models';

export default (router) => {
  router.get('usersNew', '/users/new', async (ctx) => {
    const message = ('Fill all fields for create new user');
    ctx.render('users/new', { form: {}, errors: {}, flash: { message } });
  });

  router.get('usersIndex', '/users', async (ctx) => {
    const activeUsers = await User.findAll({
      where: {
        state: 'active',
      },
    });
    ctx.render('users/index', { users: activeUsers, errors: {} });
  });

  router.get('usersEdit', '/users/:id/edit', async (ctx) => {
    try {
      ctx.assert(ctx.state.user.isSigned(), 401, 'Please log in!');
      ctx.assert(ctx.state.user.isCurrentUser(ctx.params.id), 403, 'Please go back, 403 - access forbidden!');
      const { firstName, lastName, email } = await User.findById(ctx.params.id);
      ctx.render('users/edit', { form: { firstName, lastName, email }, errors: {} });
    } catch (err) {
      ctx.status = err.status;
      ctx.render('errors/error', { err: err.message });
    }
  });

  router.delete('usersDelete', '/users/:id', async (ctx) => {
    ctx.assert(ctx.state.user.isSigned(), 401, 'Please log in!');
    ctx.assert(ctx.state.user.isCurrentUser(ctx.params.id), 403, 'Please go back, 403 - access forbidden!');
    const user = await User.findById(ctx.params.id);
    user.update({
      state: 'deleted',
    });
    ctx.session = {};
    ctx.redirect(router.url('usersIndex'));
  });

  router.patch('usersUpdate', '/users/:id/edit', async (ctx) => {
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
      ctx.redirect(router.url('welcomeIndex'));
    } catch (err) {
      const groupedErrors = _.groupBy(err.errors, 'path');
      ctx.render('users/edit', { form: userData, errors: groupedErrors });
    }
  });

  router.post('usersCreate', '/users', async (ctx) => {
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
      ctx.redirect(router.url('sessionsNew'));
    } catch (err) {
      const groupedErrors = _.groupBy(err.errors, 'path');
      ctx.render('users/new', { form: userData, errors: groupedErrors });
    }
  });
};
