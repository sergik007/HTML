const WIN_PARAMS = ['about:blank', 'Modal', 'menubar=1,resizable=1,width=1024,height=500'];

function setFocus()
{
	if (document.myForm.login.value=="") document.getElementById("login").focus();
	else {
		if (document.myForm.password.value=="") document.getElementById("password").focus();
	}
}

function validate_form()
{
	var valid=true;
	
    if ( document.myForm.login.value == "" )
    {
        alert ( "Пожалуйста, заполните поле 'Логин'." );
        valid = false;
        return false;
    }
    if ( document.myForm.password.value == "" )
    {
    	alert ( "Пожалуйста, заполните поле 'Пароль'." );
        valid = false;
        return false;
    }
    return valid;
}