$(function(){
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



	$('#jereb_run').on('click',function(){
		var kilcPar=$('.one_team li');
		var numReserve = [];
		while (numReserve.length < kilcPar.length) {
  			var randomNumber = Math.ceil(Math.random() * kilcPar.length);
  			var found = false;
  			for (var i = 0; i < numReserve.length; i++) {
  				if (numReserve[i] === randomNumber){
   				found = true;
   				break;
  				};
  			};
  			if (!found) { numReserve[numReserve.length]=randomNumber; }
		};
		console.table(numReserve)
		var masTwo=[0];
		$('.two_team li').each(function(i){
			masTwo[i+1]= $(this).html();
		});
		console.table(masTwo);

 		var masRand=[];
 		for(i=0;i<kilcPar.length;i++){
 			let a=numReserve[i];
			masRand[i]=masTwo[a];
		};
		console.table(masRand);
		kilcPar.each(function(i){
			$(this).append(' - '+masRand[i])
		});

		$('.two_team').empty();

		$('#jereb_run').off('click');
	});




});