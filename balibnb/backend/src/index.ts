import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routers'

dotenv.config()

const PORT = parseInt(process.env.PORT as string) || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routers)

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    response: 'Welcome to Balibnb api',
  })
})


app.listen(PORT, '0.0.0.0', () => {
  console.log('Server is running on 0.0.0.0:' + PORT)
})
