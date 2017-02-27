// @flow

const HOST: string = process.env.API_HOST || 'localhost'
const PORT: string = process.env.API_PORT || '3000'
const CONN: string = process.env.DATABASE_CONN || 'mongodb://localhost:27017/foolshopdb'
const SECRET: string = process.env.JWT_SECRET || '21JAN2017220421'

const api: { HOST: string, PORT: string } = { HOST, PORT }
const database: { CONN: string } = { CONN }
const jwt: { SECRET: string } = { SECRET }

const variables: { api: { HOST: string, PORT: string }, database: { CONN: string }, jwt: { SECRET: string } } =
{ api, database, jwt }

module.exports = variables
