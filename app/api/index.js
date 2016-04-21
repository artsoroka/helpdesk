var express = require('express'); 
var router  = express.Router(); 
var tickets = require('./tickets'); 

router.use('/tickets', tickets)

router.get('*', function(req,res){
    res.status('404').json({
        error: 'endpoint not found'
    }); 
}); 

module.exports = router; 