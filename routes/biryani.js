var express = require('express');
var router = express.Router();

/* GET biryani page. */
router.get('/biryani', function(req, res, next) {
    res.render('biryani', { title: 'Express' });
});

module.exports = router;