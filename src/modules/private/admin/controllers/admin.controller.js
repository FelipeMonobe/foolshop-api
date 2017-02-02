const hello = (ctx) => {
  ctx.status = 200
  ctx.body = 'hello admin'
}

module.exports = {
  hello,
}
