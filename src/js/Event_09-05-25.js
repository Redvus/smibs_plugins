import { gsap } from 'gsap'; // Убрать в продакшене

export class Event_090525 {
	constructor() {
		this.initLayout();
		this.initAnimation();
		// this.initDev();
	}

	initLayout() {
		this.bodyBlock = document.body;
		this.event_090525 = document.createElement('div');
		// this.container = document.createElement('div');

		this.event_090525.id = 'event_090525';
		this.event_090525.className = 'anniversary anniversary--event090525';
		// this.container.classList = 'anniversary__container';

		this.event_090525.innerHTML = `
			<picture id="ev090525Back">
				<img src="/assets/images/event_090525/ev090525_back.png" alt="">
			</picture>
			<picture id="ev090525BackM">
				<img src="/assets/images/event_090525/ev090525_backM.png" alt="">
			</picture>
			<picture id="ev090525Nine">
				<img src="/assets/images/event_090525/ev090525_nine.png" alt="">
			</picture>
			<picture id="ev090525Slogan">
				<img src="/assets/images/event_090525/ev090525_slogan.png" alt="">
			</picture>
			<picture id="ev090525SloganM">
				<img src="/assets/images/event_090525/ev090525_sloganM.png" alt="">
			</picture>
			<picture id="ev090525Year">
				<img src="/assets/images/event_090525/ev090525_year.png" alt="">
			</picture>
			<picture id="ev090525Logo">
				<img src="/assets/images/event_090525/ev090525_logo.png" alt="">
			</picture>
		`;

		// Appends
		this.bodyBlock.appendChild(this.event_090525);
	}

	initAnimation() {
		const
			event_090525 = document.getElementById('event_090525'),
			ev090525Back = document.getElementById('ev090525Back'),
			ev090525BackM = document.getElementById('ev090525BackM'),
			ev090525Nine = document.getElementById('ev090525Nine'),
			ev090525Slogan = document.getElementById('ev090525Slogan'),
			ev090525SloganM = document.getElementById('ev090525SloganM'),
			ev090525Year = document.getElementById('ev090525Year'),
			ev090525Logo = document.getElementById('ev090525Logo')
		;

		let tl = new gsap.timeline({
			delay: 1,
			onComplete: this.initHide(6)
		});

		tl
			.to(event_090525, {
				duration: 0.3,
				autoAlpha: 1,
				zIndex: 9999,
				// easy: "elastic.in(1,0.3)"
			})
			.from(ev090525Nine, {
				duration: 1,
				delay: '-0.3',
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

	initHide(delay) {
		let tl = new gsap.timeline({
			delay: delay,
			onComplete: () => {
				setTimeout(() => {
					this.bodyBlock.removeChild(this.event_090525);
				}, 1000)
			}
		});

		tl
			.to(this.event_090525, {
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
		this.event_090525.style.opacity = 1;
		this.event_090525.style.visibility = 'visible';
		this.event_090525.style.zIndex = 9999;
	}
}