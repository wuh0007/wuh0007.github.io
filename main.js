$(document).ready(function() {
    $('.menu-toggler').click(function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').click(function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').click(function() {
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 2000);
    });

    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true
    });

});
