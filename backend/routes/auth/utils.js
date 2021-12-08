import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { config } from '../../config.js'

const SALT_FACTOR = 10

export function authenticateUser(user) {
  const { _id: id, role } = user
  const userBody = { id, role }
  const token = jwt.sign(userBody, config.JWT_TOKEN_SECRET)
  return { token, user: userBody }
}

export async function hashPassword(password) {
  return bcrypt.hash(password, SALT_FACTOR)
}
