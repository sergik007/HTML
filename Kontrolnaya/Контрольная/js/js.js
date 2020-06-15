var data = [
	{
	"src" : "mnpz15.jpg"
	},
		{
	"src" : "mnpz16.jpg"
	},
		{
	"src" : "mnpz17.jpg"
	},
		{
	"src" : "mnpz18.jpg"
	},
];
var template = $.templates("#theTempl");
var htmlOutput = template.render(data);
$("#slide").html(htmlOutput);

function login(){
    var test = 0;
	while(test < 3) {
	var login = prompt('Введите ваш логин:');
    var password = prompt('Введите ваш пароль:');
	if((login == "admin")&&(password == "qwerty"))
	 {
		window.open("index.html");
		break;
	} else {
		alert('Логин или пароль неверные.');
	}
	test = test + 1;
	}
	self.close();
}
