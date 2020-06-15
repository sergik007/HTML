var q1;
var q2;
var q3;

var fio;
var comm;

var knop = document.getElementById("knop");
knop.onclick = function()
{
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

fio = document.getElementById("fio");

comm = document.getElementById("comm");

if (a1.checked)
	q1 = a1;
else 
if (a2.checked)
	q1 = a2;
else 
if (a3.checked)
	q1 = a3;
else q1 = "ERROR";

if (b1.checked)
	q2 = b1;
else 
if (b2.checked)
	q2 = b2;
else 
if (b3.checked)
	q2 = b3;
else q2 = "ERROR";
			
if (c1.selected)
	q1 = c1;
else 
if (c2.selected)
	q3 = c2;
else 
if (c3.selected)
	q3 = c3;
else q3 = "ERROR";


if (window.localStorage.getItem('fio') == null)
{
	alert("No previous intercations");
	var names = fio.value;
	window.localStorage.setItem('fio', names);
}
else
{
	var storedNames = window.localStorage.getItem('fio');
	storedNames += '\n';
	storedNames += fio.value;
	window.localStorage.setItem('fio', storedNames);
	//alert(storedNames.length);
	alert(storedNames);
}


location.href='index.html';

document.location = "index.html?id=" + q1.value + "$" + q2.value + "$" + q3.value + "$" + fio.value + "$" + comm.value;
};
