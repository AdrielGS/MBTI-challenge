const Questions = require('./questions.model')

const getAll = async (req, h) => {
  const data = await Questions.find()

  return h.response(data)
}

module.exports = {
  getAll
}
