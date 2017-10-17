const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

router.get('/:articleId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    const list = await user.list.id(req.params.listId)
    const article =await list.news.id(req.params.articleId)
    res.json(article)
  } catch (err) {
    res.send(err)
  }
})

module.exports = router