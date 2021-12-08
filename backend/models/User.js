import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import validator from 'validator'

import { PASSWORD_REQUIREMENTS } from '../globals.js'
import { hashPassword } from '../routes/auth/utils.js'

export const USER = 'User'
export const USER_ROLES = ['admin', 'customer']

const { model, Schema } = mongoose
const { isEmail, isStrongPassword } = validator

export function validatePasswordStrength(candidatePassword) {
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
      validate: {
        validator: isEmail,
        message: 'Email not in valid format',
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'customer',
      validate: {
        validator: validateRole,
        message: 'Role not valid',
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
    this.password = await hashPassword(newPassword)
  }
  return isValidPassword
}

export const User = model(USER, userSchema)
