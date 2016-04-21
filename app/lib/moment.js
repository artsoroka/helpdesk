var moment = require('moment-timezone'); 
var config = require('../../config').DateTime;  

module.exports = function(){
    return moment.tz(config.timezone).format(config.format);   
}; 