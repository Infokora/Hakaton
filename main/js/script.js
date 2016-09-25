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


	// add participats
	var colvoFrom=$('.pat').length;
	for(var i=0;i<=colvoFrom;i++){
		$('.pat'+i).hide();
	}
	var a=1;
	$('#add_pat').on('click',function(){
		$('.pat'+a).slideDown(400);
		a++;
		var dist= $(this).offset().top;
		$('body,html').animate({scrollTop: dist}, 300);
	});
   


});