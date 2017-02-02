const logger = require('../utils/logger.util')
const mongoose = require('mongoose')
const globCb = require('glob')
const pify = require('pify')
const path = require('path')
const fs = require('fs')

const glob = pify(globCb)
const readdir = pify(fs.readdir)
const modelsPath = path.resolve('src/modules/**/*.model.js')
const setup = async () => {
  const models = await glob(modelsPath)

  mongoose.Promise = global.Promise

  return await models
    .forEach(file => {
      logger.info(`requiring ${file.substr(__dirname.length)}`)
      require(file)
    })
}

module.exports = {
  setup,
}
