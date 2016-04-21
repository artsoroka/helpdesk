var express = require('express'); 
var router  = express.Router(); 
var db      = require('../lib/db'); 
var time    = require('../lib/moment'); 

var RECORDS_PER_PAGE = 10; 
var NEWEST_ON_TOP    = -1; 

var composeQuery = function(qs){
    var timestamp = qs.starting_from || null; 
    
    if( ! timestamp ) return {}; 
    
    var timeOffset = parseInt(timestamp); 

    if( ! timeOffset ) return {}; 

    return {unix: {$gte: timeOffset}}; 

}

router.get('/', function(req,res){
    console.log(req.user); 
    var query = composeQuery(req.query);  

    db.find(query)
        .sort({date: NEWEST_ON_TOP})
        .limit(RECORDS_PER_PAGE)
        .exec(function(err, task){
            if( err ){
                return res.status(500).json({
                    error: err
                }); 
            }
            
            res.json(task);       
        
        }); 
    
}); 

router.post('/', function(req,res){
    var name     = req.body.name      || null; 
    var company  = req.body.company   || null; 
    var tel      = req.body.telephone || null; 
    var question = req.body.text      || null; 
    
    var timestamp = time(); 
    
    db.insert({
        name     : name, 
        company  : company, 
        telephone: tel, 
        question : question, 
        date     : timestamp.human, 
        unix     : timestamp.unix
    }, function(err, newDoc){
        if( err ) {
            return res.status(500).json({
                err: err
            }); 
        }
        
        res.status(201).json(newDoc); 
        
    });
}); 

module.exports = router; 