var http = require('https');
var querystring = require('querystring');

function backofficeOperation(callback) {
	var data = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'paymentType' : 'RV'
	});
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: '/v1/payments/8a8294494cdc8e92014ce06605a60be7',
		method: 'POST',
		headers: {
		  'Content-Type': 'application/x-www-form-urlencoded',
		  'Content-Length': data.length
		}
	};
	var postRequest = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			jsonRes = JSON.parse(chunk);
			return callback(jsonRes);
		});
	});
	postRequest.write(data);
	postRequest.end();
	  
}
  
backofficeOperation(function(responseData) {
	console.log(responseData);
});