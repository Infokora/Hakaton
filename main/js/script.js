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

		$('.form_math label').hover(function(){
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

		$(this).text('Показать результаты');
		$('.cenu ul').css('display','inline-block');
		$('#jereb_run').off('click');

			//final 10 6
		$('#jereb_run').click(function () {
			var participantsInfo={},
			participantsPoints=[],
			participantsWinnersNames=[],
			$participants=$('div.participants'),
			$points=$('ul.participants_points'),
			$winnersList=$('div.the_final_6');

			for (var i=0; i<$participants.children().length; i++) {
				participantsInfo[$participants.children().eq(i).children().eq(0).html()]=$points.children().eq(i).children()[0].value;
			}

			for (var key in participantsInfo) {
				participantsPoints.push(+participantsInfo[key])
			}

			participantsPoints.sort(function(a,b){return a-b;}).reverse()
			console.log(participantsPoints)

			addingWinnersProcess:
			for (var i=0; i<6; i++) {
				for (var key in participantsInfo) {
					if (participantsPoints[i]==participantsInfo[key]) {
						participantsWinnersNames.push(key);
						delete participantsInfo[key];
						if (participantsWinnersNames.length==6) {
							break addingWinnersProcess;
						}
					}
				}
			}

			console.log(participantsWinnersNames)

			for (var i=0; i<$winnersList.children(0).eq(0).children().length-1; i++) {
				$winnersList.children().eq(0).children().eq(i).html(participantsWinnersNames[i]+'. Пара набрала: '+participantsPoints[i]+' балов')
			}

			$winnersList.css("display", "block")

			$('#the_final_6_close').click(function () {
				$winnersList.css("display", "none")
			})
		})
	});




   


});