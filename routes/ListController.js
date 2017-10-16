const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
  try {
    const list = await User.find({})
    res.json(list)
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const list = await User.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body.user)
    const saved = await newUser.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})

module.exports = router