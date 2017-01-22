const logger = require('../utils/logger')
const Router = require('koa-router')
const bluebird = require('bluebird')
const globCb = require('glob')
const path = require('path')

const glob = bluebird.promisify(globCb)
const bundleRoutes = async accessLevel => {
  const router = new Router()
  const routePath = path.resolve(`src/modules/${accessLevel}/**/routes/*.js`)
  const dirnameLength = __dirname.length;
  const routes = await glob(routePath)

  routes.forEach(async route => {
    logger.info(`registering ${route.substr(dirnameLength)}`)
    await require(route)(router)
  })

  return router.routes()
}

module.exports = bundleRoutes
