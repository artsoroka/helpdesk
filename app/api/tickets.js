var express = require('express'); 
var router  = express.Router(); 
var db      = require('../lib/db'); 
var time    = require('../lib/moment'); 

router.get('/', function(req,res){
        
    db.find({}, function(err, task){
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
    
    var timestamp =  time(); 
    
    db.insert({
        name     : name, 
        company  : company, 
        telephone: tel, 
        question : question, 
        date     : timestamp
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