import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

import { config } from '../config.js'
import { User, USER_ROLES } from '../models/User.js'
import { asyncHandler } from './asyncHandler.js'
import { isNull } from '@mr-bean/shared'

const { isValidObjectId } = mongoose

export function authorizedAccess(eligibleRoles = USER_ROLES) {
  return asyncHandler(async (req, res, next) => {
    try {
      const { authorization } = req.headers
      if (typeof authorization !== 'string') throw new Error()

      const maybeToken = authorization.split(' ')[1]
      const decoded = jwt.verify(maybeToken, config.JWT_TOKEN_SECRET)
      if (
        !isValidObjectId(decoded.id) ||
        !eligibleRoles.includes(decoded.role)
      ) {
        throw new Error()
      }

      const user = await User.findById(decoded.id).select('-password').exec()
      if (isNull(user)) throw new Error()

      next()
    } catch (err) {
      res.status(401)
      throw new Error('Unauthorized')
    }
  })
}
