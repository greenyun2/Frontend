$(function() {
  $('.trigger').click(function() {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  $('section, .menu a').click(function() {
    $('.gnb').removeClass('active');
    $('.trigger').removeClass('active');
  });

  /* Change CSS Scroll */
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
      } else {
        $('header, .gototop').removeClass('active');
      }
  });

  /* Smooth Scrollring */
  $('.menu a, .gototop').click(function(e) {
    $.scrollTo(this.ha+sh || 0, 900);
  });

  /* Slick Slider : Plan > History */
  $('.history-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2
  }
  );
  $('.project-photo').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: true,
    cssEase: 'linear'
  });
});