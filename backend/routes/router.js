import { Router } from 'express'

import { productsRouter } from './products/router.js'

export const router = new Router()

router.use('/products', productsRouter)
