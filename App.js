var sports = [];
var newLength;
function save(pl){

           chrome.storage.local.set({arrLink: pl}, function() {
               console.log('Value is set to ' + pl);
			});
}


function startpars(){
    console.log("start");
    save(sports);
    window.open('https://www.google.com.ua/maps');


}


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
            if(str.substring(0, str.length - 1) === ""){
            console.log("dddddd");
            startpars();
            }



			    chrome.storage.local.set({key: str.substring(0, str.length - 1)}, function() {
			    	console.log('Value is set to ' + str.substring(0, str.length - 1));
				    getSearche();
			    });


			}else{
			    console.log("else");
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


				for (let ii = 0; ii < document.getElementsByTagName("a").length; ii++) {
                                var pl = document.getElementsByTagName("a")[ii].href;
								if(pl.includes("/place/")){
                                    //save(pl, ii);
                                    newLength = sports.push(pl);

								}
								//console.log("end");
				}

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
			console.log("hdskjhjkdsh");
			console.log(link[0]);
			location.href = 'https://www.google.com.ua/maps/search/'+ link[0];
			
			}
		});
	
	
	
}


function ready(){
	
		
		
		
		if (document.location.href == "https://www.google.com.ua/maps/"){
			
			getSearche();
		}else if(document.location.href.includes('search')){
			getIem();
		}else if(document.location.href == "https://www.google.com.ua/maps"){

            console.log("1111111111");
            console.log();
            chrome.storage.local.get(['arrLink'], function(result) {
                var len = result.arrLink.length;
                console.log(result.arrLink);
                window.open(result.arrLink[0]);
                (function() {
                    if (result.arrLink.length === len){
                        console.log(result.arrLink.length);
                        setTimeout(arguments.callee, 1000);

		            }
	            })();


                //window.open('https://www.google.com.ua/maps')
            });
		}else if( document.location.href.includes('/place/')){
		    console.log("qwerty");
		    var namecompany = document.querySelector('span[jstcache="41"]').textContent;
		    var type = document.querySelector('span[jstcache="62"]').querySelector('span[jstcache="79"]').querySelector('button[jstcache="80"]').textContent;
		    var city = document.querySelector('div[jstcache="130"]').textContent;
		    var number = document.getElementsByClassName('QSFF4-text gm2-body-2');


		    for (var i = 0; i < number.length; i++) {
                console.log(number[i].textContent);

            }

		    console.log(namecompany);
		    console.log(type);

		    //console.log(number);


		}
		
		
		 
	

}











document.addEventListener("DOMContentLoaded", ready());





