import { model, Schema } from 'mongoose'

export const USER = 'User'

const USER_ROLES = ['admin', 'customer']

function validateRole(role) {
  return USER_ROLES.includes(role)
}

const userSchema = new Schema(
  {
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true }, // validator: [async Function] { get all emails from users and compare }
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      default: 'customer',
      validate: {
        validator: validateRole,
        message: (role) => `${role} is not valid!`,
      },
    },
  },
  { timestamps: true }
)

export const User = model(USER, userSchema)
