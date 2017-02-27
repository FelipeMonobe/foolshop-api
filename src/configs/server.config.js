// @flow

const generateRoutes: any = require('./router.config')
const bodyParser: any = require('koa-bodyparser')()
const logger: any = require('../utils/logger.util')
const env: any = require('./environment.config')
const koaHelmet: any = require('koa-helmet')
const convert: any = require('koa-convert')
const mount: any = require('koa-mount')
const koaJwt: any = require('koa-jwt')
const Koa: any = require('koa')
const api: any = new Koa()

const setup = async (): Promise<void> => {
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
  } catch (e) {
    return logger.error(e)
  }
}

module.exports = {
  api,
  setup,
}
