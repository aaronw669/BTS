
$(window).scroll(function(){

  var height = $(window).innerHeight();
  var currentScroll = $(window).scrollTop()+height;

  $(".fade").each( function(){
      var $this = $(this);

      var _scrollTop = $this.offset().top;
      var _height = $this.innerHeight();

      if(_scrollTop+_height/2 < currentScroll ){
        if(! $this.hasClass("active")){
          $this.stop().addClass("active")
            .fadeTo(500, 1);        
        }
      } else {
        $this.stop().removeClass("active")
          .fadeTo(500, 0);
      }
  });

});
$(window).trigger("scroll");
