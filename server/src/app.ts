import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome to the Eu Motoboy API' })
})

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`* Running on: http://localhost:${port} (Press CTRL+C to quit)`)
  console.log(`* Respawn is active!`)
})