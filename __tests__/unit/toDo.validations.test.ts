import { v4 as uuid } from 'uuid'
import { ValidationError } from 'yup'

import ToDoValidations from '../../src/validations/ToDo.validations'

describe('Test create validation', () => {
  it('should return an error when the data is invalid', async () => {
    await expect(ToDoValidations.create({})).rejects.toBeInstanceOf(
      ValidationError
    )
  })

  it('should return undefined when data is valid', async () => {
    const data = { task: 'Task' }

    await expect(ToDoValidations.create(data)).resolves.toBeUndefined()
  })
})

describe('Test delete validation', () => {
  it('should return an error when the data is invalid', async () => {
    await expect(ToDoValidations.delete({})).rejects.toBeInstanceOf(
      ValidationError
    )
  })

  it('should return undefined when data is valid', async () => {
    const data = { id: uuid(), userId: uuid() }

    await expect(ToDoValidations.delete(data)).resolves.toBeUndefined()
  })
})
