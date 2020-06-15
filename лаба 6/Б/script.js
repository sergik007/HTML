$(document).ready(function () {
    
    $("#button1").click(function(e){ 
         e.preventDefault();
       $.ajax({
        type: "GET",
        url: "file.xml",
        dataType: "xml",
        success: xmlParser
       });
        
    function xmlParser(xml) {
        $(xml).find("Person").each(function () {       
            $("#name").val($(this).find("Name").text());
            $("#adres").val($(this).find("Adres").text());
            $("#sex").val($(this).find("Sex").text());
            $("#post").val($(this).find("Post").text());
        });
    }
    });         
     
$("#button2").click(function(){
    $.getScript("script1.js", function(){
        add();
        });
});

    $("#button3").click(function(){
        $(':input','#form')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
    });

    $('#button4').click( function(event){
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(1500, // снaчaлa плaвнo пoкaзывaем пoдлoжку
            function(){ // пoсле выпoлнения предыдущей aнимaции
                $('#modal_form') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });   
        
        
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                    }
            );  
    });
        var text = $('#name').val();
       $('#modalName').text(text);
       text = $('#adres').val();
       $('#modalAdres').text(text);
       text = $('#sex').val();
       $('#modalSex').text(text);
       text = $('#post').val();
       $('#modalPost').text(text);
    });

    $('#button4').bind("click", function(e){
        if($('#name').val()=="" || $('#adres').val()=="" || $('#sex').val()=="" || $('#post').val()=="")
            $('#task').text("Какое-то из полей не заполнено!");
            $('#task').css({'color': 'blue'});
        $('#task').fadeOut(1500)        
    });    
});