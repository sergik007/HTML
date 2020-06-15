

function showContent(link, jsonlink, txtlink, name) {
    $("#text").load(txtlink);

    $(".btn").bind( "click", function() {
        var txt = document.getElementById("text");
        if(txt.innerHTML==""){
            alert("Предупреждение! Пустой txt-файл!");
        }
    });

    //очищаем div и ul
    document.getElementById('inform').innerHTML = "";

    //Считываем через getJSON
    $.getJSON(jsonlink, function(data) {
        //Считываем и записываем в таблицу
        $('#inform').append('<tr><td>Университет:'+data.university+'</td><tr>');
        $('#inform').append('<tr><td>Сатроста:'+ data.starosta +'</a></td>');
        //Считываем и записываем в список
        for(var i=0;i<data.adress.length;i++){
            $('#inform').append('<tr><td>Адрес:'+data.adress[i].first + ',  '+data.adress[i].second+', ' + data.adress[i].third+'</td>');
        } ;
    });

    var cont = document.getElementById('textHtml');
    var loading = document.getElementById('loading');

    //Считываем и записываем в id="par"
    $("#textHtml").html($("#loading").html());
    $("#center").html(name);


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