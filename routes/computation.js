var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var x = Math.round(Math.random()*10);
    var z = Math.round(Math.random()*20);
    var result = Math.sin(x,z);

    
    
    res.setHeader('Content-Type', 'text/html'); 
    res.send(  `f(sin(${x},${z})) is ${result}`);
});


module.exports = router;