function printTableHead()
{
    var szSec = "";
    if(this.secure)
        szSec = " (Secure)";
    else
        szSec = " (Unsecure)";
    document.write("<table border>");
    document.write("<th align=left>Title</th>" + "<th align=left>Value</th>");
}

function printTableEnd()
{
    document.write("</table>");
    document.write("<p> ");
}

function printRecord()
{
    document.write("<tr><td>Класс:</td><td>" +   this.clas.italics() + "</td></tr>");
    document.write("<tr><td>Школа:</td><td>" + this.school.italics() + "</td></tr>");
    document.write("<tr><td>Ученики:</td><td>" + this.people.italics() + "</td</tr>");
    document.write("<tr><td>Предметы:</td><td>" + this.sub.italics() + "</td></tr>");
    document.write("<tr><td>Учителя:</td><td>" + this.teach.italics() + "</td></tr>");

    for (var i in this.info)
        document.write("<tr><td>Информация:</td><td>" + this.info[i].italics() + "</td></tr>");
}

function myRecord(clas, school, people, sub, teach, info)
{
    this.clas = clas;
    this.school = school;
    this.people = people;
    this.sub = sub;
    this.teach = teach;

    this.info = new Array();
    this.info = info;

    this.secure = false;
    this.printRecord = printRecord;
    this.printTableHead = printTableHead;
    this.printTableEnd = printTableEnd;
}

var obj1;
var obj2;

obj1 = new myRecord("11A", "Средняя 18", "22", "Химия, Биология", "Светлана Игоревна", ["П455555555лохой", "Good"]);
obj2 = new myRecord("4В", "Средняя 22", "23", "Математика, Физика", "Галина Ивановна", ["Плохой", "Good"]);
obj3 = new myRecord("4В", "Средняя 22", "23", "Математика, Физика", "Галина Ивановна", ["Плохой", "Good"]);
obj2.secure = true;

function PrintAll ()
{
    obj1.printTableHead();
    obj1.printRecord();
    obj1.printTableEnd();
    obj2.printTableHead();
    obj2.printRecord();
    obj2.printTableEnd();
    obj3.printTableHead();
    obj3.printRecord();
    obj3.printTableEnd();
}