const Joi = require('@hapi/joi')

const id = Joi.string().trim().lowercase().regex(/^[a-f\d]{24}$/) // Mongo ID

const setResult = {
  payload: {
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    questions: Joi.array().items(
      Joi.object().keys({
        _id: id,
        text: Joi.string().trim().required(),
        dimension: Joi.string().trim().uppercase().required().length(2).valid('EI', 'SN', 'TF', 'JP'),
        direction: Joi.number().required().valid(-1, 1),
        meaning: Joi.string().trim().uppercase().required().length(1).valid('E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'),
        rank: Joi.number().required().min(1).max(7)
      })
    ).required()
  }
}

module.exports = {
  setResult
}
