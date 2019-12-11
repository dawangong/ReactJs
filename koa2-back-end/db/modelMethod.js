// model方法封装
const modelMethod = model => {
  return {
    // 查询
    find(conditions = {}, fields = { _id: 0 }, options = {}) {
      return new Promise((resolve, reject) => {
        model.find(conditions, fields, options, (err, res) => {
          if(err) {
            reject(err)
          }
          resolve(res)
        })
      })
    },
    // 保存
    save (obj = {}) {
      const m = new model(obj);
      return new Promise((resolve, reject)=> {
        m.save((err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res);
        })
      })

    }
  }
};

module.exports = modelMethod;
