const { Router } = require('express')
const products = require('../data/products')

const router = Router()

router.get('/', (req, res) => {
  res.json({ products })
})

module.exports = router
