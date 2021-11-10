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


//skill-set
var $bars = $( ".bar" ),
    methods = {init: function() {
    
    // Bind events
    methods.bindEvents();
    
  },
    bindEvents: function() {

    // Loop through each of the bars...
    $bars.each( function() {

      var $bar = $( this ),
        $pct = $bar.find( ".pct" ),
        data = $bar.data( "bar" );

      setTimeout( function() {

        $bar
          .css( "background-color", data.color )
          .animate({
            "width": $pct.html()
          }, data.speed || 3000, function() {

            $pct.css({
              "color": data.color,
              "opacity": 1
            });

          });

      }, data.delay || 0 );     

    });

  }
};

// Initialize on page load
methods.init(); 
    
    })(jQuery);