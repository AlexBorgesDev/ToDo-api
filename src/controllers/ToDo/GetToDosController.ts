import { Request, Response } from 'express'

import { GetToDosService } from '../../services/ToDo/GetToDosService'

class GetToDosController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const toDos = await new GetToDosService().execute(userId)

    return res.status(200).json(toDos)
  }
}

export { GetToDosController }
