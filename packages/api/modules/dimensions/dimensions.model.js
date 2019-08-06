const Mongoose = require('mongoose')

const Schema = Mongoose.Schema

const dimensions = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  left: { type: String, required: true },
  right: { type: String, required: true }
})

module.exports = Mongoose.model('Dimensions', dimensions, 'dimensions')
