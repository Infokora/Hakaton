

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
});

//$('html body').scrollTop()





