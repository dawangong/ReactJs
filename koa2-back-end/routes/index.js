const router = require('koa-router')()
router.prefix('/api')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/index', async (ctx, next) => {
  ctx.response.body = {
    code: 200,
    data: "欢迎来到首页~"
  };
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
