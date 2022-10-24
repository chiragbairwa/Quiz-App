const fs = require('fs')
const path = require('path')
const dirCodes = path.join(__dirname, 'codes')
const { v4: uuid } = require('uuid')

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true })
}

const generateFile = async (extension, content) => {
  // Unique ID for every code
  const jobid = uuid()
  // Joining Unique Id with Extention
  const filename = `${jobid}.${extension}`
  // Full path by joining Present working dir + filename(uniqueId.js)
  const filepath = path.join(dirCodes, filename)

  await fs.writeFileSync(filepath, content)
  return filepath
}

module.exports = {
  generateFile,
}
