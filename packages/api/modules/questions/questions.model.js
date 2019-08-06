const Mongoose = require('mongoose')

const Schema = Mongoose.Schema

const questions = new Schema({
  text: { type: String, required: true, index: { unique: true } },
  dimension: { type: String, required: true },
  direction: { type: Number, required: true },
  meaning: { type: String, required: true }
})

module.exports = Mongoose.model('Questions', questions, 'questions')
