function updTopbar () {
    var imglogo = $('img.logo').height();
    $('img.logo').css('min-height','56px');
    $('img.logo').css('max-height','128px');
   /**
    if (imglogo >= 61) {
      $('img.logo').css('height', imglogo - 4);
    } else {
        if ($(window).scrollTop() <= 30) {
          $('img.logo').css('height', '117px');
        }
    }
**/
    var st = $(window).scrollTop()
    if (st >= 160) {
        $('img.logo').css('height', '56px');
    } else {
        $('img.logo').css('height', '128px');
    }
        


}

jQuery(document).ready(function($) {
  // One page navigation
  var lastId,
      topMenu = $(".top-nav"),
      topMenuHeight = topMenu.outerHeight() + 15,
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function() {
          var thref = $(this).attr("href").replace('/', '/#').replace('.html', '')
          try {
            var item = $(thref);
            if (item.length) {
                return item;
            }    
          } catch (error) {
             return null; 
          }
          
      });
  menuItems.click(function(e) {
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      $('html, body').stop().animate({
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
  });
  $(window).scroll(function() {
      console.log($(window).scrollTop())
      $('.form_message_callback').hide()
      $('.form_message_support').hide()

      var fromTop = $(this).scrollTop() + topMenuHeight;
      var cur = scrollItems.map(function() {
          if ($(this).offset().top < fromTop)
              return this;
      });
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
  
      if (lastId !== id) {
          lastId = id;
          menuItems
              .parent().removeClass("active-item")
              .end().filter("[href=#" + id + "]").parent().addClass("active-item");
      }

      setTimeout(updTopbar,1, this);

  });

  $(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    //setTimeout(updTopbar,1, this);
   });
   

});  
