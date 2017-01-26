$(document).ready(function () {
	var i = 0;
	$('.slider').slick({
		dots: false,
		infinite: true,
//		fade: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: "<a href='#' class='slider-arrow prev-arrow'></a>",
		nextArrow: "<a href='#' class='slider-arrow next-arrow'></a>"
	});
	$('.slider .slick-slide:not(.slick-active) .slide-intro').addClass('leaving run');
	$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {


		$('.home-banners').removeClass('sl-' + currentSlide).addClass('sl-' + nextSlide);

		if (nextSlide == 0 && currentSlide == 3) {
			$('#HB_GLOBE').addClass('animate').css('transform', 'rotate(360deg)');

			setTimeout(function () {
				$('#HB_GLOBE').removeClass('animate');

				if ($('#HB_GLOBE').css('transform') == "matrix(1, -2.44929e-16, 2.44929e-16, 1, 0, 0)") {
					setTimeout(function () {
						$('#HB_GLOBE').css('transform', 'rotate(0deg)');
					}, 100);
				}
			}, 500);



		} else if (nextSlide == 0 && currentSlide == 3) {
			$('#HB_GLOBE').addClass('animate').css('transform', 'rotate(0deg)');
		} else if (nextSlide == 3 && currentSlide == 0) {

			$('#HB_GLOBE').css('transform', 'rotate(360deg)');
			setTimeout(function () {

				$('#HB_GLOBE').addClass('animate').css('transform', 'rotate(' + (nextSlide * 90) + 'deg)');
			}, 100);

		} else {

			$('#HB_GLOBE').addClass('animate').css('transform', 'rotate(' + (nextSlide * 90) + 'deg)');
		}
		setTimeout(function () {
			$('#HB_GLOBE').removeClass('animate');
		}, 500);



//		if((currentSlide == 1 && nextSlide == 2) || (currentSlide == 2 && nextSlide == 3)) {
//			alert(nextSlide);
//			$('.sl-3 .slide-intro').addClass('entered');
//			$('.slick-active').prev().find('.slide-intro').addClass('leaving run');
//			setTimeout(function () {
//				$('.entering.prepare').removeClass('entered').removeClass('prepare');
//			}, 2500);
//		}
		$('.slider .sl-' + (currentSlide + 1) + ' .slide-intro').addClass('leaving run');
		$('.slider .sl-' + (nextSlide + 1) + ' .slide-intro').removeClass('leaving').addClass('entered');
	});
});
