// @flow

const logger = require('../utils/logger.util')
const Router = require('koa-router')
const pify = require('pify')
const globCb = require('glob')
const path = require('path')

const glob: Function = pify(globCb)

const bundleRoutes: Function = async (accessLevel: string): Promise<void> => {
  try {
    const router: Router = new Router()
    const routePath: string = path.resolve(`build/modules/${accessLevel}/**/routes/*.route.js`)
    const routes: string[] = await glob(routePath)

    routes.forEach((route): void => {
      require(route)(router)
      logger.info(`|RTE| ${route.substr(__dirname.length)}`)
    })

    return router.routes()
  } catch (e) {
    return logger.error(e.stack)
  }
}

module.exports = bundleRoutes
