// model生产工厂
const mongoose = require('./connect');
const Schema = mongoose.Schema;
// model结构定义
const menuSchema = new Schema({
  path: String,
  name: String,
  componentName: String
});
const testSchema = new Schema({
  key: String,
  value: String
});
// model实例
const menu = mongoose.model('menu', menuSchema);
const test = mongoose.model('test', testSchema);
// 导出包装后的model实例
module.exports = {
  menu,
  test
};
