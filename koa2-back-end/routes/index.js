const router = require('koa-router')()
router.prefix('/api')

router.get('/main', async (ctx, next) => {
  ctx.response.body = {
    data: "欢迎来到首页~"
  };
})

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

module.exports = router
