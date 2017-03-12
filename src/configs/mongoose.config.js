// @flow

const logger = require('../utils/logger.util')
const mongoose = require('mongoose')
const globCb = require('glob')
const pify = require('pify')
const path = require('path')
const {
  call,
  forEach,
  length,
  lensProp,
  prop,
  set,
  tryCatch,
} = require('ramda')

const glob: Function = call(pify, globCb)
const modelsPath: string = call(prop('resolve', path), 'build/modules/**/*.model.js')
const dirnameLength: number = length(__dirname)
const requireModel: Function = (file: string): void => {
  call(require, file)
  call(prop('info', logger), `|MDL| ${file.substr(dirnameLength)}`)
}
const makeSetup: Function = (modelsPath: string[]): Function =>
  tryCatch(async (): Promise<void> => {
    const models: string[] = await glob(modelsPath)

    set(lensProp('Promise'), prop('Promise', global), mongoose)
    forEach(requireModel, models)
  }, prop('error',logger))

module.exports = {
  setup: makeSetup(modelsPath),
}
