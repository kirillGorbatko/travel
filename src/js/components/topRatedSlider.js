import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import buildSliders from './buildSliders';

Swiper.use([Navigation, Pagination]);

function topRatedSlider() {
	const sliderClass = '.topRatedSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let topRatedSliderEl = new Swiper(sliderClass, {
			observer: true,
			observeParents: true,
			speed: 800,
			loop: true,

			navigation: {
				nextEl: '.top_rated_block__slider .swiperArrow',
			},

			pagination: {
				type: 'bullets',
				el: '.top_rated_block .swiperPagination',
				clickable: true,
			},

			breakpoints: {
				320: {
					slidesPerView: 1.1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2.5,
				},
				1200: {
					slidesPerView: 3,
				},
			},
		});
	}
}

export default topRatedSlider;
