$(function(){
	var $slider=$('.slider').children('div');
var $next=$("#next");
var $prev=$('#prev');

$slider.each(function () {
	$(this).children().not(':first').hide();
	$(this).children().filter(':first').show().addClass('active');
});
function goSlide() {
	$slider.children('.active').removeClass('active').fadeOut()
		.next().addClass('active')
		.fadeIn();
};
function backSlide() {
	$slider.children('.active').removeClass('active').fadeOut()
		.prev().addClass('active')
		.fadeIn();
};

$next.on('click',goSlide);
$prev.on('click',backSlide);


})