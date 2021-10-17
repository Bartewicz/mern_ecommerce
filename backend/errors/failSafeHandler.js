/* eslint-disable no-unused-vars */

import { config } from '../config.js'

const DEFAULT_ERROR_MSG = 'Unhandled error exception'

export function failSafeHandler(error, req, res, next) {
  const { message = DEFAULT_ERROR_MSG, stack } = error
  const errorBody = { message }

  if (config.NODE_ENV === 'development') {
    errorBody.stack = stack
  }

  res.status(500).json(errorBody)
}
