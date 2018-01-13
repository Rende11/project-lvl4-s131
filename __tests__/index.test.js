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

  test('index', async () => {
    const res = await request.agent(server)
      .get('/');
    expect(res.status).toBe(200);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
