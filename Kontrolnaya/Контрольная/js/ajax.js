$(document).ready(function() {
	$.ajaxSetup({ cache: false });
	
	$(window).bind("load", function () { 
	  $.getJSON("appleinfo.json", function(data){
			var list += data.somefacts;
			$("#aj").html(list);
		});
	});
	
	$("#tabledata").bind("click", function () { 
	  $.getJSON("appleinfo.json", function(data){
			var a = ""; a += data.iphone; $("#a").html(a);
			var g = ""; g += data.price; $("#g").html(g+"$");
			var b = ""; b += data.mac.macbookpro; $("#b").html(b);
			var h = ""; h += data.mac.price; $("#h").html(h+"$");
			var e = true; if(e === data.warning) alert("ERROR!");
			var c = ""; 
			$.each(data.nodeinf[0], function(i,s){
				c += s;
			});
			alert(c);
			var d = ""; d += data.Slots; $("#d").html(d);
		});
	});
});
    