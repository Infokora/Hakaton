$(function(){

    var $slider=$('.slider').children('div');
    count = $(".slider").children().length;
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
});