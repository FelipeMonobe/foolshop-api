// @flow

const logger = require('../utils/logger.util')
const mongoose = require('mongoose')
const globCb = require('glob')
const pify = require('pify')
const path = require('path')
const fs = require('fs')

const glob: Function = pify(globCb)
const readdir: Function = pify(fs.readdir)
const modelsPath: string = path.resolve('build/modules/**/*.model.js')

const setup: Function = async (): Promise<void> => {
  try {
    const models: string[] = await glob(modelsPath)

    mongoose.Promise = global.Promise

    return models
    .forEach(file => {
      require(file)
      logger.info(`|MDL| ${file.substr(__dirname.length)}`)
    })
  } catch (e) {
    return logger.error(e.stack)
  }
}

module.exports = {
  setup,
}
