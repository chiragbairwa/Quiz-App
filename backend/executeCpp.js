const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const outputPath = path.join(__dirname, 'output')

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true })
}

const executeCpp = (filepath) => {
  return new Promise((resolve, reject) => {
    // jobid.cpp
    const jobid = path.basename(filepath).split('.')[0]
    const outPath = path.join(outputPath, `${jobid}.out`)

    // executing file
    return new Promise((resolve, reject) => {
      exec(
        `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobid}.out`,
        (error, stdout, stderr) => {
          if (error) {
            if (error) {
              reject({ error, stderr })
            }
          }
          if (stderr) {
            reject(stderr)
          }
          resolve(stdout)
        },
      )
    })
  })
}

module.exports = {
  executeCpp,
}
