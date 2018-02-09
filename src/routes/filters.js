// @flow

import _ from 'lodash';
import db, { Tag, Status, User, Task } from '../models';

export default (router) => {
  router.get('tasksFindMy', '/tasks/find/my', async (ctx) => {
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

  router.post('tasksFind', '/tasks/find', async (ctx) => {
    const query = _.pickBy(ctx.request.body, (value, key) => key !== 'tags');
    const tagNameObjs = ctx.request.body.tags.split(', ').map(tagName => ({ name: tagName.trim() }));
    const tagQuery = ctx.request.body.tags !== '' ? { where: { [db.Sequelize.Op.or]: tagNameObjs } } : {};
    const tasks = await Task.findAll({
      where: {
        state: 'active',
        ...query,
      },
      include: [
        { model: Tag, ...tagQuery },
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
