$(function(){
    //Making hamburger menu, nav
    $('.hamburger').click(function(){
      $('#navMain').stop().slideToggle();
      $('#hamburger').toggleClass('fa-times');
    }); //end nav
    //slideshow on index
    $("#slideshow > div:gt(0)").hide();
        setInterval(function() { 
          $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        },  4000); //end slide show
}) //end doc ready




