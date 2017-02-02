const generateRoutes = require('./router.config')
const bodyParser = require('koa-bodyparser')()
const logger = require('../utils/logger.util')
const env = require('./environment.config')
const koaHelmet = require('koa-helmet')
const convert = require('koa-convert')
const mount = require('koa-mount')
const koaJwt = require('koa-jwt')
const Koa = require('koa')
const api = new Koa()

const setup = async () => {
  try {
    const secret = env.variables.jwt.SECRET
    const publicRoutes = convert(mount('/api', await generateRoutes('public')))
    const privateRoutes = convert(mount('/api', await generateRoutes('private')))
    const jwt = convert(koaJwt({ secret }))
    const helmet = koaHelmet()

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
