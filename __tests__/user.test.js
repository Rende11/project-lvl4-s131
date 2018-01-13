// @flow

import request from 'supertest';
import matchers from 'jest-supertest-matchers';
import faker from 'faker';
import app from '../src/';

describe('Base test - app', () => {
  let server;

  beforeAll(() => {
    jasmine.addMatchers(matchers);
  });

  beforeEach(() => {
    server = app().listen();
  });

  test('Get /user/new', async () => {
    const res = await request.agent(server)
      .get('/user/new');
    expect(res.status).toBe(200);
  });

  test('Get /users', async () => {
    const res = await request.agent(server)
      .get('/users');
    expect(res.status).toBe(200);
  });

  test('Post /user/new', async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const res = await request.agent(server)
      .post('/user/new')
      .send(user);
    expect(res.status).toBe(302);
    expect(res.headers.location).toBe('/');
  });

  test('Profile', async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await request.agent(server)
      .post('/user/new')
      .send(user);
    const res = await request.agent(server)
      .get('/user/1');
    expect(res.status).toBe(302);


    const newUserData = {
      newFirstname: faker.name.firstName(),
      newLastname: faker.name.lastName(),
      newPassword: faker.internet.password(),
    };

    const update = await request.agent(server)
      .patch('/user/1')
      .send(newUserData);
    expect(update.status).toBe(302);

    const del = await request.agent(server)
      .delete('/user/1');
    expect(del.status).toBe(302);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
