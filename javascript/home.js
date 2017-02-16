$(document).on('ready', function(){

  $('a').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('main').fadeOut('500', newpage);
    });
    function newpage() {
    window.location = newLocation;
    }

});
