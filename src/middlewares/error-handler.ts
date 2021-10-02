import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    // if the catched 'err' is instantiated by classes that extending the 'CustomError', then..
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  // for generic errors
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }]
  })
}
