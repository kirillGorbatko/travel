import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import buildSliders from './buildSliders';

function topRatedSlider() {
	const sliderClass = '.topRatedSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let topRatedSliderEl = new Swiper(sliderClass, {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			speed: 800,
			slidesPerView: 3,

		});
	}
}

export default topRatedSlider;
