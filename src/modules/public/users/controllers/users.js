const hello = (ctx) => {
  ctx.status = 200
  ctx.body = 'hello users'
}

module.exports = {
  hello,
}
