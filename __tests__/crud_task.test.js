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

  test('Post /user/new', async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const createUser = await request.agent(server)
      .post('/user/new')
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
      .get('/tasks')
    expect(getTasks.status).toBe(200);

    const getStatuses = await request.agent(server)
      .get('/statuses')
    expect(getStatuses.status).toBe(200);

    const createStatus = await request.agent(server)
      .get('/statuses/new')
    expect(createStatus.status).toBe(200);

    const status = { name: faker.random.word };
    const postStatus = await request.agent(server)
      .post('/statuses/new')
      .type('form')
      .send(status);
    expect(postStatus.status).toBe(302);

    const createTask = await request.agent(server)
      .get('/tasks/new')
    expect(createTask.status).toBe(200);

    const postTask = await request.agent(server)
      .post('/tasks/new')
      .type('form')
      .send({
        name: faker.random.word,
        description: faker.random.sentence,
        status: status.name,
        assignedTo: `${user.lastName} ${user.firstName}`,
        assignedToId: 1,        
        tags: 'easy, new',
        creator: `${user.lastName} ${user.firstName}`,
      });
    expect(postTask.status).toBe(302);
    
    const getTask = await request.agent(server)
      .get('/task/1');
    expect(getTask.status).toBe(200);

    const updateTask = await request.agent(server)
      .patch('/task/1')
      .send({
        name: faker.random.word,
        description: faker.random.sentence,
        status: status.name,
        assignedTo: `${user.lastName} ${user.firstName}`,
        assignedToId: 1,
        creator: `${user.lastName} ${user.firstName}`,
      });
    expect(updateTask.status).toBe(302);

    const deleteTask = await request.agent(server)
      .delete('/task/1');
    expect(deleteTask.status).toBe(302);

    const getStatus = await request.agent(server)
      .get('/status/1');
    expect(getStatus.status).toBe(200);

    const updateStatusError = await request.agent(server)
      .patch('/status/1')
      .send({ name: '' });
    expect(updateStatusError.status).toBe(200);

    const updateStatus = await request.agent(server)
      .patch('/status/1')
      .send({ name: faker.random.word });
    expect(updateStatus.status).toBe(302);

    const deleteStatus = await request.agent(server)
      .delete('/status/1');
    expect(deleteStatus.status).toBe(302);

  });

  afterEach((done) => {
    server.close();
    done();
  });
});
