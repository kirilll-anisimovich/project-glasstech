$(document).ready(function() {

//toggle mnu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".site-nav").slideToggle();
	});

	if (  $(window).width() < 998 ) {
	  $(".site-nav").click(function() {
	    $(".toggle-mnu").toggleClass("on");
	    $(this).hide();
	  });
	 };

  //menu-scroll
  $(".site-nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 71}, 1500);
  });

  $(".cta-glass-link").click(function() {
   event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 71}, 1500);
  });

  $(".logo").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".button-down, .skr-down").click(function() {
    $("html, body").animate({ scrollTop: $(".site-header").height()+10 }, "slow");
    return false;
  });


	//E-mail Ajax Send
  $(".contact-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php",
      data: th.serialize()
    }).done(function() {
      alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время!");
      setTimeout(function() {
        // Done Functions
        $.magnificPopup.close();
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  
  $('.open-popup').click(function() {
    $('#callback-popup h3').html($(this).text());
    $('#callback-popup input[name=form_subject]').val($(this).text());
  }).magnificPopup({
    type:'inline',
    fixedContentPos: false
  });


  //back-to-top
  if ($('.back-to-top').length) {
    var scrollTrigger = 500, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
    });
  };

    
  $(".button-down").animated("wobble");
  $(".title-text, .title-desc").animated("fadeInRight");
  $(".adv-item, .cabina, .steklo-adv-item, .vidi-stekla-item, .steps-item, .conditions-item, .site-footer .logo, .site-footer-item, .site-footer .social").animated("zoomIn");
  $(".cta-title, .cta-text").animated("rubberBand");
  $(".cta-right, .vidi-stekla-right, .steps-right").animated("fadeInRightBig");
  $(".vidi-stekla-about, .steps-text").animated("fadeInLeftBig");


});
