var http = require('https');
var querystring = require('querystring');

function registration(callback) {
	var data = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'paymentBrand' : 'BRADESCO',
		'customer.givenName' : 'Braziliano',
		'customer.surname' : 'Babtiste',
		'billing.city' : 'Brasilia',
		'billing.country' : 'BR',
		'billing.state' : 'SP',
		'billing.street1' : 'Amazonstda',
		'billing.postcode' : '12345678',
		'customParameters[BRADESCO_cpfsacado]' : '11111111111'
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