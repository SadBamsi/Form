var form = document.getElementById('user-form');
var userName = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('pass');
var reply = document.getElementById('reply');
var result ={};
var massError = [];
function hasPattern (input) {
	if (input.hasAttribute('pattern')) {
		var pattern = input.getAttribute('pattern');
		var reg = new RegExp(pattern);
		if (!reg.test(input.value)){
			massError.push('Invalid Pattern');
		}
	}
}


	
