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

	$('.menu__btn').click(function(event) {
		$('.menu__btn, .menu__list').toggleClass('active');
		$('body').toggleClass('lock')
	});

	$('.menu__list-link').click(function(event) {
		$('.menu__btn, .menu__list').toggleClass('active');
		$('body').removeClass('lock')
	});
});