$(document).ready(function () {
   $("#b1").click(function(){
    $.ajax({
        type: "GET",
        url: "base.xml",
        dataType: "xml",
        success: xmlParser
    });
  
  
     
     function xmlParser(xml) {

  

    $(xml).find("Book").each(function () {

        $(".main").append('<div class="book"><div class="title">' + $(this).find("Title").text() + '</div><div class="description">' + $(this).find("Description").text() + '</div><div class="date">Published ' + $(this).find("Date").text() + '</div></div>');
    
      /*alert( $(this).find("Title").text() +  $(this).find("Description").text() +   $(this).find("Date").text());
        */
$(".main").css("width","40%");
$(".main").css("heidth","40%");
$(".main").css("marginLeft","25%");
$(".main").css("position","absolute");  
      $(".main").css("background","white"); 
    });

}
     
   });
  
  $("#b3").click(function(){
  $("#vita").text($("#a1").val()*$("#a2").val());
  $("#vita").css("width","200px");
    $("#vita").css("height","200px");
    $("#vita").css("background","green");
    $("#vita").css("fontSize","1000%");
  });
  
});

