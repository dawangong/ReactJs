const fs = require("fs");
const router = require("./router");

fs.readdirSync('mock').forEach(function (route) {
  if (!route.includes('mock') && !route.includes('router')) {
    require('./' + route)(router);
  }
});

module.exports = router;
