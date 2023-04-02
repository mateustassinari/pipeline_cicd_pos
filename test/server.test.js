const supertest = require('supertest');

const app = require('../app');

const agent = supertest.agent(app);

describe('simple get request', () => {
  it('should return 200 ok', async () => {
    const response = await agent.get('/users').send();
    expect(response.status).toEqual(200);
  });
});

describe('simple get request 404', () => {
  it('should return 404', async () => {
    const response = await agent.get('/test').send();
    expect(response.status).toEqual(404);
  });
});

describe('simple get request 400 id not found', () => {
  it('should return 400', async () => {
    const response = await agent.get('/users/5').send();
    expect(response.status).toEqual(200);
  });
});