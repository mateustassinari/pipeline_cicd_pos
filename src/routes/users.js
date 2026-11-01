const { Router } = require('express')
const users = require('../data/users')

const router = Router()

router.get('/', (req, res) => {
  res.json({ users })
})

router.get('/:id', (req, res) => {
  const user = users.filter((u) => u.id == req.params.id)

  if (user.length === 0) {
    return res.status(400).send('User not found')
  }

  res.json({ user })
})

module.exports = router
