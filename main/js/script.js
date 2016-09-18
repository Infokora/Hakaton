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

    /*var kilcPar=$('.spusok li');
     var polovuna=kilcPar.length/2;
     console.log(polovuna);
     function randNum(min, max) {
     return Math.floor(Math.random() * (kilcPar.length - polovuna + 1)) + polovuna;
     };
     var a;
     var masSpuska = [];
     for(i=0; i<kilcPar.length; i++) {
     a=randNum();
     kilcPar[].append('')
     };
     console.log(masSpuska);
     */



});