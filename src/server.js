// @flow

const database = require('./configs/database.config')
const mongoose = require('./configs/mongoose.config')
const env = require('./configs/environment.config')
const server = require('./configs/server.config')
const logger = require('./utils/logger.util')

const main: Function = async (): Promise<void> => {
  try {
    const api: any = server.api
    const port: number = env.variables.api.PORT
    const host: string = env.variables.api.HOST
    const showUpMessage = (): void => logger.success(`|SRV| http://${host}:${port}/api/`)

    env.check(env.variables)

    database.setup()
    await mongoose.setup()
    await server.setup()

    return api.listen(port, showUpMessage)
  } catch (e) {
    return logger.error(e)
  }
}

main()
