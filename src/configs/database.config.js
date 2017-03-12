// @flow

const logger = require('../utils/logger.util')
const env = require('./environment.config')
const mongoose = require('mongoose')
const pify = require('pify')
const {
  apply,
  partial,
  path,
  pipe,
  prop,
  tryCatch,
} = require('ramda')

const connectionStr: string = path(['variables', 'database', 'CONN'], env)

const setup: Function = (): void =>
  tryCatch(pipe(
    partial(prop('connect', mongoose), connectionStr),
    partial(prop('info', logger), '|DTB| MongoDB')
  ), (prop('error', logger)))

module.exports = {
  setup,
}
