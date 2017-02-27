// @flow

const database: any = require('./configs/database.config')
const mongoose: any = require('./configs/mongoose.config')
const env: any = require('./configs/environment.config')
const server: any = require('./configs/server.config')
const logger: any = require('./utils/logger.util')

const main = async (): Promise<*> => {
  const api: any = server.api
  const port: number = env.variables.api.PORT
  const host: string = env.variables.api.HOST
  const showUpMessage = (): void => logger.success(`|SRV| http://${host}:${port}/api/`)

  env.check(env.variables)

  database.setup()
  await mongoose.setup()
  await server.setup()

  api.listen(port, showUpMessage)
}

main()
