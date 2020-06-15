$(document).ready(function(){
    var data = {};
    var count = 0;
    //localStorage.setItem('count','0');


    $('input#name, input#password, input#address, input#phone, input#email, textarea#comments').unbind().blur(function(){
        var id = $(this).attr('id');
        var value = $(this).val();
        

        switch(id){
            case 'name':{
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if(value !='' && rv_name.test(value) ){
                    $(this).addClass('not_error').removeClass('error');
                    $(this).next('.error-box').text('Заполнено').css('color','green');
                    data['name'] = value;
                }
                else{
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').css('color','red').text('Ошибка ввода имени');
                }
            }break;
            case 'password':{
                var rv_password = /^[a-zA-Z0-9]+$/;
                if(value!='' && rv_password.test(value)){
                    $(this).addClass('not_error').removeClass('error');
                    $(this).next('.error-box').text('Заполнено').css('color','green');
                    data['password'] = value;
                }
                else{
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').css('color','red').text('Ошибка ввода пароля');
                }
            }break;
            case 'address':{
                var rv_address = /^[a-zA-Zа-яА-Я\s_\-\0-9]+$/;
                if(value!='' && rv_address.test(value)){
                    $(this).addClass('nor_error').removeClass('error');
                    $(this).next('.error-box').text('Заполнено').css('color','green');
                    data['address'] = value;
                }
                else{
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').css('color','red').text('Ошибка ввода адреса');
                }
            }break;
            case 'phone':{
                var rv_phone = /^(\+375|80)(17|29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
                if(value!='' && rv_phone.test(value)){
                    $(this).addClass('not_error').removeClass('error');
                    $(this).next('.error-box').text('Заполнено').css('color','green');
                    data['phone'] = value;
                }
                else{
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').css('color','red').text('Неверный формат');
                }
            }break;
            case 'email':{
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;
                if(value!='' && rv_email.test(value)){
                    $(this).addClass('not_error').removeClass('error');
                    $(this).next('.error-box').text('Заполнено').css('color','green');
                    data['email'] = value;
                }
                else{
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').css('color','red').text('Неверный формат');
                }
            }break;
            case 'comments':{
                if(value.length > 0 && value.length < 256){
                    $(this).addClass('not_error').removeClass('error');
                    $(this).next('.error-box').text('Принято').css('color','green');
                    data['comments'] = value;
                }
                else{
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').css('color','red').text('Поля обязательно дял заполнения');
                }
            }break;
        }

    });

    $('form#preferences').submit(function(e){
        e.preventDefault(); 
        var not_error = $('.not_error').length + 1; 
        if(not_error == 6 && $('input:checkbox:checked').length != 0 && $('input:radio:checked').length != 0){
            
            $('input:checkbox:checked').next('.error-box').css('color','green').text('');

            var beans = $('select[name=beans]').val();
            data['beans'] = beans;
            var beantype = $('input:radio:checked').val();
            data['beantype'] = beantype;
            var extras = $('input:checkbox:checked').val();
            data['extras'] = extras;

            //count = localStorage.getItem('count') + 1;
            //localStorage.setItem('count','' + count);
            //var node = 'node' + count;
            localStorage.setItem(data['name'],JSON.stringify(data));
            alert('Данные сохранены');
            e.reset();
            $('.error-box').text('');
            return true;
        } 
        else{
            if($('input:checkbox:checked').length == 0){
                $('input:checkbox').next('.error-box').css('color','red').text('Заполните данное поле');
                    
            }
            alert('Проверьте введенные данные');
            return false;
        } 
    });

    $('input:reset').click(function(){
        $('.error-box').text('');
    })
});