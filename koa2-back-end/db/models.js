// model 实例集合
const { menu, test } = require('../db/modelFactory');
const modelMethod = require('../db/modelMethod');
// model 方法封装
const _menu = modelMethod(menu);
const _test = modelMethod(test);
// 导出所有model
module.exports = {
  menu: _menu,
  test: _test
};
