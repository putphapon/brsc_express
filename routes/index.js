let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BRSC Express' });
});


router.get('/contact',function(req, res, next){
  res.render('contact', { title: 'Contact'})
});

module.exports = router;
