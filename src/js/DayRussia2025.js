// import { gsap } from 'gsap'; // Убрать в продакшене

export class DayRussia2025 {
	constructor() {
		this.initLayout();
		// this.initAnimation();
		// this.initAnimationMobile();
		// this.initMobile();
		this.initDev();
	}

	initLayout() {
		this.bodyBlock = document.body;
		this.dayRussia2025 = document.createElement('div');
		// this.container = document.createElement('div');

		this.dayRussia2025.id = 'dayRussia2025';
		this.dayRussia2025.className = 'anniversary anniversary--dayRussia2025';
		// this.container.classList = 'anniversary__container';

		// this.dayRussia2025.innerHTML = `
		// 	<picture id="dayRussia2025Baloon">
		// 		<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_baloon.png" alt="">
		// 	</picture>
		// 	<picture id="dayRussia2025Girl">
		// 		<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_girl.jpg" alt="">
		// 	</picture>
		// 	<picture id="dayRussia2025Slogan_1">
		// 		<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_slogan_1.png" alt="">
		// 	</picture>
		// 	<picture id="dayRussia2025Slogan_2">
		// 		<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_slogan_2.png" alt="">
		// 	</picture>
		// 	<picture id="dayRussia2025Slogan_3">
		// 		<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_slogan_3.png" alt="">
		// 	</picture>
		// `;

		this.dayRussia2025.innerHTML = `
			<picture id="dayRussia2025Baloon">
				<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_baloon.png" alt="">
			</picture>
			<picture id="dayRussia2025Girl">
				<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_girl.jpg" alt="">
			</picture>
			<picture id="dayRussia2025Slogan_1">
				<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_slogan_1.png" alt="">
			</picture>
			<picture id="dayRussia2025Slogan_2">
				<img src="/assets/images/dayRussia/dayRussia2025/dayRussia2025_slogan_4.png" alt="">
			</picture>
		`;

		// Appends
		this.bodyBlock.appendChild(this.dayRussia2025);
	}

	initAnimation(delay = 0.6) {
		const
			dayRussia2025 = document.getElementById('dayRussia2025'),
			dayRussia2025Baloon = document.getElementById('dayRussia2025Baloon'),
			dayRussia2025Girl = document.getElementById('dayRussia2025Girl'),
			dayRussia2025Slogan_1 = document.getElementById('dayRussia2025Slogan_1'),
			dayRussia2025Slogan_2 = document.getElementById('dayRussia2025Slogan_2'),
			dayRussia2025Slogan_3 = document.getElementById('dayRussia2025Slogan_3')
		;

		let tl = new gsap.timeline({
			delay: delay,
			onComplete: this.initHide(7)
		});

		tl
			.to(dayRussia2025, {
				duration: 0.3,
				autoAlpha: 1,
				zIndex: 9999,
				// easy: "elastic.in(1,0.3)"
			})
			.from(dayRussia2025Girl, {
				duration: 1,
				delay: '0.2',
				autoAlpha: 0,
				// y: '-10%'
			})
			.from(dayRussia2025Baloon, {
				duration: 0.6,
				delay: '-0.5',
				autoAlpha: 0,
				x: '-10%'
			})
			.from([dayRussia2025Slogan_1, dayRussia2025Slogan_2, dayRussia2025Slogan_3], {
				duration: 0.6,
				delay: '-0.3',
				autoAlpha: 0,
				x: '7%',
				stagger: 0.3
			})
		;
	}

	initAnimationMobile(delay = 0.6) {
		const
			dayRussia2025 = document.getElementById('dayRussia2025'),
			dayRussia2025Baloon = document.getElementById('dayRussia2025Baloon'),
			dayRussia2025Girl = document.getElementById('dayRussia2025Girl'),
			dayRussia2025Slogan_1 = document.getElementById('dayRussia2025Slogan_1'),
			dayRussia2025Slogan_2 = document.getElementById('dayRussia2025Slogan_2'),
			dayRussia2025Slogan_3 = document.getElementById('dayRussia2025Slogan_3')
		;

		let tl = new gsap.timeline({
			delay: delay,
			onComplete: this.initHide(7)
		});

		tl
			.to(dayRussia2025, {
				duration: 0.3,
				autoAlpha: 1,
				zIndex: 9999,
				// easy: "elastic.in(1,0.3)"
			})
			.from(dayRussia2025Girl, {
				duration: 1,
				delay: '0.2',
				autoAlpha: 0,
				// y: '-10%'
			})
			.from([dayRussia2025Slogan_1, dayRussia2025Slogan_2, dayRussia2025Slogan_3], {
				duration: 0.6,
				delay: '-0.3',
				autoAlpha: 0,
				y: '10%',
				stagger: 0.3
			})
		;
	}

	initHide(delay) {
		let tl = new gsap.timeline({
			delay: delay,
			onComplete: () => {
				setTimeout(() => {
					this.bodyBlock.removeChild(this.dayRussia2025);
				}, 1000)
			}
		});

		tl
			.to(this.dayRussia2025, {
				autoAlpha: 0,
				duration: 0.6,
				delay: '-0.8',
				display: 'none',
				zIndex: '-1',
				ease: 'power1'
			})
		;
	}

	initDev() {
		this.dayRussia2025.style.opacity = 1;
		this.dayRussia2025.style.visibility = 'visible';
		this.dayRussia2025.style.zIndex = 9999;
	}

	initMobile() {

		screen.orientation.addEventListener('change', () => {
			if (screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary') {
				location.reload();
			} else if (screen.orientation.type === 'portrait-primary' || screen.orientation.type === 'portrait-secondary') {
				location.reload();
			}
		});

		if (screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary') {
			this.initAnimation();
		} else if (screen.orientation.type === 'portrait-primary' || screen.orientation.type === 'portrait-secondary') {
			this.initAnimationMobile();
		} else {
			this.initAnimation();
		}
	}
}