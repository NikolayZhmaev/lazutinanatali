// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
/*jshint esversion: 6 */

import {
	Dropdown
} from 'bootstrap';
import {
	Swiper,
	Parallax,
	Mousewheel,
	Controller,
	Pagination,
	Scrollbar,
	Navigation,
} from 'swiper';

Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation]);

import { gsap, Power2 }  from 'gsap';

document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true,
		pagination: {
			el: '.slider-pagination-count .total',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				let totalress = total >=10 ? total : `0${total}`;
				return totalress;
			}
		}
	});

	const swiperText = new Swiper('.slider-text', {
		direction: 'horizontal',
		centeredSlides: true,
		slidesPerView: 1,

		loop: false,
		speed: 2400,
		mousewheel: {
			invert: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		},
		navigation: {
			nextEl: '#button-next-text',
			prevEl: '#button-prev-text',

		},

	});

	const swiperPortfolio = new Swiper('.swiper-portfolio', {
		loop: true,
		slidesPerView: 'auto',
		
		speed: 1000,
		spaceBetween: 24,
		navigation: {
			nextEl: '#button-next-portfolio',
			prevEl: '#button-prev-portfolio',

		},
	});

	swiperIMG.controller.control = swiperText;
	swiperText.controller.control = swiperIMG;

	let select = function () {
		let selectHeader = document.querySelectorAll('.select__header');
		let selectItem = document.querySelectorAll('.select__item');
		let menu = document.querySelector('.img-programs');
		let programs = document.querySelector('.img-menu');


		selectHeader.forEach(item => {
			item.addEventListener('click', selectToggle);
		});

		selectItem.forEach(item => {
			item.addEventListener('click', selectChoose);
		});

		function selectToggle() {
			this.parentElement.classList.toggle('is-active');
		}

		function selectChoose() {
			let selectCurrent = document.querySelector('.select__current').innerText,
				text = this.innerText,
				select = this.closest('.select'),
				currentText = select.querySelector('.select__current');
			currentText.innerText = text;
			this.innerText = selectCurrent;
			select.classList.remove('is-active');
			if (text == 'Меню для похудения') {
				$('.img-menu').addClass('choice-active');
				$('.img-menu__next').addClass('choice-active');
				$('.img-programs__next').removeClass('choice-active');
				$('.img-programs').removeClass('choice-active');

			} else if (text == 'Комплексы тренировок') {
				$('.img-programs').addClass('choice-active');
				$('.img-programs__next').addClass('choice-active');
				$('.img-menu').removeClass('choice-active');
				$('.img-menu__next').removeClass('choice-active');
			}

		}
	};

	select();

	let card = function () {
		let cards = document.querySelectorAll('.product-card');
		cards.forEach(item => {
			let front_link = item.querySelector('.front-link'),
				back_link = item.querySelector('.back-link');

			front_link.addEventListener('click', function () {
				$(item).removeClass('first-position').addClass('second-position');
			});

			back_link.addEventListener('click', function () {
				$(item).removeClass('second-position').addClass('first-position');
			});
		});
	};

	card();

	function aboutme() {
		let linkAboutme = document.querySelector('.link__aboutme');
		linkAboutme.addEventListener('click', goAbout);

		function goAbout() {
			swiperText.slideTo(3, 2400);
		}
	}

	aboutme();


	//Slide Change
	let curnum = document.querySelector('.slider-pagination-count .current');
	swiperText.on('slideChange', function () {
		let ind = swiperText.realIndex + 1,
		indRes = ind >= 10 ? ind : `0${ind}`;
		gsap.to(curnum, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeInOut,
			onComplete: function() {
				gsap.to(curnum, .1, {
					force3D: true,
					y: 10
				});
				curnum.innerHTML = indRes;
			}
		});
		gsap.to(curnum, .2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeInOut,
			delay: .3
		});

		if (swiperText.activeIndex == 2) {
			$('.img-menu__next').animate({
				"left": "50px"
			}, 2500);
			$('.img-programs__next').animate({
				"left": "50px"
			}, 2500);

		} else {
			$('.img-menu__next').animate({
				"left": "-160px"
			}, "slow");
			$('.img-programs__next').animate({
				"left": "-225px"
			}, "slow");
		}

	});




















});