import { config } from '../config.js'
import logger from '../utils/logger.js'
import { isString } from '@mr-bean/shared'

export function errorLogger(error, req, res, next) {
  const errorMessage = isString(error) ? error : error.message
  logger.error({ message: errorMessage })

  if (config.NODE_ENV === 'development') {
    logger.warn({ info: error.info })
    logger.warn({ stack: error.stack })
  }

  next(error)
}
