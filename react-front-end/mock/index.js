/**
 * Created by wen hao
 */

module.exports = function (app) {
  app.get('/api/main', (req, res) => {
    return res.json({
      data: '欢迎来到首页~'
    });
  });

  // app.get('/history', (req, res) => {
  //   return res.json(history);
  // });
};
