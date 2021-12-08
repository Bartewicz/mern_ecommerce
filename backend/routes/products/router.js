import { Router } from 'express'

import { asyncHandler } from '../../utils/asyncHandler.js'
import { getProductById, getProducts } from './controllers.js'

const router = Router()

router.get('/', asyncHandler(getProducts))
router.get('/:id', asyncHandler(getProductById))

export const productsRouter = router
