// @flow

import request from 'supertest';
import faker from 'faker';
import app from '../src/';

describe('Base session', () => {
  let server;

  beforeEach(() => {
    server = app().listen();
  });

  test('Get /session/new', async () => {
    const res = await request.agent(server)
      .get('/session/new');
    expect(res.status).toBe(200);
  });

  test('Post /session/new', async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const res = await request.agent(server)
      .post('/session/new')
      .send(user);
    expect(res.status).toBe(200);
  });

  test('Delete /session', async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const res = await request.agent(server)
      .post('/session/new')
      .send(user);
    expect(res.status).toBe(200);

    const res2 = await request.agent(server)
      .delete('/session');
    expect(res2.statusCode).toBe(302);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
