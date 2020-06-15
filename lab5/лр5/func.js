var er=0;
$(document).ready(function(){
// ====================================================== //
var array = new Array;
var j = 0;

var jVal = {
  'string' : function() {
  
    var ele = $('#string');
    var pos = ele.offset();
    
 
    
    if(ele.val().length < 1) {
		jVal.errors = true;
      alert("Enter the string")      ;
    } 
  },
 
  'sendIt' : function (){
    if(!jVal.errors) {
      var first = $("option");
      var ele = $('#string');
      $("<option value="+ele.val()+">"+ele.val()+"</option>").insertBefore(first[0]);
      ele.val('');
    }
  },
  
};



$('#b2').click(function (){
var btl = document.createElement("input");
btl.id = "string4";
btl.type="text";
btl.name="string4";
btl.placeholder="Введите строку";

document.body.appendChild(btl);
er = 1;
});




// ====================================================== //

});
var arr = {};
$('#b1').click(function (){
var x1 = document.getElementById("blue").selected;
var x2 = document.getElementById("red").selected;
var y1 = document.getElementById("i").selected;
var y2 = document.getElementById("u").selected;
var params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=1000,height=500,left=-1000,top=-1000';
win = window.open('window.html','window',params);

var temp;
var inp1,inp2,inp3,inp4,mass;
inp4 ="";
inp1 = document.getElementsByName("string1")[0].value;
inp2 = document.getElementsByName("string2")[0].value;
inp3 = document.getElementsByName("string3")[0].value;
if(er==1) {
inp4 = document.getElementsByName("string4")[0].value;
mass = '1.' + inp1 + '<br>' + '2.' + inp2 + '<br>' + '3.' + inp3 +'<br>' + '4.' + inp4; }
else mass = '1.' + inp1 + '<br>' + '2.' + inp2 + '<br>' + '3.' + inp3;
localStorage["mass"] = mass;
if(x1 == true) {
temp = "1";
localStorage["color"] = temp;
} 
if(x2 == true) {
temp = "2";
localStorage["color"] = temp;
} 

if(y1 == true) {
temp = "1";
localStorage["font"] = temp;
} 
if(y2 == true) {
temp = "2";
localStorage["font"] = temp;
}
});






