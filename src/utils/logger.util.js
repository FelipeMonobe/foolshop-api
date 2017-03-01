// @flow

const chalk = require('chalk')

const generateChalk: Function =
(color: string): Function =>
(msg: string): void =>
console.log(chalk.bold[color](`[${new Date().toISOString()}] ${msg}`))

const error: Function = generateChalk('red')
const success: Function = generateChalk('green')
const info: Function = generateChalk('blue')
const warn: Function = generateChalk('yellow')
const log: Function = generateChalk('white')

module.exports = {
	error,
	success,
	info,
	warn,
	log,
}
