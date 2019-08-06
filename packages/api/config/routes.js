const questions = require('../modules/questions/handlers')
const user = require('../modules/user/handlers')
const userValidation = require('../modules/user/validation')

const routes = [
  {
    method: 'GET',
    path:'/',
    handler: (req, h) => {
      return 'Hello World!';
    }
  },
  {
    method: 'GET',
    path:'/questions',
    handler: (req, h) => questions.getAll(req, h)
  },
  {
    method: 'POST',
    path:'/user/result',
    handler: (req, h) => user.setResult(req, h),
    options: {
    	validate: userValidation.setResult
    }
  }
]

module.exports = routes