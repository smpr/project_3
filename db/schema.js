const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
  
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
    }
})

const NewsStory = mongoose.model('NewsStory', NewsSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  NewsStory, User
}