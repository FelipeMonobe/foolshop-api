const logger = require('../utils/logger.util')
const env = require('./environment.config')
const mongoose = require('mongoose')
const pify = require('pify')

const connectionStr = env.variables.database.connection

const setup = () => {
  mongoose.connect(connectionStr)
  logger.info('|DTB| MongoDB')
}

module.exports = {
  setup,
}
