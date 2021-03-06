const Mongoose = require('mongoose')

const Schema = Mongoose.Schema

const users = new Schema({
  email: { type: String, required: true, index: { unique: true } },
  dimension: [{
    name: { type: String, required: true },
    result: { type: String, required: true }
  }],
  questions: [{
    // - Data must be written to a backend database in a way that we can see user's individual answers 
    // In order to make the requirement above easy to read on the User database object,
    // I've replicated all the data from Questions model here,
    // but in a real application I would just use questionId and use "ref: 'Questions'".
    text: { type: String, required: true },
    dimension: { type: String, required: true },
    direction: { type: Number, required: true },
    meaning: { type: String, required: true },
    rank: { type: Number, required: true }
  }]
})

module.exports = Mongoose.model('Users', users, 'users')
