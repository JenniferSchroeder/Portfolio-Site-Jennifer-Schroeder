var swiper = new Swiper('.mySwiper', {
	cssMode: true,
	loop: true,
	autoplay: {
		delay: 8000,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	mousewheel: true,
	keyboard: true,
});
