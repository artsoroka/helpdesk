var moment = require('moment-timezone'); 
var config = require('../../config').DateTime;  

module.exports = function(){
	var ts = Date.now(); 
	return {
		unix : ts, 
    	human: moment(ts).tz(config.timezone).format(config.format)
    };   
}; 