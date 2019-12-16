const express = require('express');
const router = express.Router();
const baseURL = '/api';
const method = ["get", "post"];

method.forEach(item => {
  const _method = router[item];
  router[item] = function (url, callback) {
    _method.call(this, `${baseURL}${url}`, callback)
  };
});

module.exports = router;
