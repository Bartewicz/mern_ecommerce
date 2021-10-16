import { Router } from 'express'

import { asyncHandler } from '../../utilities/asyncHandler.js'
import { getProductById, getProducts } from './handlers.js'

const router = new Router()

router.get('/', asyncHandler(getProducts))
router.get('/:id', asyncHandler(getProductById))

export const productsRouter = router
