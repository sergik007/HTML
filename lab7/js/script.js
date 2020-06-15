function addRecord()
{  
  $("#showrec").val("Показать таблицу");
  hideTable();
  if($("input[id='name']").val()=="" || $("input[id='age']").val()=="" || $("input[id='type']").val()=="" ||$("input[id='sweetType']").val()==""){alert("Заполни все поля!"); return false;}
  db.transaction(function(tx) {
  tx.executeSql("SELECT COUNT(*) FROM SweetWarriors", [], function (result) {}, function (tx, error) {
  tx.executeSql("CREATE TABLE SweetWarriors (id REAL UNIQUE, name TEXT, age TEXT,type TEXT,sweetType TEXT)", [], null, null);
  })});

  //Записываем в таблицу...
  db.transaction(function(tx) {    
  var data=Math.round(Math.random()*1000);
  tx.executeSql("INSERT INTO SweetWarriors (id, name,age,type,sweetType) values(?, ?, ?, ?, ?)", [data, $("input[id='name']").val(), $("input[id='age']").val(),$("input[id='type']").val(),$("input[id='sweetType']").val()], null, null);
  });  
  reSelect();  
}

function showRecords(){
if($("#showrec").val()=="Показать таблицу"){
console.log($("#showrec").val());
$("#showrec").val("Скрыть таблицу");
console.log($("#showrec").val());
$("#showTable").html('');
$("#showTable").css('border', '3px solid black');  
$("#showTable").append( $('<tr><td>ID</td><td>ТЕХНИКА</td><td>ПРОИЗВОДИТЕЛЬ</td><td>КОЛ-ВО</td><td>ЦЕНА</td></tr>'));
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM SweetWarriors", [], function(tx, result) {
for(var i = 0; i < result.rows.length; i++) {
$("#showTable").append( $('<tr><td>'+ result.rows.item(i)['id'] +'</td><td>'+result.rows.item(i)['name']+'</td><td>'+result.rows.item(i)['age']+'</td><td>'+result.rows.item(i)['type']+'</td><td>'+result.rows.item(i)['sweetType']+'</td></tr>'));
}}, null)}); 
}

else{
$("#showrec").val("Показать таблицу");
hideTable();
}


}

function deleteRecord(id) {

    $("#showrec").val("ЗАПИСИ");
    hideTable();
    db.transaction(function(tx) {
       tx.executeSql("DELETE FROM SweetWarriors WHERE id=?",[id],
         null,
         null  
       ) 
    });
    
  reSelect();
}

function reSelect(){
  $("#selectId").html('');
  db.transaction(function(tx) {
  tx.executeSql("SELECT * FROM SweetWarriors", [], function(tx, result) {  
  for(var i = 0; i < result.rows.length; i++) {
  $("#selectId").append( $('<option>'+ result.rows.item(i)['id'] +'</option>'));
  }}, null)});
}

function hideTable(){
  $("#showTable").html('');
  $("#showTable").css('border', '0px solid black');  
}

function query(){
  

}