/* eslint-disable no-unused-vars */

export function failSafeHandler(error, req, res, next) {
  res.status(500).send(error.message)
}
