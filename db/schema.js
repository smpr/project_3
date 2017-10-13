const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
    source: {
        type: String,
        default: "Default"
    },
    author: {
        type: String,
        default: "Default"
    },
    date: {
        type: String,
        default: "Default"
    },
    genre: {
        type: String,
        default: "Default"
    },
    title: {
        type: String,
        default: "Default"
    },
    picture: {
        type: String,
        default: "Default"
    },
    plot: {
        type: String,
        default: "Default"
    },




})
const ListSchema = mongoose.Schema({
    genre: {
        type: String,
        default: "Default"
    },
    news: [NewsSchema]
})
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        default: "First Name"
    },
    lastName: {
        type: String,
        default: "Last Name"
    },
    email: {
        type: String,
        default: "Default"
    },
    list: [ListSchema]
})

const News = mongoose.model('News', NewsSchema)
const NewsList = mongoose.model('NewsList', ListSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    News, User
}