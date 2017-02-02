const variables = {
  api: {
    HOST: process.env.API_HOST || 'localhost',
    PORT: process.env.API_PORT || 3000,
  },
  database: {
    connection: process.env.DATABASE_CONN || 'mongodb://localhost:27017/foolshopdb',
  },
  jwt: {
    SECRET: process.env.JWT_SECRET || '21JAN2017220421'
  }
}

module.exports = variables
