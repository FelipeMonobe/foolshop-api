const logger = require('../utils/logger.util')
const dotenv = require('dotenv')

dotenv.config()

const variables = require(`../env/${process.env.NODE_ENV}.env`)
const check = (node, parent) =>
  Object
  .keys(node)
  .forEach(property => {
    if (node[property] !== null &&
      typeof(node[property]) === 'object' &&
      !Array.isArray(node[property])) {
      return check(node[property], property)
    }

    return logger.warn(`${parent.toUpperCase()}_${property.toUpperCase()}=${node[property]}`)
  })

module.exports = {
  check,
  variables,
}
