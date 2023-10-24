var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.random();
    var z = Math.random();
    var sin = Math.sin(x);
    var cosh = Math.cosh(z);
    var y = Math.floor(sin);
    
    res.setHeader('Content-Type', 'text/html'); 
    res.send("Math.sin() applied to " + x + " is " + sin + "<br><br>" +
              "Math.cosh() applied to " + z + " is " + cosh + "<br><br>" +
              "Math.floor() applied to " + sin + " is " + y);
});

module.exports = router;