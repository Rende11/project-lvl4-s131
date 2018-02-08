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

  test('Get /statuses/new', async () => {
    const res = await request.agent(server)
      .get('/statuses/new');
    expect(res.status).toBe(200);
  });

  test('Get /statuses', async () => {
    const res = await request.agent(server)
      .get('/statuses');
    expect(res.status).toBe(200);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
