$(document).ready(function(){

    var table = $('table');

    function Roommmates(name,surname,num,square,countRoom){
        var name = name;
        var surname = surname;
        this.num = num;
        this.home = {
            'square' : square,
            'countRoom': countRoom
        }

        this.getName = function(){
            return name;
        }
        this.getSurname = function(){
            return surname;
        }
    }


    Roommmates.prototype.getNum = function(){
        return this.num;
    }

    Roommmates.prototype.getSquare = function(){
        return this.home['square'];
    }

    Roommmates.prototype.getCountRoom = function(){
        return this.home['countRoom'];
    }

    Roommmates.prototype.createHead = function(){
        var tb = $('<tbody></tbody>');
        var tr = $('<tr></tr>');

        $('<th></th>').text('Имя').appendTo(tr);
        $('<th></th>').text('Фамилия').appendTo(tr);
        $('<th></th>').text('Номер квартиры').appendTo(tr);
        $('<th></th>').text('Площадь').appendTo(tr);
        $('<th></th>').text('Количество комнат').appendTo(tr);

        tr.appendTo(tb);
        tb.appendTo(table);
    }

    Roommmates.prototype.printRecord = function(){
         var tr = $('<tr></tr>');

        $('<td></td>').text(this.getName()).appendTo(tr);
        $('<td></td>').text(this.getSurname()).appendTo(tr);
        $('<td></td>').text(this.getNum()).appendTo(tr);
        $('<td></td>').text(String(this.getSquare())).appendTo(tr);
        $('<td></td>').text(String(this.getCountRoom())).appendTo(tr);

        tr.appendTo(table);
    }

    var persons = new Array();

   

    var person = new Roommmates('Ivan', 'Ivanov',48,52,2);
    persons.push(person);
    var person1 = new Roommmates('Petr','Petrov',13,44,1);
    persons.push(person1);

    Roommmates.prototype.createHead();

    for(var i = 0;i<persons.length; i++){
        persons[i].printRecord();
    }



       
        

});