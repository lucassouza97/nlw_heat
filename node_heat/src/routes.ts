import { Router } from 'express'
import { AuthenticateUserController } from './controllers/authenticateUserController'
import { CreateMessageController } from './controllers/createMessageController'
import { GetLast3MessagesController } from './controllers/getLast3MessagesController'
import { ProfileUserController } from './controllers/profileUserController'
import { ensureAuthenticate } from './middleware/ensureAuthenticated'

const router = Router()

/**
 * @swagger
 * /authenticate
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post('/authenticate', new AuthenticateUserController().handle)

/**
 * @swagger
 * /messages
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post(
	'/messages',
	ensureAuthenticate,
	new CreateMessageController().handle
)

router.get('/messages/last3', new GetLast3MessagesController().handle)
router.get('/profile', ensureAuthenticate, new ProfileUserController().handle)

export { router }
