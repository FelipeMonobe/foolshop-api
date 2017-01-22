const generateRoutes = require('./configs/router')
const env = require('./configs/environment')
const logger = require('./utils/logger')
const koaHelmet = require('koa-helmet')
const convert = require('koa-convert')
const mount = require('koa-mount')
const koaJwt = require('koa-jwt')
const Koa = require('koa')

const api = new Koa()
const main = async () => {
  try {
    const port = env.variables.api.PORT
    const host = env.variables.api.HOST
    const secret = env.variables.jwt.SECRET
    const upMessage = () => logger.success(`server @ http://${host}:${port}/api/`)
    const privateRoutes = convert(mount('/api', await generateRoutes('private')))
    const publicRoutes = convert(mount('/api', await generateRoutes('public')))
    const jwt = convert(koaJwt({ secret }))
    const helmet = koaHelmet()

    api.use(helmet)
    api.use(publicRoutes)
    api.use(jwt)
    api.use(privateRoutes)

    env.check(env.variables)

    api.listen(port, upMessage)
  } catch (e) {
    return logger.error(e)
  }
}

main()
