const router = require('koa-router')();
const { menu } = require('../db/models');
const { getArticleDirectory } = require('../script/index');
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

getArticleDirectory(`https://blog.csdn.net/wangongda/article/list/1`);

router.get('/article-directory', async (ctx, next) => {
  const { page } = ctx.request.query;
  const list = await getArticleDirectory(`https://blog.csdn.net/wangongda/article/list/${page}`);

  console.log(list, 'list');

  ctx.response.body = {
    data: list
  };
});

// router.get('/', async (ctx, next) => {
//   ctx.request.body
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

module.exports = router;
