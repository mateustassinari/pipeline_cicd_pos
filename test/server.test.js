const supertest = require('supertest');

const app = require('../app');

const agent = supertest.agent(app);

describe('simple get request', () => {
  it('should return 200 ok', async () => {
    const response = await agent.get('/hello').send();
    expect(response.status).toEqual(200);
  });
});

describe('simple get request 404', () => {
  it('should return 404 ok', async () => {
    const response = await agent.get('/test').send();
    expect(response.status).toEqual(404);
  });
});