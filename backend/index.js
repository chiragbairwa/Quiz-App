const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/get', (req, res) => {
  return res.json({ language: 'en', code: 'Placeholder' })
})

app.post('/post', (req, res) => {
  const { language, code } = req.body

  return res.json({ language, code })
})

app.listen(5000, () => {
  console.log('Hello World')
})
