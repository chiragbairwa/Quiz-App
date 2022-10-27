const express = require('express')
const { generateFile } = require('./generateFile')
const { executeCpp } = require('./executeCpp')
const { executePy } = require('./executePy')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/get', (req, res) => {
  return res.json({ language: 'en', code: 'Placeholder' })
})

app.post('/post', async (req, res) => {
  const { language, code } = req.body
  let output = ''

  if (code === '') {
    return res.status(400).json({ success: false, error: 'Empty Code' })
  }
  // Generate a c++ file with content requested
  const filepath = await generateFile(language, code)

  // Run the file and send
  try {
    if (language === 'cpp') {
      output = await executeCpp(filepath)
    }
    if (language === 'py') {
      output = await executePy(filepath)
    }

    return res.status(200).json({ filepath, output })
  } catch (err) {
    let stdErr = { err }.err['stderr']
    stdErr = stdErr.replace(
      'C:\\Users\\Asus\\Desktop\\Chirag\\Programming\\Quiz-App\\backend\\codes',
      'Path',
    )

    res.status(500).json(stdErr)
  }
})

app.listen(5000, () => {
  console.log('Running...')
})
