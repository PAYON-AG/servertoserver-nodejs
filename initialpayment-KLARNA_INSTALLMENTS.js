var http = require('https');
var querystring = require('querystring');

function initialPayment(callback) {
	var data = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'amount' : '92.12',
		'currency' : 'EUR',
		'paymentBrand' : 'KLARNA_INSTALLMENTS',
		'paymentType' : 'PA',
		'customer.givenName' : 'Jane',
		'customer.surname' : 'Jones',
		'billing.country' : 'SE',
		'cart.items[0].merchantItemId' : '1',
		'cart.items[0].discount' : '0.00',
		'cart.items[0].quantity' : '5',
		'cart.items[0].name' : 'Product 1',
		'cart.items[0].price' : '1.00',
		'cart.items[0].tax' : '6.00',
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