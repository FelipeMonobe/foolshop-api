// @flow

const HOST: string = process.env.API_HOST
const PORT: string = process.env.API_PORT
const CONN: string = process.env.DATABASE_CONN
const SECRET: string = process.env.JWT_SECRET

const api: { HOST: string, PORT: string } = { HOST, PORT }
const database: { CONN: string } = { CONN }
const jwt: { SECRET: string } = { SECRET }

const variables: { api: { HOST: string, PORT: string }, database: { CONN: string }, jwt: { SECRET: string } } = { api, database, jwt }

module.exports = variables
