// @flow

import encrypt from '../utilities/encrypt';
import User from '../entyties/User';
import UserRepository from '../repositories/UserRepository';

export default (router) => {
  router.get('/user/new', async (ctx) => {
    ctx.render('users/index');
  });

  router.post('/user/new', async (ctx) => {
    console.log(ctx.request.body);
    const {
      firstname, lastname, email, password,
    } = ctx.request.body;

    const user = new User(firstname, lastname, email, encrypt(password));
    const repository = new UserRepository();
    repository.save(user);
    const users = repository.getAllUsers();
    ctx.render('index', { currentUser: user, users });
  });
};
