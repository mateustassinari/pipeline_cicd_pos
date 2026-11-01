const http = require('node:http')
const app = require('./app')

const port = Number(process.env.PORT) || 3000

http.createServer(app).listen(port, () => {
  console.log(`Executando em http://localhost:${port}`)
})
