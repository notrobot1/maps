

chrome.storage.local.get(["key"], function(result) {
		 document.getElementsByName('text')[0].value = result.key
});


saveForm.onclick = function() {



var radios = document.getElementsByName('text')[0].value;
//var textstr = radios.split(",");

//for (let i = 0; i < textstr.length; i++) {
	chrome.storage.local.set({key: radios}, function() {
		console.log('Value is set to ' + radios);
	});
//}

	
};