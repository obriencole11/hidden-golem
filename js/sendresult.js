
var guid = function() {

    var nav = window.navigator;
    var screen = window.screen;
    var guid = nav.mimeTypes.length;
    guid += nav.userAgent.replace(/\D+/g, '');
    guid += nav.plugins.length;
    guid += screen.height || '';
    guid += screen.width || '';
    guid += screen.pixelDepth || '';

    return guid;
};


function getTime() {
	var date = new Date();
	var utcDate = new Date(date.toUTCString());
	utcDate.setHours(utcDate.getHours()-8);
	var usDate = new Date(utcDate);
	return usDate;
}

function getResults() {

	var results = {
		"guid": guid(),
		"time": getTime(),
		"name": document.getElementById("name").value,
		"user code": document.getElementById("usercode").value,
		"code": document.getElementById("code").innerHTML
	};

	return results;
}


var $form = $('#button'),
    url = 'https://script.google.com/macros/s/AKfycbzsaUhM206m648o7x5kDGxtMrZSKYgsaP89d75T9EV3l_pUaW8V/exec'

$('#button').on('click', function(e) {

	value = document.getElementById("code").innerHTML.toLowerCase();
	uservalue = document.getElementById("usercode").value.toLowerCase();
	if (value == uservalue){
		e.preventDefault();
		var jqxhr = $.ajax({
		url: url,
		method: "GET",
		dataType: "json",
		data: getResults()
		}).always(
		);
		document.getElementById("correct").innerHTML = 'CORRECT CODE SUBMITTED<br/>NAME WILL BE ADDED <a href="http://www.secretgolem.club">HERE</a> SHORTLY'; 
		document.getElementById("incorrect").innerHTML = ''; 
	} else {
		document.getElementById("incorrect").innerHTML = 'INCORRECT CODE';
		document.getElementById("correct").innerHTML = '';
	}
})

