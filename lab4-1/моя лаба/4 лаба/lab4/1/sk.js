//var index = 0;
var vote = new Array();
//GetVote.index = 0;
GetVote.key = 0;

function User(login,password,model,phone,checkbox,comment)
{
    this.login = login;
    this.password = password;
    this.checkbox = checkbox;
    this.model = model;
    this.phone = phone;
    this.comment = comment;
}

function GetRadio()
{
    for (i=0; i<document.getElementsByName("mark").length; i++) 
    {
        if (document.getElementsByName("mark")[i].checked) 
        {
            return document.getElementsByName("mark")[i].value;
        }
    }
}

function GetVote()
{
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    var checkbox = document.getElementById('check').checked;
    if (checkbox==1)
        checkbox="Был зарегестрирован";
    else checkbox="Не был зарегестрирован";
    var i = document.getElementById("select").options.selectedIndex;
    var model = document.getElementById("select").options[i].text;
    var phone = GetRadio();
	var comment = document.getElementById('comment').value;
    if (comment=="")
        comment="Без комментариев";

    var user = new User(login,password,model,phone,checkbox,comment);
    vote[GetVote.key] = user;
    GetVote.key++;
    
}


function Print()
{
	var w = window.open("about:blank", "", "width=500; height=500;");
	w.document.write("<title>Результат</title>")
	w.mydata = vote;
    w.document.write("<body style='background-image: url(res/fon.jpg);background-size: auto 100%;'>")
	w.document.write("<div style='width: 300px; background: gray; padding: 10px 30px; margin: 10px auto;border-radius: 10px;box-shadow: 0 0 15px black;'>")
	w.document.write("<h2 style='color: white;'>Ваши данные : </h2>")

    var i = w.mydata.length - 1;
    for(j in vote[i])
    {
        w.document.write("<p>" + j + " - " + w.mydata[i][j] + "</p>" + "<hr>");
    }
    w.document.write("<br><br><br>")

    var j = "login";
    w.document.write("<h2 style='color: white;'>Прошлые пользователи : </h2>")
    w.document.write("<ol type='1'>")
	for (var i in w.mydata)
	{
		w.document.write("<li>" + w.mydata[i][j] + "</li>" + "<hr>");
	}

    w.document.write("</ol>")
	w.document.write("<p><input type='button' value='Закрыть окно' onclick='window.close()'></p>");
	w.document.write("</div>")
    w.document.write("</body>")
}