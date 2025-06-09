import { gsap } from 'gsap'; // Убрать в продакшене

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
		this.dayRussia2025.className = 'anniversary anniversary--event090525';
		// this.container.classList = 'anniversary__container';

		this.dayRussia2025.innerHTML = `
			<picture id="ev090525Back">
				<img src="/assets/images/anniversary/dayRussia2025/ev090525_back.png" alt="">
			</picture>
			<picture id="ev090525BackM">
				<img src="/assets/images/anniversary/dayRussia2025/ev090525_backM.png" alt="">
			</picture>
			<picture id="ev090525Nine">
				<img src="/assets/images/anniversary/dayRussia2025/ev090525_nine.png" alt="">
			</picture>
			<picture id="ev090525Slogan">
				<img src="/assets/images/anniversary/dayRussia2025/ev090525_slogan.png" alt="">
			</picture>
			<picture id="ev090525SloganM">
				<img src="/assets/images/anniversary/dayRussia2025/ev090525_sloganM.png" alt="">
			</picture>
			<picture id="ev090525Year">
				<img src="/assets/images/anniversary/dayRussia2025/ev090525_year.png" alt="">
			</picture>
			<picture id="ev090525Logo">
				<img src="/assets/images/anniversary/dayRussia2025/ev090525_logo.png" alt="">
			</picture>
		`;

		// Appends
		this.bodyBlock.appendChild(this.dayRussia2025);
	}

	initAnimation(delay = 0.6) {
		const
			ev090525Back = document.getElementById('ev090525Back'),
			ev090525BackM = document.getElementById('ev090525BackM'),
			ev090525Nine = document.getElementById('ev090525Nine'),
			ev090525Slogan = document.getElementById('ev090525Slogan'),
			ev090525SloganM = document.getElementById('ev090525SloganM'),
			ev090525Year = document.getElementById('ev090525Year'),
			ev090525Logo = document.getElementById('ev090525Logo')
		;

		let tl = new gsap.timeline({
			delay: delay,
			onComplete: this.initHide(7)
		});

		tl
			.to(this.dayRussia2025, {
				duration: 1,
				autoAlpha: 1,
				zIndex: 9999,
				// easy: "elastic.in(1,0.3)"
			})
			.from(ev090525Nine, {
				duration: 1,
				delay: '0.5',
				autoAlpha: 0,
				x: '-10%'
			})
			.from(ev090525Back, {
				duration: 1,
				delay: '-0.3',
				autoAlpha: 0
			})
			.from(ev090525Slogan, {
				duration: 0.6,
				delay: '-0.3',
				autoAlpha: 0,
				x: '5%',
				stagger: 0.3
			})
			.from([
				ev090525Year,
				ev090525Logo
			], {
				duration: 0.6,
				delay: '-0.4',
				autoAlpha: 0,
				y: '10%'
			})
		;
	}

	initAnimationMobile(delay = 0.6) {
		const
			dayRussia2025 = document.getElementById('dayRussia2025'),
			ev090525BackM = document.getElementById('ev090525BackM'),
			ev090525Nine = document.getElementById('ev090525Nine'),
			ev090525SloganM = document.getElementById('ev090525SloganM'),
			ev090525Year = document.getElementById('ev090525Year'),
			ev090525Logo = document.getElementById('ev090525Logo')
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
			.from(ev090525Nine, {
				duration: 1,
				delay: '0.5',
				autoAlpha: 0,
				// y: '-10%'
			})
			.from(ev090525BackM, {
				duration: 1,
				delay: '-0.3',
				autoAlpha: 0
			})
			.from(ev090525SloganM, {
				duration: 0.6,
				delay: '-0.3',
				autoAlpha: 0,
				x: '5%',
				stagger: 0.3
			})
			.from([
				ev090525Year,
				ev090525Logo
			], {
				duration: 0.6,
				delay: '-0.4',
				autoAlpha: 0,
				x: '10%'
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