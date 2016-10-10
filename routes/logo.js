var express = require('express');
var router = express.Router();

/* GET logo page. */
router.get('/', function(req, res, next) {
    res.render('logo', { title: 'Express' });
});

module.exports = router;
