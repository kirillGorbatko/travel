import { onWindowResize } from 'utils';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import buildSliders from './buildSliders';

Swiper.use([Navigation, Pagination]);

function topRatedSlider() {
	const sliderClass = '.luxuryPackagesSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelector(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let luxuryPackagesSliderEl;

		const enablePackagesSlider = () => {
			luxuryPackagesSliderEl = new Swiper(sliderClass, {
				observer: true,
				observeParents: true,
				speed: 800,

				navigation: {
					nextEl: '.luxury_packages_in .swiperArrow',
				},

				pagination: {
					type: 'bullets',
					el: '.luxury_packages_in .swiperPagination',
					clickable: true,
				},

				breakpoints: {
					320: {
						slidesPerView: 1.1,
					},
					600: {
						slidesPerView: 1.8,
					},
					900: {
						slidesPerView: 2.1,
					},
				},
			});
		};

		const checkWindowWidth = () => {
			if (window.innerWidth < 1024) {
				if (!slideEl.classList.contains('swiper-initialized')) {
					enablePackagesSlider();
				}
			} else {
				if (slideEl.classList.contains('swiper-initialized')) {
					luxuryPackagesSliderEl.destroy(true, true);
				}
			}
		};

		checkWindowWidth();

		onWindowResize(checkWindowWidth);
	}
}

export default topRatedSlider;
