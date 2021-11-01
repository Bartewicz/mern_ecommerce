import { config } from '../config.js'
import logger from '../utils/logger.js'

export function errorLogger(error, req, res, next) {
  logger.error(error.message)

  if (config.NODE_ENV === 'development') {
    logger.warn(error.info)
    logger.warn(error.stack)
  }

  next(error)
}
