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
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const res = await request.agent(server)
      .post('/user/new')
      .send(user);
    expect(res.status).toBe(302);
    expect(res.headers.location).toBe('/');
  });
  afterEach((done) => {
    server.close();
    done();
  });
});
