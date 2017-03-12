// @flow

const logger = require('../utils/logger.util')
const dotenv = require('dotenv').config()
const variables = require(`../env/${process.env.NODE_ENV}.env`)
const {
  call,
  curry,
  forEach,
  prop,
  tryCatch,
} = require('ramda')

const printProperty = curry((node: any, parent: any, property: any): void => {
  if (node[property] !== null &&
    typeof node[property] === 'object' &&
    !Array.isArray(node[property])) {
    check(node[property], property)
  }

  if (!parent) return

  call(prop('warn', logger), `|ENV| ${parent.toUpperCase()}_${property.toUpperCase()}=${node[property]}`)
})

const check = (node: any, parent: any): void =>
  tryCatch(forEach(printProperty(node, parent), Object.keys(node)),
    prop('error', logger))

module.exports = {
  check,
  variables,
}
