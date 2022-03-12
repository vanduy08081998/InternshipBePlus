// count up
$(document).ready(function () {
    $(".count").each(function () {
        var count = $(this);
        var countTo = count.attr('data-count');
        // console.log(countTo);
        $({countNum:count.text()}).animate({
                countNum:countTo,
            },
            {
                duration:5000,
                easing:'linear',
                step:function(){
                    count.text(Math.floor(this.countNum));
                },
                complete:function(){
                    count.text(this.countNum);
                }
            });
    });
});

// Navbar fixed
$(document).ready(function () {
    $(window).scroll(function (event) {
        var pos_body = $('html,body').scrollTop();
        // console.log(pos_body);
        if (pos_body > 200) {
            // Navbar fixed when body posotion > 200
            $('.header-nav').addClass('header-fixed').css('transitrion', '0.5s').css('transform', 'translateY(0)');
            // Scoll-top btn d-block  when body posotion > 200
            $('.scoll-top').addClass('scoll-block');
        }
        if (pos_body < 200) {
            // Navbar fixed will hide when body posotion < 200
            $('.header-nav').removeClass('header-fixed');
            // Scoll-top btn will hide when body position < 200
            $('.scoll-top').removeClass('scoll-block');
        }
    });
    // Scoll to top
    //Click event to scroll to top
    $("#scollTop").click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;
    });
});

// Filter Work-section
$(document).ready(function() {
	var $category = $('.category').click(function() {
	  if (this.id == 'all') {
	    $('.work-row > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('.work-row > div').not($el).hide();
	  }
	  $category.removeClass('category-active');
	  $(this).addClass('category-active');
	})
});

// Filter Dropdown Mobile Work-section
$(document).ready(function() {
	$('#dropdown').click(function() {
	  if ($('#dropdown').val() == 'all') {
	    $('.work-row > div').fadeIn(450);
        $('#cateName').html("All Work");
        } else {
	    var $el = $('.' + $('#dropdown').val()).fadeIn(450);
	    $('.work-row > div').not($el).hide();
	  }
	})
});

// Show navbar mobile
$(document).ready(function() {
    $('#mobile').click(function() {
        $('.nav_mobile').addClass('show-nav_mobile');
        $('.icon-menu_mobile').css('display', 'none');
        $('.overlay').addClass('overlay-active');
        $('.header-nav').removeClass('header-fixed');
        $('body').css("overflow", "hidden");
    })
})

// Hidden navbar mobile
$(document).ready(function() {
    $('.overlay').click(function() {
        $('.nav_mobile').removeClass('show-nav_mobile').css('transition', '0.5s');
        $('.overlay').removeClass('overlay-active');
        $('.icon-menu_mobile').css('display', 'block');
        $('body').css("overflow", "visible");
        $('.header-nav').addClass('header-fixed');
    })
})

// Navbar link
$(document).ready(function () {
    $( '.links a' ).on( 'click', function(e){
        var href = $(this).attr( 'href' );
        $( 'html, body' ).animate({
              scrollTop: $( href ).offset().top
            }, '400' );
        $('.links a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(window).scroll(function (e) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos === 0)
        {
            $('a[href^="#home"]').addClass('active');
            return;
        } 
        $('.links li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.links li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        }); 
    });
})

// Get value progess from CSS var()
$(document).ready(function() {
    $('.progess-inner').ready(function() {
        $('.progess-design').html($('.skill-section').css('--design'));
        $('.progess-develop').html($('.skill-section').css('--develop'));
        $('.progess-photography').html($('.skill-section').css('--photography'));
        $('.progess-strategy').html($('.skill-section').css('--strategy'));
    })
})