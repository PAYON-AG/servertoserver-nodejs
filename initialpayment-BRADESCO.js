var http = require('https');
var querystring = require('querystring');

function initialPayment(callback) {
	var data = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'amount' : '1.03',
		'currency' : 'BRL',
		'paymentBrand' : 'BRADESCO',
		'paymentType' : 'PA',
		'customer.givenName' : 'Braziliano',
		'customer.surname' : 'Babtiste',
		'billing.city' : 'Brasilia',
		'billing.country' : 'BR',
		'billing.state' : 'DE',
		'billing.street1' : 'Amazonstda',
		'billing.postcode' : '12345678',
		'customParameters[BRADESCO_cpfsacado]' : '11111111111',
		'shopperResultUrl' : 'https://docs.oppwa.com',
		'testMode' : 'EXTERNAL'
	});
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: '/v1/payments',
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
  
initialPayment(function(responseData) {
	console.log(responseData);
});