
var win, massiv,names;
var array = {};

function closeWindow(win)
{
	 if (!win)
  { alert('Window is not yet opened')
  }
  else if (win.closed)
  { alert('Window is already closed')
  }
  else
  { win.close()
  };
};
function Add()
{
	b = "Пароль:";
       b += document.getElementsByName("pass")[0].value + '\n';
	   b += "Марка смартфона:";
    var x = document.getElementsByName("type");
     var i;
    for( i= 0; i< x.length; i++) {
       if(x[i].checked == true) {
         b +=  x[i].value + ',';
        }  
         }
		 b += "\n";
		 b += "Модель:";
 b += document.getElementsByName("chose")[0].value + '\n';
    b += "Главное:";
 b += document.getElementsByName("main")[0].value + '\n';
 b += "Мечта:";
 b += document.getElementsByName("dream")[0].value + '\n';
  b += "Пол:";
     x = document.getElementsByName("sex");
    for( i= 0; i< x.length; i++) {
       if(x[i].checked == true) {
         b += x[i].value + '\n';
        }  
         }
		  b += "Email:";
 b += document.getElementsByName("email")[0].value + '\n';
      
	   a = document.getElementsByName("fio")[0].value;
	   if (a=="") { alert("Введите ваше ИМЯ"); return false;}
	   
          array[a] = b;
          

 massiv = "()";
  names = "-"; 

for (var key in array) {
  
massiv += 'Name: ' + key + ', \n ' + array[key] + '------------------ \n';

}
for (var key in array) {
  
names += '- ' + key + '\n';
}

 localStorage.setItem("flag",true);
localStorage.setItem("massiv1",massiv);
    localStorage.setItem("names1",names);

};
function newWindow() 
{
	
   win = window.open("window.html", "window","width=400,height=150")
    
  
	 return win;
};
function ClearArray()
{
	if(massiv==undefined || names==undefined) { alert("Нет добавленных данных!"); return false;}
	massiv =undefined;
	nams = undefined;
	localStorage.clear();
};

