var data = require("../data.json");

exports.addFriend = function(request, response) {    
	response.render('index', data);
 }