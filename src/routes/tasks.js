// @flow

import { Task, User } from '../models';

export default (router) =>  {
  router.get('tasks', '/tasks', async ctx => {
    ctx.render('tasks/index', {});
  });

  router.get('taskNew', '/tasks/new', async ctx => {
    const allActiveUsers = await User.findAll({
      where: {
        state: 'active',
      },
    });
    ctx.render('tasks/new', { form: { users: allActiveUsers }, errors: {} });
  });

  router.post('taskNew', '/tasks/new', async ctx => {
    console.log(ctx.request.body);
    ctx.render('tasks/index', {} );
  });
};