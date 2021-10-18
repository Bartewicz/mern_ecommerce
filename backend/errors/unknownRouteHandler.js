/* eslint-disable no-unused-vars */
import logger from '../utilities/logger.js'

export function unknownRouteHandler(request, response, next) {
  const { originalUrl, method } = request

  const error = new Error(`Not Found`)
  error.info = `Attempt to access not implemented route: ${method} ${originalUrl}`

  response.status(404)
  logger.error(error.info)
  next(error)
}
