var express = require('express');
var router = express.Router();

/* GET starter page. */
router.get('/starter', function(req, res, next) {
    res.render('starter', { title: 'Express' });
});

module.exports = router;