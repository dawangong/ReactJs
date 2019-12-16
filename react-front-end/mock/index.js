/**
 * Created by wen hao
 */

module.exports = function (app) {
  app.get('/api/main', (req, res) => {
    return res.json({
      data: '欢迎来到首页~'
    });
  });

  app.get('/api/router', (req, res) => {
    return res.json({
      data: [
        {
          path: "/",
          name: "我的首页",
          exact: true,
          component: "index"
        },
        {
          path: "/record",
          name: "我的记录",
          component: 'record'
        },
        {
          path: "/more",
          name: "更多功能",
          component: "more"
        },
        {
          path: "/about",
          name: "关于网站",
          component: "about"
        },
        {
          path: '*',
          name: "404",
          component: "notFound"
        }
      ]
    });
  });
};
