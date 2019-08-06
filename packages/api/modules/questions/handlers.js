const Questions = require('./questions.model')
const Dimensions = require('../dimensions/dimensions.model')

const getAll = async (req, h) => {
	const data = await Questions.find()

	return h.response(data);
}

module.exports = {
	getAll
}