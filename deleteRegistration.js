var http = require('https');

function deleteRegistration(callback) {
	var path = '/v1/registrations/8a8294494cfff3e0014d04c245075168' +
		'?authentication.userId=8a8294174b7ecb28014b9699220015cc' +
		'&authentication.password=sy6KJsT8' +
		'&authentication.entityId=8a8294174b7ecb28014b9699a3cf15d1';
		
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
  
deleteRegistration(function(responseData) {
	console.log(responseData);
});