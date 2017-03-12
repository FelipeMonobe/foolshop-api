// @flow

const chalk = require('chalk')
const {
  curry,
  path,
  prop,
  tap,
} = require('ramda')

const generateChalk: Function =
  curry((color: string, msg: string): void =>
    tap(prop('log', console), path(['bold', color], chalk)(`[${new Date().toISOString()}] ${msg}`)))

const error: Function = generateChalk('red')
const success: Function = generateChalk('green')
const info: Function = generateChalk('blue')
const warn: Function = generateChalk('yellow')
const log: Function = generateChalk('white')

module.exports = {
  error,
  success,
  info,
  warn,
  log,
}
