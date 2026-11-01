const express = require('express')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.redirect('/users'))
app.use('/users', usersRouter)
app.use('/products', productsRouter)

module.exports = app
