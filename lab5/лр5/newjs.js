$(document).ready(function(){
// ====================================================== //
  var _window=window.opener;
  
 
  $('body').append('<div id="main"></div>');
  
  var main = $('#main');
  var mass;
  var el;
 mass = localStorage.getItem("mass");
   if("1" == localStorage.getItem("color") && "1" == localStorage.getItem("font"))
   {
   $('#main').append('<div id="t1"></div>');
   el = document.getElementById('t1');
   el.innerHTML = mass;
	}
  if("1" == localStorage.getItem("color") && "2" == localStorage.getItem("font"))
   {
   $('#main').append('<div id="t2"></div>');
    el = document.getElementById('t2');
   el.innerHTML = mass;
	}
	  if("2" == localStorage.getItem("color") && "1" == localStorage.getItem("font"))
   {
   $('#main').append('<div id="t3"></div>');
    el = document.getElementById('t3');
   el.innerHTML = mass;
	}
	  if("2" == localStorage.getItem("color") && "2" == localStorage.getItem("font"))
   {
   $('#main').append('<div id="t4"></div>');
    el = document.getElementById('t4');
   el.innerHTML = mass;
	}
	
	
	
   
  
   $('#main').append('<input type = "button" class = "button" value = "Закрыть">');
   $('.button').click(function() {
    window.close();
   });
  localStorage.clear(); //удалит все элементы
// ====================================================== //

});