// ANIMAL TEMPLATE

// sets variable source to the animalTemplate id in index.html
function query(){


// Handlebars compiles the above source into a template


// data
var data = {sweets: []};

//console.log(data.sweets[0].type);
	  var query = $('#query').val();
      
      db.transaction(function(tx) {
      tx.executeSql("SELECT * FROM SweetWarriors", [], function(tx, result) {
      var j=0;
      for(var i = 0; i < result.rows.length; i++) {
      
      if(result.rows.item(i)['type']==query){
      	data.sweets[j] = {};      	
      	data.sweets[j].name = result.rows.item(i)['name'];
      	j++;
      }
        var source = document.getElementById("Template").innerHTML;   
		var template = Handlebars.compile(source);
		// data is passed to above template
		var output = template(data);
		// HTML element with id "animalList" is set to the output above
		document.getElementById("nameList").innerHTML = output;
    }}, null)});
}







// JQUERY ANIMAL TEMPLATE
// var source = $("#animalTemplate").html();
// var template = Handlebars.compile(source);
// var data = {animals: [
//   {type: "Dog", sound: "woof"},
//   {type: "Cat", sound: "meow"},
//   {type: "Cow", sound: "moo"}
// ]};
// $("#animalList").html(template(data));


