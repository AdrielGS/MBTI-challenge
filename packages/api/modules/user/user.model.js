const Mongoose = require('mongoose')

const Schema = Mongoose.Schema

const users = new Schema({
  email: { type: String, required: true, index: { unique: true } },
  dimension: [{
  	name: { type: String, required: true },
  	result: { type: String, required: true }
	}],
	questions: [{
	  text: { type: String, required: true},
	  dimension: { type: String, required: true },
	  direction: { type: Number, required: true },
	  meaning: { type: String, required: true },
	  rank: { type: Number, required: true }
	}]
})

module.exports = Mongoose.model('Users', users, 'users')
