const supertest = require('supertest')
const app = require('../src/app')

const agent = supertest.agent(app)

describe('GET /users', () => {
  it('should return 200 and the user list', async () => {
    const response = await agent.get('/users')
    expect(response.status).toEqual(200)
    expect(response.body.users).toHaveLength(3)
  })
})

describe('GET /users/:id', () => {
  it('should return 200 and the user when the id exists', async () => {
    const response = await agent.get('/users/1')
    expect(response.status).toEqual(200)
    expect(response.body.user[0].email).toEqual('user1@email.com')
  })

  it('should return 400 when the id is not found', async () => {
    const response = await agent.get('/users/5')
    expect(response.status).toEqual(400)
  })
})

describe('GET /products', () => {
  it('should return 200 and the product list', async () => {
    const response = await agent.get('/products')
    expect(response.status).toEqual(200)
    expect(response.body.products).toHaveLength(2)
  })
})

describe('GET /', () => {
  it('should redirect to /users', async () => {
    const response = await agent.get('/')
    expect(response.status).toEqual(302)
    expect(response.headers.location).toEqual('/users')
  })
})

describe('unknown route', () => {
  it('should return 404', async () => {
    const response = await agent.get('/test')
    expect(response.status).toEqual(404)
  })
})
