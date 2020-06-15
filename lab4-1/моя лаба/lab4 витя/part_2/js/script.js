function Department() {
    var _name, _class, _address, _stat ;
    var _predm={
        emp11: "Математика",
        emp12: "Физика",
    };

    this.fun = function(name,classs,address,stat) {
        _name = name;
        _class = classs;
        _address = address;

     };
    this.getname = function () {
        return _name;
    };
    this.getclass = function () {
        return _class;
    };
    this.getaddress = function(){
        return _address;
    };
    this.getpredm = function(){
        return _predm;
    };
    this.getstat = function(){
        return _stat;
    };
}
function printTableHead(table){

    var newRowTable = document.createElement('tr');
    table.appendChild(newRowTable);

    var th1 = document.createElement("TH");
    var th2 = document.createElement("TH");

    newRowTable.appendChild(th1);
    newRowTable.appendChild(th2);
    th1.innerHTML = "Поле";
    th2.innerHTML = "Значение";
}

function printTableRows(table, dep){
    var newRow = document.createElement('TR');
    var td1 = document.createElement('TD');
    var td2 = document.createElement('TD');

    td1.innerHTML = "Статус";
    td2.innerHTML = dep.getstat();
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    table.appendChild(newRow);

    td1.innerHTML = "ФИО";
    td2.innerHTML = dep.getname();
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    table.appendChild(newRow);
    newRow = document.createElement('TR');
    td1 = document.createElement('TD');
    td2 = document.createElement('TD');

    td1.innerHTML = "Класс";
    td2.innerHTML = dep.getclass();
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    table.appendChild(newRow);
    newRow = document.createElement('TR');
    td1 = document.createElement('TD');
    td2 = document.createElement('TD');

    td1.innerHTML = "Адрес";
    td2.innerHTML = dep.getaddress();
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    table.appendChild(newRow);
    newRow = document.createElement('TR');
    td1 = document.createElement('TD');
    td2 = document.createElement('TD');

    td1.innerHTML = "Предметы";
    td2.innerHTML = dep.getpredm().emp11 +  " " + dep.getpredm().emp12;
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    table.appendChild(newRow);
    newRow = document.createElement('TR');
    td1 = document.createElement('TD');
    td2 = document.createElement('TD');
}


var dep1 = new Department();
dep1.fun("Петров Иван Сергеевич","5","Гикало 8","Отличник");
var table1 = document.getElementById("dep1");

var dep2 = new Department();
dep2.fun("Иванов Юрий Дмитиевич","3","Сурганова 45","Отличник");
var table2 = document.getElementById("dep2");

var dep3 = new Department();
dep3.fun("Сидоров Павел Олегович","2","Маркса 15","Отличник");
var table3 = document.getElementById("dep3");

printTableHead(table1);
printTableRows(table1, dep1);

printTableHead(table2);
printTableRows(table2, dep2);

printTableHead(table3);
printTableRows(table3, dep3);