(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

jQuery(document).ready(function($) {

	var feedbackSlider = jQuery('.feedback-slider');
	feedbackSlider.owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		responsive:{

			// breakpoint from 767 up
			767:{
				nav: true,
				dots: false
			}
		}
	});

	feedbackSlider.on("translate.owl.carousel", function(){
		$(".feedback-slider-item h3").removeClass("animated fadeIn").css("opacity", "0");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").removeClass("animated zoomIn").css("opacity", "0");
	});

	feedbackSlider.on("translated.owl.carousel", function(){
		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").addClass("animated zoomIn").css("opacity", "1");
	});
	feedbackSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
		var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
		var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('span').attr('data-rating');
		var nextRating = $(property.target).find(".owl-item").eq(current).next().find('span').attr('data-rating');
		$('.thumb-prev').find('img').attr('src', prevThumb);
		$('.thumb-next').find('img').attr('src', nextThumb);
		$('.thumb-prev').find('span').next().html(prevRating + '<i class="fa fa-star"></i>');
		$('.thumb-next').find('span').next().html(nextRating + '<i class="fa fa-star"></i>');
	});
	$('.thumb-next').on('click', function() {
		feedbackSlider.trigger('next.owl.carousel', [300]);
		return false;
	});
	$('.thumb-prev').on('click', function() {
		feedbackSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});

}); //end ready
