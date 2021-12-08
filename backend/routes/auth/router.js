import { Router } from 'express'

import { asyncHandler } from '../../utils/asyncHandler.js'
import { changePassword, login, register } from './controllers.js'

const router = Router()

router.post('/login', asyncHandler(login))
router.post('/register', asyncHandler(register))
router.post('/change-password', asyncHandler(changePassword))

export const authRouter = router
