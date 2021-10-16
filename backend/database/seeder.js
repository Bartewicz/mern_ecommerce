import dotenv from 'dotenv'

import { products } from '../data/products.js'
import { users } from '../data/users.js'
import { Order } from '../models/Order.js'
import { Product } from '../models/Product.js'
import { User } from '../models/User.js'
import logger from '../utilities/logger.js'
import { database } from './index.js'

const ACTION_TYPE = {
  delete: '--delete',
  insert: '--insert',
}

const action = process.argv[2]

dotenv.config()
database.initializeConnection()

async function cleanUpDatabase() {
  await Order.deleteMany()
  await Product.deleteMany()
  await User.deleteMany()
}

const deleteData = async () => {
  try {
    await cleanUpDatabase()
    logger.warn('Data deleted!').then(process.exit)
  } catch (error) {
    logger.error(error).then(() => process.exit(1))
  }
}

const insertData = async () => {
  try {
    await cleanUpDatabase()

    const createdUsers = await User.insertMany(users)
    const adminUserId = createdUsers.find((user) => user.role === 'admin')._id
    const sampleProducts = products.map((product) => ({
      ...product,
      createdBy: adminUserId,
    }))
    await Product.insertMany(sampleProducts)

    logger.success('Data inserted!').then(process.exit)
  } catch (error) {
    logger.error(error).then(() => process.exit(1))
  }
}

switch (action) {
  case ACTION_TYPE.delete:
    deleteData()
    break
  case ACTION_TYPE.insert:
    insertData()
    break
  default:
    logger.error('Invalid argument!').then(() => process.exit(1))
    break
}
