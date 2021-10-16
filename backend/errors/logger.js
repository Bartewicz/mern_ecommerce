import logger from '../utilities/logger.js'

export function errorLogger(error, req, res, next) {
  logger.error(error.message).then(() => next(error))
}
