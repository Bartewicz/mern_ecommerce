import { Router } from 'express'

import { User } from '../../models/User.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { authenticateUser } from './utils.js'
import { isNotNull } from '@mr-bean/shared'

const router = Router()

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body
      const existingUser = await User.findOne({ email }, '_id role').exec()
      const isPasswordCorrect = await existingUser.checkPassword(password)

      if (!isPasswordCorrect) throw new Error()

      const { token, user } = authenticateUser(existingUser)

      res.status(200).headers('authorization', token).send(user)
    } catch (err) {
      res.status(404)
      throw new Error('Invalid email or password.')
    }
  })
)

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email }).exec()

    // TODO add instance of ValidationError
    if (isNotNull(existingUser)) throw new Error('Email already exists')

    try {
      const savedUser = await new User({ email, password }).save()
      const { token, user } = authenticateUser(savedUser)

      res.status(201).headers('authorization', token).send(user)
    } catch (err) {
      res.status(400)
      throw err
    }
  })
)

router.post(
  '/change-password',
  asyncHandler(async (req, res) => {
    try {
      const { email, oldPassword, newPassword } = req.body
      const existingUser = await User.findOne({ email }, '_id role').exec()
      const isOldPasswordValid = await existingUser.checkPassword(oldPassword)
      if (!isOldPasswordValid) throw new Error('Invalid password')

      const isNewPasswordValid = await existingUser.setNewPassword(newPassword)
      if (!isNewPasswordValid)
        throw new Error(
          'Password must have at least 8 characters and include minimum 1 number, 1 lowercase and 1 uppercase characters'
        )
      const { token, user } = authenticateUser(existingUser)

      res.status(202).headers('authorization', token).send(user)
    } catch (err) {
      res.status(404)
      throw new Error()
    }
  })
)

export const authRouter = router
