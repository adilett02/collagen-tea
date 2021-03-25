(function ($) {

	"use strict";
	$('.nonloop-block-13').owlCarousel({
		center: false,
		items: 1,
		loop: true,
		stagePadding: 0,
		margin: 20,
		autoplay: true,
		autoHeight: true,
		nav: true,
		navText: ['back', 'next'],
		responsive: {
			600: {
				margin: 0,
				stagePadding: 10,
				items: 1
			},
			1000: {
				margin: 0,
				stagePadding: 0,
				items: 1
			},
			1200: {
				margin: 0,
				stagePadding: 0,
				items: 1
			}
		}
	});


})(jQuery);