(function($) {
  $(window).bind('load', function(){
      $('.sf-menu-aided-navigation .menuparent').off('mouseenter mouseleave');
//   $('.sf-menu-aided-navigation .menuparent').unbind('mouseover');
//   $('.sf-menu-aided-navigation .menuparent').unbind('mouseleave');
  $('.sf-menu-aided-navigation .menuparent').on('click', function(event) {
  $(this).children('ul').removeClass('sf-hidden').addClass('animated slideInRight sf-menu-aided-navigation-new sf-menu-aided-navigation-object');
     event.preventDefault();
})
    });
  
}(jQuery));