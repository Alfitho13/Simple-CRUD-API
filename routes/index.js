var express = require('express');
const { route } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', (req,res) => {
  res.json({
    message : 'Hi ini adalah contoh dalam sebuah json event'
  })
})
module.exports = router; 
