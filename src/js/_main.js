//Import del fichero principal con todos los scss
import '../assets/css/_config.scss';
//import { loadInit } from './header';
//import { showNavbar, scrollNavBar } from './navbar';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.scrollTo(0, 0);

function loadInit() {
	let loadPage = document.querySelector('.loadpage');
	if(!loadPage.classList.contains('hide')) {
		loadPage.classList.add('hide');
	}
	
	let main = document.querySelector('.main');
	if(!main.classList.contains('active')) {
		main.classList.add('active');
	}

	window.scrollTo(0, 0);
}

window.addEventListener('load' , loadInit);
window.addEventListener('scroll' , () => {
	hideShowTagScroll();
	showElements();
	widthSkillsProgress();
});

function hideShowTagScroll() {
	let tagScroll = document.querySelector('.main__scroll');
	let imgHero = document.querySelector('.main__photo--box');
	
	if (window.scrollY > window.innerHeight/2) {
		if (!tagScroll.classList.contains('hide')) {
			tagScroll.classList.add('hide');
		}
		if (!imgHero.classList.contains('scrolled')) {
			imgHero.classList.add('scrolled');
		}
		
	} else {
		if (tagScroll.classList.contains('hide')) {
			tagScroll.classList.remove('hide');
		}

		if (imgHero.classList.contains('scrolled')) {
			imgHero.classList.remove('scrolled');
		}
	}

	imgHero.style.transitionDelay = '0s';
	
}

function showElements() {
	let allElementsShow = document.querySelectorAll('.show');

	for (let i = 0; i < allElementsShow.length; i++) {
		let topElementShow = allElementsShow[i].getBoundingClientRect().top;
		if(topElementShow < window.innerHeight) {
			if(!allElementsShow[i].classList.contains('active')) {
				allElementsShow[i].classList.add('active');
			}
		}
	}

	let allElementsShowMob = document.querySelectorAll('.show-mob');

	for (let i = 0; i < allElementsShowMob.length; i++) {
		let topElementShow = allElementsShowMob[i].getBoundingClientRect().top;
		if(topElementShow < window.innerHeight) {
			if(!allElementsShowMob[i].classList.contains('active')) {
				allElementsShowMob[i].classList.add('active');
			}
		}
	}

	let contactSection = document.querySelector('.contact');
	if (contactSection.getBoundingClientRect().top < window.innerHeight) {
		if(!contactSection.classList.contains('visible')) {
			contactSection.classList.add('visible');
		}
	}

}

function widthSkillsProgress() {
	let allProgressItems = document.querySelectorAll('.skills__item--progress-value');
	let list = document.querySelector('.skills__list');
	if(list.getBoundingClientRect().top < window.innerHeight/1.25) {
		allProgressItems.forEach(item => {
			let valueProgressBar = item.previousElementSibling.value;
			item.style.width = valueProgressBar + '%';
		});
	}
}

