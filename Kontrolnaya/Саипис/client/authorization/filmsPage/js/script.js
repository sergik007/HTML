
$( "#russia" ).bind( "click", function() {
 showContent('loadpages/russia.html','json/russia.json','txt/russia.txt','1', this);
});

$( "#usa1" ).bind( "click", function() {
 showContent('loadpages/usa.html','json/usa.json','txt/usa.txt','2', this);
});

$( "#usa2" ).bind( "click", function() {
 showContent('loadpages/usa2.html','json/usa2.json','txt/usa2.txt','3', this);
});

$( "#usa3" ).bind( "click", function() {
 showContent('loadpages/usa3.html','json/usa3.json','txt/usa3.txt','4', this);
});

$( "#back" ).bind( "click", function() {
 window.location.href='javascript:history.back()';
});

function showContent(link, jsonlink, txtlink, name, obj) {
		document.getElementById("pos1").style.backgroundColor= 'rgba(205, 201, 201, 0.8)';
	switch(name) {
		case '1': {
			document.body.style.backgroundImage = 'url(./resources/images/3.jpg)';
			$("#center").html('Бэтмен (1989)');
			break;
		}
		case '2': {
			document.body.style.backgroundImage = 'url(./resources/images/4.jpg)';
			$("#center").html('Бэтмен возвращается (1992)');
			break;
		}
		case '3': {
			document.body.style.backgroundImage = 'url(./resources/images/5.jpg)';
			$("#center").html('Мультсериал Бэтмен');
			break;
		}
		case '4': {
			document.body.style.backgroundImage = 'url(./resources/images/6.jpg)';
			$("#center").html('Тёмный рыцарь');
			break;
		}
	}
	
		$("#text").load(txtlink); 	
		
		getError();//модуль	

		document.getElementById('inform').innerHTML = "";
		var i=0;
		//Считываем через getJSON
    	getFromJSON(jsonlink);
		
		var cont = document.getElementById('textHtml');
		var loading = document.getElementById('loading');
		
		//Считываем и записываем в id="par"
		$("#textHtml").html($("#loading").html());

		var http = createRequestObject();					// создаем ajax-объект
		if( http ) {
			http.open('GET', link);							// инициируем загрузку страницы
			http.onreadystatechange = function () {			// назначаем асинхронный обработчик события
				if(http.readyState == 4) {
					cont.innerHTML = http.responseText;		// присваиваем содержимое					
				}
			}
			http.send(null);    
		} else {
			document.location = link;	// если ajax-объект не удается создать, просто перенаправляем на адрес
		}

	}

	function getFromJSON(jsonlink)
	{
	require(['getFromJSON','jquery'], function(getFromJSON,$){
		getFromJSON(jsonlink);
	});
	}
function getError()
{
	require(['getError','jquery'], function(getError,$){
		getError();
	});
}

	// создание ajax объекта
	function createRequestObject() {
		try { return new XMLHttpRequest() }
		catch(e) {
			try { return new ActiveXObject('Msxml2.XMLHTTP') }
			catch(e) {
				try { return new ActiveXObject('Microsoft.XMLHTTP') }
				catch(e) { return null; }
			}
		}
	}