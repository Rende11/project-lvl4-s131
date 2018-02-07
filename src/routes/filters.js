// @flow

import _ from 'lodash';
import db, { Tag, Status, User, Task } from '../models';

export default (router) => {
  router.get('myTasks', '/my', async (ctx) => {
    const tasks = await Task.findAll({
      where: {
        state: 'active',
        assignedToId: ctx.session.id,
      },
      include: [
        Tag,
        { model: Status },
        { model: User, as: 'creator' },
        { model: User, as: 'assignedTo' },
      ],
    });
    const activeUsers = await User.findAll({
      where: {
        state: 'active',
      },
    });
    const statuses = await Status.findAll({
      where: {
        state: 'active',
      },
    });
    ctx.render('tasks/index', { tasks, form: { users: activeUsers, statuses }, errors: {} });
  });

  router.post('findTasks', '/find', async (ctx) => {
    console.log(ctx.request.body);
    const query = _.pickBy(ctx.request.body, Boolean);
    console.log(query);
    const tasks = await Task.findAll({
      where: {
        state: 'active',
        ...query,
      },
      include: [
        Tag,
        { model: Status },
        { model: User, as: 'creator' },
        { model: User, as: 'assignedTo' },
      ],
    });
    const activeUsers = await User.findAll({
      where: {
        state: 'active',
      },
    });
    const statuses = await Status.findAll({
      where: {
        state: 'active',
      },
    });
    ctx.render('tasks/index', { tasks, form: { users: activeUsers, statuses }, errors: {} });
  });
};