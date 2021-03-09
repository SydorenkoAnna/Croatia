$(document).ready(function() {

	$('.attractions__gallery').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
			});

	$('.burger').click(function(event) {
		$('.burger, .nav').toggleClass('active');
		$('body').toggleClass('lock')
	});

	$('.nav-link').click(function(event) {
		$('.burger, .nav').toggleClass('active');
		$('body').removeClass('lock')
	});
});