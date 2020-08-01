$(function () {
  $('a[href^="#"]').click(function () {
    const adjust = $('.header_menu').height();
    const speed = 400;
    const href = $(this).attr('href');
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - adjust;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});