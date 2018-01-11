// @flow

import encrypt from '../utilities/encrypt';
// import User from '../entyties/User';
import UserRepository from '../repositories/UserRepository';

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
      firstName, lastname, password,
    } = userData;

    if (isSigned(ctx) && isCurrentUser(ctx)) {
      await UserRepository.updateUser(ctx.session.id, {
        newFirstname: firstName,
        newLastname: lastname,
        newPassword: password,
      });
      ctx.session.name = firstName;
      ctx.flash.set('User data updated');
    }
    ctx.redirect('/');
  });

  router.post('userNew', '/user/new', async (ctx) => {
    const errors = {};
    const errorMessages = {
      firstName: 'First name cannot be blank',
      lastname: 'Last name cannot be blank',
      email: 'Email cannot be blank',
      password: 'Password cannot be blank',
    };

    const userData = ctx.request.body;

    const {
      firstName, lastname, email, password,
    } = userData;

    /*Object.keys(userData).filter(key => !userData[key]).forEach((emptyKey) => {
      errors[emptyKey] = errorMessages[emptyKey];
    });
*/
    if (Object.keys(errors).length > 0) {
      const data = { form: userData, errors };
      ctx.render('users/new', data);
    } else {
      try {
        const user = await UserRepository.create({
          firstName: firstName,
          lastName: lastname,
          email,
          password: encrypt(password),
        });
        ctx.session.user = user.uid;
        ctx.session.name = user.firstName;
        ctx.session.id = user.id;
        ctx.flash.set('New user successfully created');
        ctx.redirect('/');
      } catch (err) {
        console.error(err);
        const errorMessage = err.errors[0].message;
        /*const wrongFields = err.fields;
        const errors = wrongFields.reduce((acc, field) => {
          acc[field] = errorMessage;
          return acc;
        }, {});*/
        console.log(err.errors);
        ctx.render('users/new', { form: userData, errors: { [err.errors[0].path]: errorMessage } });
      }
    }
  });
};
