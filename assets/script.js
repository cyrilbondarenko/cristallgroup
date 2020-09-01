$(document).ready(function(){
    $(".slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        centerMode: true,
        verticalSwiping: true,
        prevArrow: $('.arrows .prev'),
        nextArrow: $('.arrows .next'),
        responsive: [
            {
              breakpoint: 560,
              settings: {
              }
            },
            {
              breakpoint: 600,
              settings: {
              }
            },
            {
              breakpoint: 480,
              settings: {
              }
            }
          ]
    });

    $('.slick-current').nextAll().css('transform', 'rotateX(-30deg) scale(0.9)');
    $('.slick-current').prevAll().css('transform', 'rotateX(15deg) scale(0.9)');

    var slider = $(".slider");
    var scrollCount = null;
    var scroll= null;

$('.slider-container').on('wheel', (function(e) {
  e.preventDefault();

  scroll = setTimeout(function(){scrollCount=0;}, 200);
  if(scrollCount) return 0;
  scrollCount=1;

  if (e.originalEvent.deltaY < 0) {
    $(slider).slick('slickNext');
  } else {
    $(slider).slick('slickPrev');
  }
}));

slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if (nextSlide == 6) {
        nextPanel = $('[data-slick-index="-1"]');
        $(nextPanel).prev().css('transform', 'rotateX(15deg) scale(0.9)');
        $(nextPanel).next().css('transform', 'rotateX(-30deg) scale(0.9)');
        $(nextPanel).css('transform', 'rotateX(0deg) scale(1)');
    }
    if (nextSlide == 0 && currentSlide == 6) {
        nextPanel = $('.slick-current').next();
        $('[data-slick-index="7"]').css('transform', 'none');
        $('[data-slick-index="7"]').addClass('color');
        $('[data-slick-index="8"]').addClass('uncolor');
    }
    nextPanel = $('[data-slick-index=' + nextSlide + ']');
    img = nextPanel.attr('img-id');
    $('.image-background .active').fadeOut(500);
    $('#' + img).css('display', 'flex');
    $('#' + img).hide(0);
    $('#' + img).fadeIn(500);
    $('#' + img).addClass('active');
    $(nextPanel).prevAll().css('transform', 'rotateX(15deg) scale(0.9)');
    $(nextPanel).nextAll().css('transform', 'rotateX(-30deg) scale(0.9)');
    $(nextPanel).css('transform', 'rotateX(0deg) scale(1)');
});
slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('[data-slick-index="7"]').removeClass('color');
});

$('.slick-slide').click(function(){
  $(slider).slick('slickGoTo', $(this).attr('data-slick-index'));
});

$('.burger').click(function(){
    if ($('header ul').is(':hidden')) {
        $('header ul').css('display', 'flex');
    $('footer').css('display', 'flex');
        $('header ul').hide();
        $('footer').hide();
        $('header ul').slideDown(500);
        $('footer').fadeIn(1000);
    } else {
        $('header ul').slideUp(500);
        $('footer').fadeOut(1000);
    }
});
});