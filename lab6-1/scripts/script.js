$(document).ready(function(){
    $('p#hide').click(function(){
        $(this).hide(1500).show(1500);
    });

    $('button#toggle').click(function(){
        $('p#hide').slideToggle(1500);
    });

    $('button#border').click(function(){
        $('img.imgs').css({
            "border":"3px dotted magenta",
        });
    });
});