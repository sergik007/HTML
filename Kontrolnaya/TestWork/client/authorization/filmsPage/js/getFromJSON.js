define(function(){
    return function(jsonlink){
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
    			
    		});
}
});
