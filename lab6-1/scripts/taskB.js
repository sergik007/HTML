$(document).ready(function(){

    var newField;

    $('button#loadXML').click(function(){
        $.post('resource/data.xml',function(data,status){
            xmlParser(data,status);
            alert("Data from xml file have been load with status: " + status);
            if(status == 'success') {
                $('button#Show').prop('disabled', false);
                $('span').css('opacity','0');
                if(newField != undefined) newField.remove();
            }
        });
    });

    $('button#LoadScript').click(function(){
        if($('input#fl1').val() == ""){
            $('span#for1').animate({
                "opacity":"1"
            },1000);
        }else{
            $('span#for1').css('opacity','0');
        }

        if($('input#fl2').val() == ""){
            $('span#for2').animate({
                "opacity":"1"
            },1000);
        }else{
            $('span#for2').css('opacity','0');
        }

        if($('input#fl3').val() == ""){
            $('span#for3').animate({
                "opacity":"1"
            },1000);
        }else{
            $('span#for3').css('opacity','0');
        }

        $.getScript('scripts/load.js');
    });

    function createNewField(){
        var ages = 2016 -  Number($('input#fl1').val());
        var newField = $('<input>');
        newField.addClass('form-control');
        newField.css({
            'width':'30%',
            'color':'darkorchid'
        });
        newField.val(ages);
        var outDiv = $('<div>');
        outDiv.addClass('form-group');
        outDiv.prop('id','field4');
        var inDiv = $('<div>');
        inDiv.addClass('col-sm-10');
        inDiv.append(newField);
        outDiv.append(inDiv);
        

        var div = $('div#field3');
        div.after(outDiv);
        return outDiv;

    }


    $('button#Show').click(function(){
        newField = createNewField(); 
        $('button#Show').prop('disabled',true);
    });


    function xmlParser(xml){
        var color = $('input[type=radio]:checked').val();
        $('input#fl1').css('color',color).val($(xml).find("field1").text());
        $('input#fl2').css('color',color).val($(xml).find("field2").text());
        $('input#fl3').css('color',color).val($(xml).find("field3").text());
    }
});