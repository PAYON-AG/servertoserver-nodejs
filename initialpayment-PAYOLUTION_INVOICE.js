var http = require('https');
var querystring = require('querystring');

function initialPayment(callback) {
	var data = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'amount' : '92.12',
		'currency' : 'EUR',
		'paymentBrand' : 'PAYOLUTION_INVOICE',
		'paymentType' : 'DB',
		'customer.givenName' : 'Jane',
		'customer.surname' : 'Jones',
		'customer.email' : 'test@test.com',
		'customer.ip' : '123.123.123.123',
		'billing.city' : 'Munich',
		'billing.country' : 'DE',
		'billing.street1' : '123 Street',
		'billing.postcode' : 'A1 2BC',
		'customParameters[PAYOLUTION_ITEM_PRICE_1]' : '2.00',
		'customParameters[PAYOLUTION_ITEM_DESCR_1]' : 'Test item #1',
		'customParameters[PAYOLUTION_ITEM_PRICE_2]' : '3.00',
		'customParameters[PAYOLUTION_ITEM_DESCR_2]' : 'Test item #2',
		'testMode' : 'EXTERNAL',
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
  
initialPayment(function(responseData) {
	console.log(responseData);
});