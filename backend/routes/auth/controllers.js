import { User, validatePasswordStrength } from '../../models/User.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { authenticateUser, hashPassword } from './utils.js'
import { isNotNull, isNull } from '@mr-bean/shared'

export const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email }).exec()
    const isPasswordCorrect = await existingUser.checkPassword(password)
    if (!isPasswordCorrect) throw new Error()

    const { token, user } = authenticateUser(existingUser)

    res.status(200).header('Authorization', token).send(user)
  } catch (err) {
    res.status(400)
    throw new Error('Invalid email or password')
  }
})

export const register = asyncHandler(async (req, res) => {
  try {
    const { email, password: passwordCandidate } = req.body
    const existingUser = await User.findOne({ email }).exec()
    if (isNotNull(existingUser)) throw new Error('Email already exists')

    const isValidPassword = validatePasswordStrength(passwordCandidate)
    if (!isValidPassword) {
      throw new Error(
        'Password must have at least 8 characters and include minimum 1 number, 1 lowercase and 1 uppercase characters'
      )
    }

    const password = await hashPassword(passwordCandidate)
    const savedUser = await new User({ email, password }).save()
    const { token, user } = authenticateUser(savedUser)

    res.status(201).header('Authorization', `Bearer ${token}`).send(user)
  } catch (err) {
    res.status(400)
    throw err
  }
})

export const changePassword = asyncHandler(async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body
    const existingUser = await User.findOne({ email }).exec()
    if (isNull(existingUser)) throw new Error('Email does not exist')

    const isOldPasswordValid = await existingUser.checkPassword(oldPassword)
    if (!isOldPasswordValid) throw new Error('Invalid password')

    const isNewPasswordValid = await existingUser.setNewPassword(newPassword)
    if (!isNewPasswordValid) {
      throw new Error(
        'Password must have at least 8 characters and include minimum 1 number, 1 lowercase and 1 uppercase characters'
      )
    }

    await existingUser.save()
    res.status(202).send('Password updated')
  } catch (err) {
    res.status(400)
    throw err
  }
})
