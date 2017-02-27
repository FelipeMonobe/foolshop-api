// @flow

const logger: any = require('../utils/logger.util')
const mongoose: any = require('mongoose')
const globCb: any = require('glob')
const pify: any = require('pify')
const path: any = require('path')
const fs: any = require('fs')

const glob: any = pify(globCb)
const readdir: any = pify(fs.readdir)
const modelsPath: string = path.resolve('src/modules/**/*.model.js')

const setup = async (): Promise<void> => {
  const models: string[] = await glob(modelsPath)

  mongoose.Promise = global.Promise

  return await models
    .forEach(file => {
      require(file)
      logger.info(`|MDL| ${file.substr(__dirname.length)}`)
    })
}

module.exports = {
  setup,
}
