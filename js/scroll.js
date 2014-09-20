// Scroll Nav

var height = $('header').outerHeight();

$(window).scroll(function() {
  if($('header').offset().top === 0) {
     $('header').stop().animate({ borderBottomColor: '#d35959'; }, 300);
  }
  else {
     $('#main').stop().animate({ borderBottomColor: '#dbdbdb' }, 300);
  }
});