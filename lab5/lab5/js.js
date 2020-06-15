window.onload = function() {
 var button = document.getElementById("button");
  var last = document.getElementById("last");
  var elem = document.createElement("text");
 button.onclick = function(){
   last.innerHTML = document.getElementById("pole").value;
   last.style.display = "block";
 }
 
 
  };