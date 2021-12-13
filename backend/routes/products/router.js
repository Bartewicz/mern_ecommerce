import { Router } from 'express'

import { getProductById, getProducts } from './controllers.js'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProductById)

export const productsRouter = router
