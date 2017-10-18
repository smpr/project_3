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
const fakeSports = new News({
  sourcelink: "Fake Sports",
  author: "Bill Barker again!",
  date: "Todays Today",
  genre: "Sports",
  titlelink:"This Is fillerAgain!!",
  picture: "Image Link again",
  plot: "Something Something Darkside part 2",
})
const newsList = new NewsList({
  genre: 'Buisness',
  name: 'SomeNewsCompany',
  imageSource: 'https://i.imgur.com/1LK18Oq.png',
  news:[fakeNews, fakeSports]
})
const newsListAgain = new NewsList({
  genre: 'Sports',
  name: 'SomeSportsCompany',
  imageSource: "https://i.imgur.com/YH2TBRL.jpg",
  news:[fakeNews]
})
const bob = new User({
  firstName: 'Bob',
  lastName: "Barker",
  email: 'priceisnotright.com',
  list: [newsList, newsListAgain]
})

User.remove({})
  .then(() => bob.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())