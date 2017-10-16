const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

router.get('/:listId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    const list = await user.list.id(req.params.listId)
    res.json(list)
  } catch (err) {
    res.send(err)
  }
})

module.exports = router