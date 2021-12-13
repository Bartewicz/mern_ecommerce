import { Router } from 'express'

import { authorizedAccess } from '../../utils/authorizedAccess.js'
import { changePassword, login, register } from './controllers.js'

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.route('/change-password').post(authorizedAccess(), changePassword)

export const authRouter = router
