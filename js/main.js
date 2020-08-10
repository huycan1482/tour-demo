$(document).ready(function ($) {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 180 ) {
            
            $('.right-sidebar').addClass('side-bar-position');

            if ($(this).scrollTop() > 1500) {
                $('.right-sidebar').removeClass('side-bar-position');
                $('.right-sidebar').css({'margin-top':'1320px'});
            } else {
                $('.right-sidebar').css({'margin-top':'0'});
            }
            
        } else {
            $('.right-sidebar').removeClass('side-bar-position');
        }
    });

    $("li[id*='s']").click(function() {
        let a = $(this).attr("id");
        if ($('.'+a).hasClass('fa-long-arrow-alt-down')) {
            $('.'+a).addClass('fa-long-arrow-alt-up');
            $('.'+a).removeClass('fa-long-arrow-alt-down');
        } else if ($('.'+a).hasClass('fa-long-arrow-alt-up')) {
            $('.'+a).removeClass('fa-long-arrow-alt-up');
        } else {
            $('.'+a).addClass('fa-long-arrow-alt-down');
        }
    });

    $("a[href*='#']").click(function() {
        let target = $(this).attr("href");
        $('html,body').stop().animate({
          scrollTop: $(target).offset().top
        }, 500);
        event.preventDefault();
      });
    //   stop dung animate dang chay
    // event. k thay bi loi load

    //   $("a[href*='#']:not([href='#])").click(function() {
    //     let target = $(this).attr("href");
    //     $('html,body').stop().animate({
    //       scrollTop: $(target).offset().top
    //     }, 1000);
    //     event.preventDefault();
    //   });
})