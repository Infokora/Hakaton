

$(function(){
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

   $('[name="from_10_to_6_submit"]').click(function () {
      var participantsInfo={},
          participantsPoints=[],
          participantsWinnersNames=[],
          $participants=$('ul.participants'),
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
         $winnersList.children().eq(0).children().eq(i).html(participantsWinnersNames[i]+' '+participantsPoints[i])
      }

      $winnersList.css("display", "block")

      $('#the_final_6_close').click(function () {
         $winnersList.css("display", "none")
      })
   })
});

//$('html body').scrollTop()





