

function clear(){
	chrome.storage.local.get(['key'], function(result) {
			//console.log("dsf"+ result.key);
			if (result.key!=null){
			var link = result.key.split(",");
			link.shift();
			var str = "";
			for (let i = 0; i < link.length; i++) {
				str = str+link[i]+",";
			}
			console.log(str.substring(0, str.length - 1));
			chrome.storage.local.set({key: str.substring(0, str.length - 1)}, function() {
				console.log('Value is set to ' + str.substring(0, str.length - 1));
				getSearche();
			});

			}
		});
	
}

function next(s){
	var but = document.getElementById('ppdPk-Ej1Yeb-LgbsSe-tJiF1e');
	if (but.getAttribute("disabled") === null){
		but.click();
		scroll(s);
	}else{
		clear();
	}
	
}


function scroll(s){
	var page = 0;
	(function() {
		s.scrollTop = s.scrollHeight;
			if (page != s.scrollHeight) {
				page = s.scrollHeight;
				console.log(s.scrollHeight);
				setTimeout(arguments.callee, 2000);
			}else{
				//тут получаем ссылки
				next(s);
			}
	})();
	
	
	
}



function getIem(){
	
	
	//цикл до тех пор пока страница не прогрузится
	(function() {
	
		if (document.location.href.includes('@')) {
			
			var s = document.getElementsByTagName("div");
			for (let i = 0; i < s.length; i++) {
				if (s[i].className.includes("scrollbox") && s[i].getAttribute("aria-label") != null){
					console.log(s[i].getAttribute("aria-label"));
					//console.log(s[i]);
					scroll(s[i]);
						
					
					

				}
				
			}

			
			
			
			
		}else{
			setTimeout(arguments.callee, 1000);
		}
	})();

//for (let ii = 0; ii < document.getElementsByTagName("a").length; ii++) {
								//console.log(document.getElementsByTagName("a")[ii].href);
								//console.log("end");
							//}
	
}





function getSearche(){
	chrome.storage.local.get(['key'], function(result) {
			//console.log("dsf"+ result.key);
			if (result.key!=null){
			var link = result.key.split(",");
			
			//for (let i = 0; i < link.length; i++) {
				
			location.href = 'https://www.google.com.ua/maps/search/'+ link[0];
			
			}
		});
	
	
	
}


function ready(){
	
		
		
		
		if (document.location.href == "https://www.google.com.ua/maps/"){
			
			getSearche();
		}else if(document.location.href.includes('search')){
			getIem();
			
			
		}
		
		
		 
	

}











document.addEventListener("DOMContentLoaded", ready());





