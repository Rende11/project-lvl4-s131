// @flow

import _ from 'lodash';
import db, { Task, User, Status, Tag, TaskTag } from '../models';
import Sequelize from 'sequelize';

export default (router) => {
  router.get('tasks', '/tasks', async (ctx) => {
    const tasks = await Task.findAll({
      where: {
        state: 'active',
      },
      include: [
        Tag,
        { model: Status },
        { model: User, as: 'creator' },
        { model: User, as: 'assignedTo'},
      ]
    });
    console.log(tasks, 'TASKS');

    /*const actualTasks = await Promise.all(tasks.map(async (task) => {
      const assignedTo = await User.findById(Number(task.assignedToId));
      const creator = await User.findById(Number(task.creatorId));

      return task.update({
        assignedTo: assignedTo.getFullName(),
        creator: creator.getFullName(),
      });
    }));*/
    ctx.render('tasks/index', { tasks });
  });

  router.get('taskNew', '/tasks/new', async (ctx) => {
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
    ctx.render('tasks/new', { form: { users: activeUsers, statuses }, errors: {} });
  });

  router.post('taskNew', '/tasks/new', async (ctx) => { 
    const taskData = ctx.request.body;
    taskData.creatorId = ctx.session.id;
    const creator = await User.findById(Number(ctx.session.id));
    try {
      const task = await Task.create(taskData, { include: [Tag] });
      if (taskData.tags) {
        const formTagsNames = taskData.tags.split(',').map(tag => tag.trim());
        const updatedTags = await db.sequelize
          .transaction(t => Promise.all(formTagsNames
            .map(tagName => Tag.findOrCreate({ where: { name: tagName }, transaction: t })))).map(tag => tag[0]);
        await task.addTags(updatedTags);
      }
      console.log(task);
      ctx.flash.set('New task successfully created');
      ctx.redirect(router.url('tasks'));
    } catch (err) {
      console.error(err);
      const groupedErrors = _.groupBy(err.errors, 'path');
      const allActiveUsers = await User.findAll({
        where: {
          state: 'active',
        },
      });
      const statuses = await Status.findAll({
        where: {
          state: 'active',
        },
      });
      console.error({ form: taskData, errors: groupedErrors });
      ctx.render('tasks/new', { form: { ...taskData, users: allActiveUsers, statuses }, errors: groupedErrors });
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
      const statuses = await Status.findAll({
        where: {
          state: 'active',
        },
      });
      ctx.render('tasks/edit', {
        form: task, users: activeUsers, statuses, errors: {},
      });
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
