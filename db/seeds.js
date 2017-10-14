require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const {  News, User, NewsList } = require('./schema')

const fakeNews = new News({
    sourcelink: "Fake News",
    author: "Bill Barker",
    date: "Today",
    genre: "Buisness",
    titlelink:"This Is filler!",
    picture: "Image Link",
    plot: "Something Something Darkside",
})
const newsList = new NewsList({
  genre: 'Buisness',
  news:[fakeNews,{}]
})
const bob = new User({
  firstName: 'Bob',
  lastName: "Barker",
  email: 'priceisnotright.com',
  list: [newsList, {}]
})

User.remove({})
  .then(() => bob.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())