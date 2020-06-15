define(function(){
    return function(){

$("#btn1").bind( "click", function() {
			var txt = document.getElementById("text");						
 			if(txt.innerHTML==""){ 
 				alert("Предупреждение!");
 				$("#text").html('<h3 id="warning">Пустой txt-файл!</h3>'); 				
 			}
		});
	}
});		