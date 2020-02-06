var data = require("../data.json");

exports.addFriend = function(request, response) {    
	data = request;
	response.render('index', data);
 }