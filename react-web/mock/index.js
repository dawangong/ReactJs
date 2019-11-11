const fs = require('fs');
const express = require('express');
const router = express.Router();

fs.readdirSync('mock').forEach(function (route) {
  if (route.indexOf('index') === -1) {
    require('./' + route)(router);
  }
});

module.exports = router;
