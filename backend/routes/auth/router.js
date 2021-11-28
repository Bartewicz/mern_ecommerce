import bcrypt from 'bcryptjs'
import { Router } from 'express'

import { User } from '../../models/User.js'

const router = Router()

router.post('/register', async (req, res) => {
  const { email, password } = req.body

  // Add validate password
  const user = new User({ email, password })
  try {
    const savedUser = await user.save()
    res.status(201).send(savedUser)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email }, '_id password').exec()
    const isPasswortCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswortCorrect) throw new Error()
    res.status(200).send(user._id)
  } catch (err) {
    res.status(404)
    throw new Error('Invalid email or password.')
  }
})
