import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { isEmail, isStrongPassword } from 'validator'

import { PASSWORD_REQUIREMENTS } from '../globals.js'

export const USER = 'User'

export const USER_ROLES = ['admin', 'customer']

const { model, Schema } = mongoose

function validatePasswordStrength(candidatePassword) {
  return isStrongPassword(candidatePassword, PASSWORD_REQUIREMENTS)
}

function validateRole(role) {
  return USER_ROLES.includes(role)
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      validator: [isEmail, 'Email not in valid format'],
    },
    password: {
      type: String,
      required: true,
      validator: [
        validatePasswordStrength,
        'Password must have at least 8 characters and include minimum 1 number, 1 lowercase and 1 uppercase characters',
      ],
    },
    role: {
      type: String,
      required: true,
      default: 'customer',
      validate: {
        validator: [validateRole, 'Role not valid'],
      },
    },
  },
  { timestamps: true }
)

userSchema.methods.checkPassword = async function checkPassword(password) {
  return bcrypt.compare(password, this.password)
}

userSchema.methods.setNewPassword = async function setNewPassword(newPassword) {
  const isValidPassword = validatePasswordStrength(newPassword)
  if (isValidPassword) {
    this.password = await bcrypt.hash(newPassword, 10)
  }
  return isValidPassword
}

export const User = model(USER, userSchema)
