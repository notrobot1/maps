var sports = [];
var newLength;
var leen;
var g= [];
var gg = [];

function close(){
//console.log("hhh");
window.close();
}


//function point(){
//
//chrome.storage.local.get(['arrLink'], function(result) {
//                    console.log("for");
//                    leen = result.arrLink.length;
//                    console.log("leen ")
//                    console.log(result.arrLink);
//                    window.open(result.arrLink[0])
//
//                    while(tue){
//                        setTimeout(function() {
//                             open();
//                        }, 2000);
//                    }
//
////                    (function() {
////                        var l = checkL();
////                        console.log(l.length);
////                        console.log(leen);
////
////                        if(l.length != leen && l !=0){
////                            leen = l;
////                            console.log("открываем сл. ссылку");
////                            //window.open(checkL()[0], "_blank");
////                            setTimeout(arguments.callee, 1000);
////                        }else{
////                            console.log("Океу");
////
////                        }
////
////                    })();
//
//});
//
//
//
//}


function checkL(){
                chrome.storage.local.get(['arrLink'], function(result) {
                    console.log("for");
                    g = result.arrLink;
                });
                return g;

}

function save(pl){
           console.log(pl.length);
           chrome.storage.local.set({arrLink: pl}, function() {
               console.log('Value is set to ' + pl);
			});
}


//проходимся по ссылкам
function getSave(){
//проверяем загрузку страницы

(function() {
var check = document.getElementsByClassName("noprint");


if (check.length != 0 ){
    chrome.storage.local.get(['arrLink'], function(result) {
            console.log(result.arrLink.length);
        if(result.arrLink.length != 0 ){
            console.log("открываем сссылку1");

            //window.open(result.arrLink[0]);
            location.href = result.arrLink[0];
            //console.log("откыли");
            //window.close();
        }else{
            console.log("закончились ссылка");

        }

    });
 }else{
 setTimeout(arguments.callee, 2000);

 }


 })();
    return 1;
}

//начинаем парсинг
function startpars(){
    console.log("start");
    save(sports);
    //window.open('https://www.google.com.ua/maps');


}


function clear(){
    //получаем наши запросы
	chrome.storage.local.get(['key'], function(result) {
			//console.log("dsf"+ result.key);
			//если не нулл
			if (result.key!=null){
			//делим по запятой
			var link = result.key.split(",");
			//удаляем первый
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
	//кнопка есть? жмем иначе удаляем запрос и ищем дальше
	if (but.getAttribute("disabled") === null){
		but.click();
		scroll(s);
	}else{
		clear();
	}
	
}


function scroll(s){
	var page = 0;
	var error = document.getElementsByClassName("noprint");
	console.log(error);
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
                                //если ссылка содержит то это наша  ссылка
								if(pl.includes("/place/")){
								    console.log(pl);
                                    newLength = sports.push(pl);
								}
				}
				//получили ссылки? кликаем дальше
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
					//скролим
					scroll(s[i]);
				}
			}

		}else{
			setTimeout(arguments.callee, 1000);
		}
	})();
}




//первый шаг
function getSearche(){
	chrome.storage.local.get(['key'], function(result) {
			//console.log("dsf"+ result.key);
			if (result.key!=""){
			var link = result.key.split(",");
			
			//for (let i = 0; i < link.length; i++) {
			console.log("hdskjhjkdsh");
			console.log(link[0]);
			location.href = 'https://www.google.com.ua/maps/search/'+ link[0];
			
			}else{
			    console.log("запросы закончились");
			    getSave();




			}
		});
	
	
	
}


function ready(){
		//открываем ссылку
		if (document.location.href == "https://www.google.com.ua/maps/"){
			getSearche();
		}else if(document.location.href.includes('search')){
			getIem();
		}else if(document.location.href == "https://www.google.com.ua/maps"){
            console.log("1111111111");


//            (function() {
//                if(document.location.href.includes("@")){
//                    console.log("s");
//
//                }else{
//				    setTimeout(arguments.callee, 2000);
//	            }
//            })();




		}else if( document.location.href.includes('/place/')){
		    console.log("qwerty");
		    console.log(document.getElementsByClassName("AeaXub").length);
//		    try {
//		        var namecompany = document.querySelector('span[jstcache="41"]').textContent;
//		    } catch {
//		        var namecompany = "NO";
//		    }
//
//		    try {
//		        var type = document.querySelector('span[jstcache="62"]').querySelector('span[jstcache="79"]').querySelector('button[jstcache="80"]').textContent;
//		    } catch {
//		        var type = "NO";
//		    }
//
//		    try {
//		        var city = document.querySelector('div[jstcache="130"]').textContent;
//		    } catch {
//		        var city = "NO";
//		    }
//
//		    try {
//
//		        var number = document.getElementsByClassName('QSFF4-text gm2-body-2');
//
//		    }catch{
//		        var number = "NO";
//		    }


            (function() {
		if (document.getElementsByClassName("AeaXub").length === 0) {
 			setTimeout(arguments.callee, 1000);
 			console.log("nol");



		}else{


            var number = "NO";
            var url = "NO";
            var city = "NO";
           	    try {
 		        //var type = document.querySelector('span[jstcache="62"]').querySelector('span[jstcache="79"]').querySelector('button[jstcache="80"]').textContent;
			    var type = document.querySelector('button[jsaction="pane.rating.category"]').textContent;
 		    } catch {
 		        var type = "NO";
 		    }
 		    try {
 		        //var namecompany = document.querySelector('span[jstcache="41"]').textContent;
			    var namecompany = document.getElementsByClassName("x3AX1-LfntMc-header-title-title gm2-headline-5")[0].getElementsByTagName("span")[0].textContent;
 		    } catch {
 		        var namecompany = "NO";
 		    }

            var root = document.getElementsByClassName("AeaXub")
            for (var i = 0; i < root.length; i++) {
            var root1 = document.getElementsByClassName("AeaXub")[i].getElementsByClassName("Liguzb-haAclf")[0].getElementsByClassName("Liguzb-n0tgWb")[0].getElementsByTagName("img")[0].getAttribute("src")

                if (root1.includes('phone_gm_blue_24dp.png')){
                    number = document.getElementsByClassName("AeaXub")[i].getElementsByClassName("rogA2c")[0].getElementsByClassName("QSFF4-text")[0].outerText
                }
                if (root1.includes("public_gm_blue_24dp.png")){
                    url = document.getElementsByClassName("AeaXub")[i].getElementsByClassName("rogA2c")[0].getElementsByClassName("QSFF4-text")[0].outerText
                }
                if (root1.includes("place_gm_blue_24dp.png")){
                    city = document.getElementsByClassName("AeaXub")[i].getElementsByClassName("rogA2c")[0].getElementsByClassName("QSFF4-text")[0].outerText
                }
            }

            var strend = namecompany + ";;"+type+";;"+number+";;"+url+";;"+city+";;"+url;
            console.log("goooood");
            console.log(strend);






		    console.log(strend.substring(0, strend.length - 1));

            
		    var x = new XMLHttpRequest();
            x.open("GET", "http://127.0.0.1:5000/?data="+strend.substring(0, strend.length - 1), true);
            x.onload = function (){
                alert( x.responseText);
            }
            x.send(null);
            var len;
		    //console.log(number);
            chrome.storage.local.get(['arrLink'], function(result) {
                len = result.arrLink;
                console.log(len);
                console.log(result.arrLink);

                console.log(result.arrLink.slice(1));
//                var one = result.arrLink.shift();

                save(result.arrLink.slice(1));
                ///
                var ch = getSave();
                console.log("!!!" + String(ch));
//                if ( ch === 1){
//                setTimeout(close(), 1000);
//                }
            });



                }
            })();


		}
		
		
		 
	

}











document.addEventListener("DOMContentLoaded", ready());





