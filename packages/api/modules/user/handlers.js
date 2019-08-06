const Dimensions = require('../dimensions/dimensions.model')
const User = require('./user.model')

const setResult = async (req, h) => {
  const { email, questions } = req.payload
  const dimensions = await Dimensions.find()
  const result = []

  dimensions.forEach((dimension) => {
    let total = 0

    const groupedDimensions = questions.filter((question) => {
      return question.dimension === dimension.name
    })

    groupedDimensions.forEach((groupedDimension) => {
      total += (groupedDimension.rank - 4) * groupedDimension.direction
    })

    result.push(
      {
        name: dimension.name,
        result: total <= 0 ? dimension.left : dimension.right
      }
    )
  })

  let user = await User.findOne({ email: email })

  if (user) {
    user.questions = questions
    user.dimension = result
  } else {
    user = new User({
      email,
      questions,
      dimension: result
    })
  }

  user.save()

  const response = {
    email: user.email,
    result: user.dimension.map((d) => d.result).join('')
  }

  return h.response(response)
}

module.exports = {
  setResult
}
