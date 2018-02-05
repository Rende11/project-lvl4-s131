// @flow

import _ from 'lodash';
import db, { Task, User, Status, Tag, TaskTag } from '../models';

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
      const status = await Status.findById(Number(task.statusId));
      const taskTags = await TaskTag.findAll({ where: { taskId: task.id } });
      console.log(taskTags, 'ZZZ TASK TAGS');
      const tags = await Promise.all(taskTags.map(taskTag => Tag.findById(taskTag.tagId)));
      console.log(tags, 'QQQ TAGS');
      const tagNames = tags.map(tag => tag.name).join(',');
      return task.update({
        assignedTo: assignedTo.getFullName(),
        creator: creator.getFullName(),
        status: status.name,
        tags: tagNames,
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
    const statuses = await Status.findAll({
      where: {
        state: 'active',
      },
    });
    ctx.render('tasks/new', { form: { users: activeUsers, statuses }, errors: {} });
  });

  router.post('taskNew', '/tasks/new', async (ctx) => {
    const taskData = ctx.request.body;
    const creatorId = ctx.session.id;
    const creator = await User.findById(Number(creatorId));
    const status = await User.findById(Number(taskData.statusId));
    const formTags = taskData.tags.split(',').map(tag => tag.trim());


    try {
      const updatedTags = await db.sequelize
        .transaction(t => Promise.all(formTags
          .map(tag => Tag.findOrCreate({ where: { name: tag }, transaction: t })))).map(tag => tag[0]);
      console.log(updatedTags);
      // const tags = await Promise.all(updatedTags.forEach(tag => Tag.findOne({ where: { id: tag.id } })));

      const task = Task.create({
        ...taskData,
        creatorId,
        creator: creator.getFullName(),
        status: status.name,
        include: [Tag],
      });

      // const tagsIds = updatedTags.map(tag => tag[0].id);

      /*await Promise.all(tagsIds.map(async (tagId) => {
        const taskTag = await TaskTag.findOne({ where: { tagId, taskId: id } });
        if (!taskTag) {
          return TaskTag.create({ tagId, taskId: id });
        }
        return taskTag;
      })); */

      // const res = tags.map(name => Tag.find({ where: { name } }).then(tag => task.createTag({ name: tag })));

      /* console.log(Object.keys(Task.associations));
      console.log(Object.keys(Tag.associations));
      console.log(Tag.prototype); */
      /*console.log(updatedTags[0][0].dataValues);
      console.log(updatedTags[0][0].dataValues.id);*/
      console.log(await task.prototype.addTags(updatedTags));
      /*const res = tags.map(tag => Tag.findOne({ where: { name: tag } })
        .then(async result => (result ? await task.addTag(result) : await task.setTag({ name: tag }))));
      console.log(await Promise.all(res)); */

     // console.log(await task.addTags(updatedTags.));
      // console.log(await Promise.all(updatedTags.forEach(tag => task.addTag(tag))));
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
