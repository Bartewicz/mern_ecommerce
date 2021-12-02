import bcrypt from 'bcryptjs'
import { Router } from 'express'

import { User } from '../../models/User.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { isNull } from '@mr-bean/shared'

const router = Router()

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body
      const existingUser = await User.findOne({ email }).exec()
      if (!isNull(existingUser)) throw new Error('Email already exists')

      // Add validate password to schema
      const user = new User({ email, password })
      const savedUser = await user.save()
      res.status(201).send(savedUser)
    } catch (err) {
      res.status(400)
      throw err
    }
  })
)

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email }, '_id password').exec()
      const isPasswordCorrect = await bcrypt.compare(password, user.password)

      if (!isPasswordCorrect) throw new Error()
      res.status(200).send(user._id)
    } catch (err) {
      res.status(404)
      throw new Error('Invalid email or password.')
    }
  })
)

export const authRouter = router
