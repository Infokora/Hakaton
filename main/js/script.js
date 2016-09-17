var $slider=$('.slider').children();
var $next=$("#next");
var $prev=$('#prev')

$slider.each(function () {
	$(this).children().not(':first').hide();
	$(this).children().filter(':first').show().addClass('active');
});
function goSlide() {
	$slider.children('.active').removeClass('active').fadeOut()
		.next().addClass('active')
		.fadeIn();
};

$next.onclick(goSlide());
