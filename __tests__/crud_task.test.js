// @flow

import request from 'supertest';
import matchers from 'jest-supertest-matchers';
import faker from 'faker';
import app from '../src/';

describe('Base CRUD', () => {
  let server;

  beforeAll(() => {
    jasmine.addMatchers(matchers);
  });

  beforeEach(() => {
    server = app().listen();
  });

  test('Post /users', async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const createUser = await request.agent(server)
      .post('/users')
      .type('form')
      .send(user);
    expect(createUser.headers.location).toBe('/session');
    expect(createUser.status).toBe(302);

    const session = await request.agent(server)
      .post('/session')
      .type('form')
      .send({ email: user.email, password: user.password });
    expect(session.headers.location).toBe('/');
    expect(session.status).toBe(302);

    const getTasks = await request.agent(server)
      .get('/tasks');
    expect(getTasks.status).toBe(200);

    const getStatuses = await request.agent(server)
      .get('/statuses');
    expect(getStatuses.status).toBe(200);

    const createStatus = await request.agent(server)
      .get('/statuses/new');
    expect(createStatus.status).toBe(200);

    const status = { name: faker.random.word() };
    const postStatus = await request.agent(server)
      .post('/statuses')
      .type('form')
      .send(status);
    expect(postStatus.status).toBe(302);

    const createTask = await request.agent(server)
      .get('/tasks/new');
    expect(createTask.status).toBe(200);

    const postTask = await request.agent(server)
      .post('/tasks')
      .type('form')
      .send({
        name: faker.random.word(),
        description: faker.lorem.sentence(),
        status: 1,
        assignedTo: `${user.lastName} ${user.firstName}`,
        assignedToId: 1,
        tags: 'easy, new',
        creator: `${user.lastName} ${user.firstName}`,
        creatorId: 1,
      });
    expect(postTask.status).toBe(302);

    const getTask = await request.agent(server)
      .get('/tasks/1/edit');
    expect(getTask.status).toBe(200);

    const updateTask = await request.agent(server)
      .patch('/tasks/1')
      .send({
        name: faker.random.word(),
        description: faker.lorem.sentence(),
        status: 1,
        assignedTo: `${user.lastName} ${user.firstName}`,
        assignedToId: 1,
        creator: `${user.lastName} ${user.firstName}`,
      });
    expect(updateTask.status).toBe(302);

    const deleteTask = await request.agent(server)
      .delete('/tasks/1');
    expect(deleteTask.status).toBe(302);

    const getStatus = await request.agent(server)
      .get('/statuses/1');
    expect(getStatus.status).toBe(200);


    const updateStatus = await request.agent(server)
      .patch('/statuses/1')
      .send({ name: faker.lorem.word() });
    expect(updateStatus.status).toBe(302);

    const deleteStatus = await request.agent(server)
      .delete('/statuses/1');
    expect(deleteStatus.status).toBe(302);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
