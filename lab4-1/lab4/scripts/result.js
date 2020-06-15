$(document).ready(function(){
    var count = localStorage.length;
            for(var i = 0;i < count;i++){
                var key = localStorage.key(i);
                var getData = JSON.parse(localStorage.getItem(key));
                console.log('retrievedObject: ', getData);
            }


    var table = $('table');
    

    for( var i = 0; i < count; i++ ){
        var key = localStorage.key(i);
        var retrievedObject = JSON.parse(localStorage.getItem(key));
        var tr = $('<tr></tr>');
        $("<td class='info'></td>").text(retrievedObject['name']).appendTo(tr);
        $("<td class='warning'></td>").text(retrievedObject['password']).appendTo(tr);
        $('<td></td>').text(retrievedObject['address']).appendTo(tr);
        $('<td></td>').text(retrievedObject['phone']).appendTo(tr);
        $('<td></td>').text(retrievedObject['email']).appendTo(tr);
        $('<td></td>').text(retrievedObject['beans']).appendTo(tr);
        $("<td class='success'></td>").text(retrievedObject['beantype']).appendTo(tr);
        $('<td></td>').text(retrievedObject['extras']).appendTo(tr);
        $('<td></td>').text(retrievedObject['comments']).appendTo(tr);

        tr.appendTo(table);
    }

});
