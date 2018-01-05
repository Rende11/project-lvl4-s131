// @flow

import request from 'supertest';
import matchers from 'jest-supertest-matchers';
import faker from 'faker';
import app from '../src/';

describe('Base session', () => {
  let server;

  beforeAll(() => {
    jasmine.addMatchers(matchers);
  });

  beforeEach(() => {
    server = app().listen();
  });

  test('Get /session', async () => {
    const res = await request.agent(server)
      .get('/session');
    expect(res.status).toBe(200);
  });

  test('Post /session', async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const res = await request.agent(server)
      .post('/session')
      .send(user);
    expect(res.status).toBe(200);
  });

  test('Delete /session', async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const res = await request.agent(server)
      .post('/session')
      .send(user);
    expect(res.status).toBe(200);

    const res2 = await request.agent(server)
      .delete('/session');
    expect(res2.status).toBe(302);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
