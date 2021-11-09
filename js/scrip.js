(function($){
    var certification = $('.certification'),
    overlay= $ ('<div/>', { id:'overlay'});
    overlay.appendTo ('body').hide();
/*on click*/ 
certification.find('a').on('click', function(event) 
{	
    var href= 	$(this).attr('href'),
        image= 	$('<img>', {src: href, alt: 'poop' });
        
        overlay.html(image)
             .fadeIn(300);
             
        event.preventDefault();
});
/*overlay hide */
overlay.on('click', function(){
    overlay.fadeOut(300);
});

$(document).on('keyup', function(event){
    if(event.which === 27) overlay.fadeOut(300);
});

    
    })(jQuery);