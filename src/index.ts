import express, { Request, Response } from 'express'
import { json } from 'body-parser'
import { errorHandler } from './middlewares/error-handler'
import { BadRequestError } from './errors'

const app = express()
app.use(json())

// example of usage
app.get('/', (req: Request, res: Response) => {
  const error = true
  if (error) {
    throw new BadRequestError('error is coming...')
  }
})

// don't forget to register the custom error handler here
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
