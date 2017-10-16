const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

router.get('/:articleId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    console.log('test 1')
    const list = await user.list.id(req.params.listId)
    console.log("test 2")
    const article =await list.news.id(req.params.articleId)
    console.log('test 3')
    console.log(article)
    res.json(article)
  } catch (err) {
    res.send(err)
  }
})

module.exports = router