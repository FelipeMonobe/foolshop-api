// @flow

const generateRoutes = require('./router.config')
const bodyParser = require('koa-bodyparser')()
const logger = require('../utils/logger.util')
const env = require('./environment.config')
const koaHelmet = require('koa-helmet')
const convert = require('koa-convert')
const mount = require('koa-mount')
const koaJwt = require('koa-jwt')
const Koa = require('koa')

const api: Koa = new Koa()

const setup: Function = async (): Promise<Koa> => {
  try {
    const secret: string = env.variables.jwt.SECRET
    const publicRoutes: any = convert(mount('/api', await generateRoutes('public')))
    const privateRoutes: any = convert(mount('/api', await generateRoutes('private')))
    const jwt: any = convert(koaJwt({ secret }))
    const helmet: any = koaHelmet()

    api.use(bodyParser)
    api.use(helmet)
    api.use(publicRoutes)
    api.use(jwt)
    api.use(privateRoutes)

    return api
  } catch (e) {
    return logger.error(e.stack)
  }
}

module.exports = {
  api,
  setup,
}
