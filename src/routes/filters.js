// @flow

import _ from 'lodash';
import { Tag, Status, User, Task } from '../models';

export default (router) => {
  router.get('myTasks', '/my', async (ctx) => {
    console.log('OLOLOLO');
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
    console.log(tasks, 'rere');
    ctx.render('tasks/index', { tasks });
  });
};
