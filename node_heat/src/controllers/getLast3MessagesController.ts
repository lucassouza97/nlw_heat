import { Request, response, Response } from 'express'
import { getLast3MessagesService } from '../services/getLast3MessagesService'

class GetLast3MessagesController {
	async handle(req: Request, res: Response) {
		const service = new getLast3MessagesService()

		const result = await service.execute()

		return res.json(result)
	}
}

export { GetLast3MessagesController }
