(function($){
////CERTIFICATION////

    var certification = $('.certification'),
    overlay= $ ('<div/>', { id:'overlay'});
    overlay.appendTo ('body').hide();

certification.find('a').on('click', function(event)
{
    var href= 	$(this).attr('href'),
        image= 	$('<img>', {src: href, alt: 'poop' });

        overlay.html(image)
             .fadeIn(300);

        event.preventDefault();
});

overlay.on('click', function(){
    overlay.fadeOut(300);
});

$(document).on('keyup', function(event){
    if(event.which === 27) overlay.fadeOut(300);
});


////SKILL-SET////

   var offsetTop = $('#skills').offset().top;
    $(window).scroll(function() {
  var height = $(window).height();
  if($(window).scrollTop()+height > offsetTop) {
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },2000);
    });
  }
  });

})(jQuery);