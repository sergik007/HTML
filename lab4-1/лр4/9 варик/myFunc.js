
// var win, massiv,names,b, fios;
// var array = {};
// var fios = [];
// var arr = {};

// var count = 0;
      

// function closeWindow(win)
// {
// 	 if (!win)
//   { 
//     alert('Window is not yet opened')
//   }
//   else if (win.closed)
//   { alert('Window is already closed')
//   }
//   else
//   { win.close()
//   }
// };


// function newWindowSend()
// {

//        fios[count] = document.getElementById("fio").value;

// count++;

//        arr['pass'] = document.getElementsByName("pass")[0].value;
	 
//     var x = document.getElementsByName("type");
//  arr['type'] ="";
//      var i;
//     for( i= 0; i< x.length; i++) {
//        if(x[i].checked == true) {
//          arr['type'] +=  x[i].value;
//         }  
//          }
		
//   arr['chose'] = document.getElementsByName("chose")[0].value;
   
//  arr['main'] = document.getElementsByName("main")[0].value;

//  arr['dream'] = document.getElementsByName("dream")[0].value;
 
//      x = document.getElementsByName("sex");
//     arr['sex'] ="";
//     for( i= 0; i< x.length; i++) {
//        if(x[i].checked == true) {
//          arr['sex'] += x[i].value;
//         }  
//          }
		
//  arr['email'] = document.getElementsByName("email")[0].value;
      
// 	   a = document.getElementsByName("fio")[0].value;
// 	   if (a=="") { alert("Введите ваше ИМЯ"); return false;}
	   
        
//      win = window.open("window.html", "window","width=400,height=150");
// win.document.write('Name:' + fios[count-1] + '<br>' + 'Password:' + arr['pass'] +'<br>' + 'Type:' + arr['type'] + '<br>' + 'Chose:' + arr['chose'] + '<br>' + 'Main:' + arr['main'] + '<br>' + 'Dream:' + arr['dream'] + '<br>' + 'Sex:' + arr['sex'] + '<br>' + 'Email:' + arr['email'] + '<br>' + '<br>');
// for (var j in fios) { 
// win.document.write(fios[j]); 
// win.document.write('<br>');
// }

// var btl = win.document.createElement("input");
// btl.id = "butCl";
// btl.type="button";
// btl.value="CLose";
// btl.onclick=function(){win.close();}
// win.document.body.appendChild(btl);

// return win;
          
// };

(function() {

  var $form = $('form');
  var $modal_wrapper = $('.modal-wrapper');
  var $modal = $('.modal');
  var $modal_table = $('.modal-table');

  var showModal = function() {
    $modal_wrapper.addClass('modal--shown');
  }

  var hideModal = function() {
    $modal_wrapper.removeClass('modal--shown'); 
  }

  var setModalData = function(data) {
    console.log(data)
    $modal_table.append("<tr><td data-target='fio'>" + data[0].value + "</td><td data-target='pass'>" + data[1].value + "</td> <td data-target='type'>" + data[2].value + "</td><td data-target='chose'>" + data[3].value + "</td><td data-target='main'>" + data[4].value + "</td><td data-target='dream'>" + data[5].value + "</td><td data-target='sex'>" + data[6].value + "</td><td data-target='email'>" + data[7].value + "</td></tr>")

    showModal();
  }

  var handleClose = function(event) {
    event.preventDefault();

    hideModal()
  }

  var handleSubmit = function(event) {
    event.preventDefault();

    var formData = $form.serializeArray();
    
    setModalData(formData);
  }

  $form.on('submit', handleSubmit);
  $modal_wrapper.on('click', handleClose);
}());