var paramValue = window.location.href.split("?")[1].split("=")[1].split("$");

console.log(paramValue);

document.getElementById("a11").innerHTML = paramValue[0];
document.getElementById("a22").innerHTML = paramValue[1];
document.getElementById("a33").innerHTML = paramValue[2];
document.getElementById("a44").innerHTML = paramValue[3];
document.getElementById("a55").innerHTML = paramValue[4];

var check = localStorage.getItem("fio");

alert(check);