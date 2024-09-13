var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(process.env.APP_NAME);
});

router.get('/me', (req, res) =>{
  const name = "Alfitho";
  res.send(`Hi this is ${name} ciaysadasdsaasd`)
})

module.exports = router;
