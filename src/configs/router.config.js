// @flow

const logger: any = require('../utils/logger.util')
const Router: any = require('koa-router')
const pify: any = require('pify')
const globCb: any = require('glob')
const path: any = require('path')

const glob = pify(globCb)

const bundleRoutes = async (accessLevel: string) : Promise<void> => {
  const router: any = new Router()
  const routePath: string = path.resolve(`src/modules/${accessLevel}/**/routes/*.route.js`)
  const routes: string[] = await glob(routePath)

  routes.forEach(async (route): Promise<void> => {
    await require(route)(router)
    logger.info(`|RTE| ${route.substr(__dirname.length)}`)
  })

  return router.routes()
}

module.exports = bundleRoutes
