/* eslint-disable no-unused-vars */

import { config } from '../config.js'

const DEFAULT_ERROR_MSG = 'Unhandled error exception'

export function failSafeHandler(error, req, res, next) {
  const { info, stack, message = DEFAULT_ERROR_MSG } = error
  const status = res.statusCode === 200 ? 500 : res.statusCode
  const errorBody = { message }

  if (config.NODE_ENV === 'development') {
    errorBody.info = info
    errorBody.stack = stack
  }

  res.status(status).json(errorBody)
}
