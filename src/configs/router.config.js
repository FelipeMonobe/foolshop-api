const logger = require('../utils/logger.util')
const Router = require('koa-router')
const pify = require('pify')
const globCb = require('glob')
const path = require('path')

const glob = pify(globCb)
const bundleRoutes = async accessLevel => {
  const router = new Router()
  const routePath = path.resolve(`src/modules/${accessLevel}/**/routes/*.route.js`)
  const routes = await glob(routePath)

  routes.forEach(async route => {
    await require(route)(router)
    logger.info(`|RTE| ${route.substr(__dirname.length)}`)
  })

  return router.routes()
}

module.exports = bundleRoutes
