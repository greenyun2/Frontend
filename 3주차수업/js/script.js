$(function() {
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  /* Category Accordion */
  $('.category-accordion .detail').eq(0).show();
  $('.category-accordion .title').click(function() {
    // $(this).next().show();
    $(this).next().stop().slideDown();
    $(this).siblings('.category-accordion .title').next().stop().slideUp();

    $(this).addClass('active');
    $(this).siblings('.category-accordion .title').removeClass('active');
  });

  /* Recent Search Result */
  $('.search-recent .btn-clear').click(function() {
    $(this).parent().hide();
  });
  $('.search-recent .btn-all-clear').click(function() {
    $('.search-recent .item').hide();
  });

// Front Slider //
$('.front-slider').slick({
  slidesToshow: 1,
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToScroll: 1
}
);


  /* Cart Items */
  $('.cart-content .btn-all-clear').click(function() {
    $('cart-item').hide();
  });
  $('.cart-content .btn-clear').click(function() {
    $(this).parent().parent().hide();
  
  });
    });














