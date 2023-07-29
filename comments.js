// Create web server
// 1. Import express
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const app = express()

// 2. Setup port
const port = process.env.PORT || 4001

// 3. Setup body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 4. Setup cors
app.use(cors())

// 5. Setup routes
app.get('/posts/:id/comments', async (req, res) => {
  const { data } = await axios.get(
    `http://localhost:4002/posts/${req.params.id}/comments`
  )
  res.send(data)
})

app.post('/posts/:id/comments', async (req, res) => {
  const { data } = await axios.post(
    `http://localhost:4002/posts/${req.params.id}/comments`,
    req.body
  )
  res.send(data)
})

// 6. Start server
app.listen(port, () => {
  console.log(`Comments Service running at port: ${port}`)
})