// @flow

import request from 'supertest';
import matchers from 'jest-supertest-matchers';
import app from '../src/';

describe('Base test - app', () => {
  let server;

  beforeAll(() => {
    jasmine.addMatchers(matchers);
  });

  beforeEach(() => {
    server = app().listen();
  });

  test('Get /tasks/new', async () => {
    const res = await request.agent(server)
      .get('/tasks/new');
    expect(res.status).toBe(200);
  });

  test('Get /tasks', async () => {
    const res = await request.agent(server)
      .get('/tasks');
    expect(res.status).toBe(200);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
