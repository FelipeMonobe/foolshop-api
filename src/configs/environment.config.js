// @flow

const logger = require('../utils/logger.util')
const dotenv = require('dotenv').config()

const variables = require(`../env/${process.env.NODE_ENV}.env`)

const check: Function = (node: any, parent: any): void => {
  try {
    return Object
    .keys(node)
    .forEach(property => {
      if (node[property] !== null &&
        typeof(node[property]) === 'object' &&
        !Array.isArray(node[property])) {
          return check(node[property], property)
        }

        return logger.warn(`|ENV| ${parent.toUpperCase()}_${property.toUpperCase()}=${node[property]}`)
      })
  } catch (e) {
    return logger.error(e.stack)
  }
}

module.exports = {
  check,
  variables,
}
