var http = require('https');

function getPaymentStatus(paymentId, callback) {
	var url = "/v1/payments/" + paymentId;;
	url += "?authentication.userId=8a8294174b7ecb28014b9699220015cc";
        url += "&authentication.password=sy6KJsT8";
        url += "&authentication.entityId=8a8294174b7ecb28014b9699a3cf15d1";
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: url,
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};
	var getRequest = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			return callback(JSON.parse(chunk));
		});
	});
	getRequest.end();
	  
}
  
getPaymentStatus("8a8294494ce19bdf014ce509f20b13e7", function(status) {
	if (status["result"]["code"].substring(0, 3) === "000") {
		console.log("SUCCESS <br/><br/> Here is the result of your transaction: <br/><br/>");
		console.log(status);
	}
	else {
		console.log("ERROR <br/><br/> Here is the result of your transaction: <br/><br/>");
		console.log(status);
	}
	
});