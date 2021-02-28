let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard'});
});

module.exports = router;
