$(function(){

    var $slider=$('.slider').children('div');
    var $next=$(".next");
    var $prev=$('.prev');

    $slider.each(function () {
        $(this).children().not(':first').hide();
        $(this).children().filter(':first').show().addClass('active');
    });
    function goSlide() {
        var currentSlide = $slider.children('.active');
        var nextSlide = currentSlide.next();
        if(nextSlide.length === 0) {
            nextSlide = $('#circle').children('.go').first();
        }
        currentSlide.toggle("slide").removeClass('active');
        nextSlide.toggle("slide").addClass('active');
    }

    function backSlide() {
        var currentSlide = $slider.children('.active');
        var prevSlide = currentSlide.prev();
        if(prevSlide.length === 0) {
            prevSlide = $('#circle').children('.go').last();
        }
        currentSlide.toggle("slide").removeClass('active');
        prevSlide.toggle("slide").addClass('active');
    }
    $next.on('click',goSlide);
    $prev.on('click',backSlide);


    $('section, span, #popup-news .buttons, #overlay').on('click', function () {
        $('#popup-news, #overlay').toggle();
    });


    //function2
    $('.nav li').hover(function(){
        $(this).css('background', '#1E90FF')
        $(this).css('transition','background 0.6s');
    },function(){
        $(this).css('background', '#000');
        $(this).css('transition','background 0.6s');
    });

    $('.log_animate').click(function(){
        $('.form_log').show(1000);
        $('#overlay_log').show(400);
    });
    $('#overlay_log').click(function(){
        $(this).hide(400);
        $('.form_log').hide(400);
    });

    $('.connect').click(function(){
        $('#overlay').show(600);
        $('#popup').show(1000);
    });
    $('#overlay').click(function(){
        $(this).hide(400);
        $('#popup').hide(400);
    });


    $('.form_log label').hover(function(){
        $(this).css('box-shadow',' 5px 5px 10px rgba(0,0,0,0.7)');
        $(this).css('transition','box-shadow 0.2s');

    }, function(){
        $(this).css('box-shadow',' none');
        $(this).css('transition','box-shadow 0.2s');
    });

    $('.form_in label').hover(function(){
        $(this).css('box-shadow',' 5px 5px 10px rgba(0,0,0,0.7)');
        $(this).css('transition','box-shadow 0.2s');

    }, function(){
        $(this).css('box-shadow',' none');
        $(this).css('transition','box-shadow 0.2s');
    });


    var numberArray=[],
        emailRegular=/^[A-Za-z0-9]\.?([`\w-]\.?)+@[a-z]+(\.[a-z]+)+$/g,
        $userName=$('[name="user_name"]'),
        $userPhone=$('[name="user_phone"]'),
        $userCountry=$('[name="user_country"]'),
        $userEmail=$('[name="user_email"]'),
        $userPassword1=$('[name="password_1"]'),
        $userPassword2=$('[name="password_2"]'),
        $registrationSubmit=$('[name="registration_submit"]');

    for (var i=0; i<10; i++) {numberArray[i]=i;}

    $userName.keypress(function(e) {
        if (e.key.search(/[`'A-zА-я\sіїЇІёЁ-]/g)==-1){return false;}
    });
    $userPhone.keypress(function(e) {
        if (e.key.search(/[\s()0-9+-]/g)==-1){return false;}
    });
    $userCountry.keypress(function(e) {
        if (e.key.search(/[`'A-zА-я\sіїЇІёЁ]/g)==-1){return false;}
    });
    $userEmail.blur(function () {
        if ($userEmail[0].value.search(emailRegular)==-1) {
            $userEmail.addClass('registration_form_error');
        }
        else {
            $userEmail.removeClass('registration_form_error');
        }
    });
    $userPassword2.blur(function () {
        if ($userPassword1[0].value!=$userPassword2[0].value) {
            $userPassword1.addClass('registration_form_error');
            $userPassword2.addClass('registration_form_error');
        }
        else {
            $userPassword1.removeClass('registration_form_error');
            $userPassword2.removeClass('registration_form_error');
        }
    });

    var $cont=$('.info_container');
    // var $h=$infoContainer.offset();
    $('html, body').add(window).add(document).scroll(function (e) {
        var $s = $('html body').scrollTop()+ $(window).height() + 4*$('#ppp').height();
        console.log($cont.offset().top);
        if ($s > $cont.offset().top) {
            $cont.animate({marginTop:"50px"},700)
        }
    })

});