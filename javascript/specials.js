$(document).on('ready', function(){


  $(window).resize (function(){
    if ( $(window).width() > 737 ){
      $('nav.main-menu').removeAttr('style');
      $('ul.drop-down').hide('.sub-open');

      $('.menu-mobile').attr('href', '../menu/appetizers.html');

    }
    else {
      $('.menu-mobile').attr('href', '#');
    }
  });

  $(window).trigger ('resize');

});
