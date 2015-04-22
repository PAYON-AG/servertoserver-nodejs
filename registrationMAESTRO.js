var http = require('https');
var querystring = require('querystring');

function registration(callback) {
	var data = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'paymentBrand' : 'MAESTRO',
		'card.number' : '6799851000000032',
		'card.holder' : 'Jane Jones',
		'card.expiryMonth' : '05',
		'card.expiryYear' : '2018',
		'card.cvv' : '123',
	});
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: '/v1/registrations',
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
  
registration(function(responseData) {
	console.log(responseData);
});