var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  console.log(req.params);
  res.send('DETAIL NEWS');
});

module.exports = router;