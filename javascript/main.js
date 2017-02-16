$(document).on('ready', function(){

  $('.hamburger').click(function(){

    $('nav.main-menu').slideToggle('open');
  });


  $('a.menu-mobile').click(function(){

    if(window.innerWidth < 738) {
      $('ul.drop-down').slideToggle('.sub-open');
    }

  });

  $(window).resize (function(){
    if ( $(window).width() > 737 ){
      $('nav.main-menu').removeAttr('style');
      $('ul.drop-down').hide('.sub-open');

      $('.menu-mobile').attr('href', 'menu/appetizers.html');

    }
    else {
      $('.menu-mobile').attr('href', '#');
    }
  });

  $(window).trigger ('resize');

});
