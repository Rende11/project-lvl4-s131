// @flow

import request from 'supertest';
import app from '../src/';

describe('Base test - app', () => {
  let server;

  beforeEach(() => {
    server = app().listen();
  });

  test('Get /user/new', async () => {
    const res = await request.agent(server)
      .get('/user/new');
    expect(res.status).toBe(200);
  });

  test('Post /user/new', async () => {
    const user = {
      firstname: 'TestFirstName',
      lastname: 'TestLastName',
      email: 'test@email.com',
      password: 'qwerty',
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
