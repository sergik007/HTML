function myFunction()
{

        $("td").filter( ".text" ).css( "font-style", "italic" );
        $('td:contains("ЛОНДОН")').css('text-decoration', 'underline');
}
function myFunction2()
{
    $("img").filter( ".image" ).css("width","100px");
}
//height="300" width="200"