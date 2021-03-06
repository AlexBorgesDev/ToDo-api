import prismaClient from '../../prisma'

import { SessionError } from '../../errors/SessionError'

class CreateToDoService {
  async execute(task: string, userId: string) {
    const userExist = await prismaClient.user.findFirst({
      where: { id: userId },
    })

    if (!userExist) {
      throw new SessionError({
        errorCode: 'token.invalid',
        description: 'Invalid token',
      })
    }

    const toDo = await prismaClient.toDo.create({
      data: { task, userId },
      select: {
        id: true,
        task: true,
        completed: true,
        completedAt: true,
        createdAt: true,
      },
    })

    return toDo
  }
}

export { CreateToDoService }
