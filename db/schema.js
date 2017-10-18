const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
    sourcelink: {
        type: String,
        
    },
    author: {
        type: String,
       
    },
    date: {
        type: String,
        
    },
    genre: {
        type: String,
        
    },
    titlelink: {
        type: String,
        
    },
    picture: {
        type: String,
        
    },
    plot: {
        type: String,
        
    },
    imageSourceArticle: {
        type: String,
    }
})
const ListSchema = mongoose.Schema({
    genre: {
        type: String,
    },
    name: {
        type: String,
    },
    imageSource: {
        type: String
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
    News, User, NewsList
}