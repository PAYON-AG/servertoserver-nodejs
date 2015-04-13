var http = require('https');
var querystring = require('querystring');

function initialPayments(callback) {
	var data = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294184c0378fe014c046e80340da9',
		'amount' : '92.12',
		'currency' : 'EUR',
		'paymentBrand' : 'GIROPAY',
		'paymentType' : 'PA',
		'bankAccount.bic' : 'TESTDETT421',
		'bankAccount.iban' : 'DE14940593100000012346',
		'bankAccount.country' : 'DE',
		'shopperResultUrl' : 'https://docs.oppwa.com'
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
  
initialPayments(function(responseData) {
	console.log(responseData);
});