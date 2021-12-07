import jwt from 'jsonwebtoken'

import { config } from '../../config.js'

export function authenticateUser(user) {
  const { _id: id, role } = user
  const userBody = { id, role }
  const token = jwt.sign(userBody, config.JWT_TOKEN_SECRET)
  return { token, user: userBody }
}
