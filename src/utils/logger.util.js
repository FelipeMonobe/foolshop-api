// @flow

const chalk: any = require('chalk')

const generateChalk: any =
(color: string): any =>
(msg: string): void =>
console.log(chalk.bold[color](`[${new Date().toISOString()}] ${msg}`))

const error: any = generateChalk('red')
const success: any = generateChalk('green')
const info: any = generateChalk('blue')
const warn: any = generateChalk('yellow')
const log: any = generateChalk('white')

module.exports = {
	error,
	success,
	info,
	warn,
	log,
}
