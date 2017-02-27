// @flow

const logger: any = require('../utils/logger.util')
const dotenv: any = require('dotenv')

dotenv.config()

const variables: any = require(`../env/${process.env.NODE_ENV}.env`)

const check = (node: any, parent: any): void =>
  Object
  .keys(node)
  .forEach(property => {
    if (node[property] !== null &&
      typeof(node[property]) === 'object' &&
      !Array.isArray(node[property])) {
      return check(node[property], property)
    }

    return logger.warn(`|ENV| ${parent.toUpperCase()}_${property.toUpperCase()}=${node[property]}`)
  })

module.exports = {
  check,
  variables,
}
