var http = require('https');
var querystring = require('querystring');

function request(callback) {
	var path='/v1/registrations/8a82944a4cc25ebf014cc2c782423202';
	path += '?authentication.userId=8a8294174b7ecb28014b9699220015cc'
	path += '&authentication.password=sy6KJsT8'
	path += '&authentication.entityId=8a8294174b7ecb28014b9699220015ca'
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: path,
		method: 'DELETE',
	};
	var postRequest = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			jsonRes = JSON.parse(chunk);
			return callback(jsonRes);
		});
	});
	postRequest.end();
}
	
request(function(responseData) {
	console.log(responseData);
});
