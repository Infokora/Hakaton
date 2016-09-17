$(function(){
	$('.nav li>').hover(function(){
		$(this).css('background', '#1E90FF')
		$(this).css('transition','background 0.6s');
	},function(){
		$(this).css('background', '#000')
		$(this).css('transition','background 0.6s');
	});



});