$( document ).ready((function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  /*$(function(){
    $('.explore').click(function() {
      var cls = $(this).closest("section").next().offset().top;
      alert(cls);
  		$("html, body").animate({scrollTop: cls}, "slow");
    });
  });*/

  var pagePositon = 0,
    sectionsSeclector = 'section',
    $scrollItems = $(sectionsSeclector),
    offsetTolorence = 30,
    pageMaxPosition = $scrollItems.length - 1;

//Map the sections:
$scrollItems.each(function(index,ele) { $(ele).attr("debog",index).data("pos",index); });

// Bind to scroll
$(window).bind('scroll',upPos);

//Move on click:
$('.explore').click(function(e){
    if (pagePositon+1 <= pageMaxPosition) {
        pagePositon++;
        $('html, body').stop().animate({
              scrollTop: $scrollItems.eq(pagePositon).offset().top
        }, 300);
    }
});

//Update position func:
function upPos(){
   var fromTop = $(this).scrollTop();
   var $cur = null;
    $scrollItems.each(function(index,ele){
        if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
    });
   if ($cur != null && pagePositon != $cur.data('pos')) {
       pagePositon = $cur.data('pos');
   }
}

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top >= 0) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  setInterval(function() {
      var RealtimeImageElement = document.getElementById('RealtimeImage');
      RealtimeImageElement.src = "http://140.114.91.173:8000/newest.jpg?rnd="+Math.random();
      console.log("refresh");
  }, 1000);

})(jQuery)); // End of use strict
