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

    const create = await request.agent(server)
      .post('/user/new')
      .type('form')
      .send(user);
    expect(create.headers.location).toBe('/session');
    expect(create.status).toBe(302);

    const session = await request.agent(server)
      .post('/session')
      .type('form')
      .send({ email: user.email, password: user.password });
    expect(session.headers.location).toBe('/');
    expect(session.status).toBe(302);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
