const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const outputPath = path.join(__dirname, 'output')

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true })
}

const executePy = (filepath) => {
  // jobid.py
  // const jobid = path.basename(filepath).split('.')[0]

  // executing file
  return new Promise((resolve, reject) => {
    exec(`python ${filepath}`, (error, stdout, stderr) => {
      if (error) {
        if (error) {
          reject({ error, stderr })
        }
      }
      if (stderr) {
        reject(stderr)
      }
      resolve(stdout.trimEnd())
    })
  })
}

module.exports = {
  executePy,
}
