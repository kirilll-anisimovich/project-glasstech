$(function() {

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
    $('body,html').animate({scrollTop: top - 35}, 1500);
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
    type:'inline'
  });

});
