import { Router } from 'express'

import { authRouter } from './auth/router.js'
import { productsRouter } from './products/router.js'

export const router = Router()

router.use('/authorization', authRouter)
router.use('/products', productsRouter)
