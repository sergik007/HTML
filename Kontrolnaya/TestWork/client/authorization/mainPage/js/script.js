
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
			$("#center").html('Шерлок Холмс и доктор Ватсон');
			break;
		}
		case '2': {
			document.body.style.backgroundImage = 'url(./resources/images/4.jpg)';
			$("#center").html('Шерлок Холмс: Игра теней');
			break;
		}
		case '3': {
			document.body.style.backgroundImage = 'url(./resources/images/5.jpg)';
			$("#center").html('Шерлок Холмс перед лицом смерти');
			break;
		}
		case '4': {
			document.body.style.backgroundImage = 'url(./resources/images/6.jpg)';
			$("#center").html('Мистер Холмс');
			break;
		}
	}
	
		$("#text").load(txtlink); 	
		
		$(".btn").bind( "click", function() {
			var txt = document.getElementById("text");						
 			if(txt.innerHTML==""){ 
 				alert("Предупреждение! Пустой txt-файл!");			
 			}
		});		

		document.getElementById('inform').innerHTML = "";
		var i=0;
		//Считываем через getJSON
    	$.getJSON(jsonlink, function(data) {
    			//Считываем и записываем в таблицу
    			$('#inform').append('<tr><th>Страна:</th><td>'+data.country+'</td></tr>'); 
    			$('#inform').append('<tr><th>Год:</th><td>'+ data.year +'</td></tr>'); 
    			for(i=0;i<data.jenre.length;i++){
				$('#inform').append('<tr><th>Жанр:</th><td>'+ data.jenre[i].first + ',  '+data.jenre[i].second+', ' + data.jenre[i].third+'</td></tr>'); 
			}
				$('#inform').append('<tr><th>Продюсер:</th><td>'+ data.producer+'</td></tr>'); 
				$('#inform').append('<tr><th>Автор сценария:</th><td>'+ data.plot+'</td></tr>'); 
				$('#inform').append('<tr><th>Продолжительность:</th><td>'+ data.duration+'</td></tr>');
				$('#inform').append('<tr><th>Количество частей:</th><td>'+ data.part+'</td></tr>');  
				$('#inform').append('<tr><th>Кинокомпания:</th><td>'+ data.company+'</td></tr>'); 
    			//Считываем и записываем в список
    			for(i=0;i<data.actors.length;i++){
                $('#inform').append('<tr><th>В главных ролях:</th><td>'+data.actors[i].first + ',  '+data.actors[i].second+', ' + data.actors[i].third+'</td></tr>');
                } ; 
    		});
		
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