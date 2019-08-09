require('dotenv').config()
require('./config/db')

const Hapi = require('@hapi/hapi')
const Routes = require('./config/routes')

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: process.env.PORT || 5000,
  routes: {
    cors: true,
    validate: {
      failAction: (request, h, err) => {
        throw err
      }
    }
  }
})

// Loading routes
server.route(Routes)

server.ext('onPreResponse', (request, h) => {
  const response = request.response

  // There is a validation error
  if (response.isJoi) {
    const errors = []
    response.details.forEach((error) => {
      errors.push({
        message: error.type,
        field: error.context.key
      })
    })
    const res = h.response(response.details)
    res.statusCode = 400
    return res
  }

  return h.continue
})

const start = async () => {
  try {
    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
  console.log('Server running at:', server.info.uri)
}

start()
