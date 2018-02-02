// @flow

import _ from 'lodash';
import { Task, User } from '../models';

export default (router) => {
  router.get('tasks', '/tasks', async (ctx) => {
    const tasks = await Task.findAll({
      where: {
        state: 'active',
      },
    });

    const actualTasks = await Promise.all(tasks.map(async (task) => {
      const assignedTo = await User.findById(Number(task.assignedToId));
      const creator = await User.findById(Number(task.creatorId));
      return task.update({
        assignedTo: assignedTo.getFullName(),
        creator: creator.getFullName(),
      });
    }));

    ctx.render('tasks/index', { tasks: actualTasks });
  });

  router.get('taskNew', '/tasks/new', async (ctx) => {
    const activeUsers = await User.findAll({
      where: {
        state: 'active',
      },
    });
    ctx.render('tasks/new', { form: { users: activeUsers }, errors: {} });
  });

  router.post('taskNew', '/tasks/new', async (ctx) => {
    const taskData = ctx.request.body;
    const creatorId = ctx.session.id;
    try {
      await Task.create({ ...taskData, creatorId });
      ctx.flash.set('New task successfully created');
      ctx.redirect(router.url('tasks'));
    } catch (err) {
      const groupedErrors = _.groupBy(err.errors, 'path');
      const allActiveUsers = await User.findAll({
        where: {
          state: 'active',
        },
      });
      console.error({ form: taskData, errors: groupedErrors });
      ctx.render('tasks/new', { form: { ...taskData, users: allActiveUsers }, errors: groupedErrors });
    }
  });

  router.get('task', '/task/:id', async (ctx) => {
    try {
      const task = await Task.findById(ctx.params.id);
      const activeUsers = await User.findAll({
        where: {
          state: 'active',
        },
      });
      ctx.render('tasks/edit', { form: task, users: activeUsers, errors: {} });
    } catch (err) {
      console.error(err.message);
      ctx.status = err.status;
      ctx.render('errors/error', { err: err.message });
    }
  });

  router.delete('task', '/task/:id', async (ctx) => {
    const task = await Task.findById(ctx.params.id);
    task.update({
      state: 'deleted',
    });
    ctx.redirect(router.url('tasks'));
  });

  router.patch('task', '/task/:id', async (ctx) => {
    const form = ctx.request.body;
    const task = await Task.findById(ctx.params.id);
    try {
      await task.update(form);
      ctx.flash.set('Task updated');
      ctx.redirect(router.url('tasks'));
    } catch (err) {
      const activeUsers = await User.findAll({
        where: {
          state: 'active',
        },
      });
      const groupedErrors = _.groupBy(err.errors, 'path');
      console.error({ form: task, errors: groupedErrors });
      ctx.render('tasks/edit', { form: task, users: activeUsers, errors: groupedErrors });
    }
  });
};
