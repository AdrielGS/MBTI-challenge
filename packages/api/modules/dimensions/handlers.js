const Dimensions = require('./dimensions.model')

const getAll = async (req, h) => {
  const data = await Dimensions.find()

  return h.response(data)
}

module.exports = {
  getAll
}
