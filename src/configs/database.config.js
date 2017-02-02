const logger = require('../utils/logger.util')
const env = require('./environment.config')
const mongoose = require('mongoose')
const pify = require('pify')

const connectionStr = env.variables.database.connection

const setup = cb => {
  logger.info('connecting to MongoDB')
  mongoose.connect(connectionStr, null, cb)
}

module.exports = {
  setup,
}
