const database = require('./configs/database.config')
const mongoose = require('./configs/mongoose.config')
const env = require('./configs/environment.config')
const server = require('./configs/server.config')
const logger = require('./utils/logger.util')

const main = async () => {
  const api = server.api
  const port = env.variables.api.PORT
  const host = env.variables.api.HOST
  const showUpMessage = () => logger.success(`server @ http://${host}:${port}/api/`)

  env.check(env.variables)

  await mongoose.setup()
  await database.setup()
  await server.setup()

  api.listen(port, showUpMessage)
}

main()
