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

document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true,
	});

	const swiperText = new Swiper('.slider-text', {
		loop: false,
		speed: 2400,
		mousewheel: {
			invert: false,
		}

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
				$('.img-programs').removeClass('choice-active');

			} else if (text == 'Комплексы тренировок') {
				$('.img-programs').addClass('choice-active');
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


	


	swiperText.on('slideChange', function () {
		console.log(swiperText.activeIndex);
		if (swiperText.activeIndex == 2) {
			
			$('.img-menu__next').animate({"left":"90px"}, 2500);
		} else {
			$('.img-menu__next').animate({"left":"-190px"}, "slow");
		}
		
	} );


	















});