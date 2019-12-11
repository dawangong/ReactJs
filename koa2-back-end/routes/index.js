const router = require('koa-router')();
const { menu } = require('../db/models');
router.prefix('/api');

router.get('/main', async (ctx, next) => {
  ctx.response.body = {
    data: '欢迎来到首页~'
  };
});

router.get('/router', async (ctx, next) => {
  const data = await menu.find();
  ctx.response.body = {
    data
  };
});

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

module.exports = router;
