// import {gsap} from "gsap";

class Event_08_03_25 {

    constructor() {
        this.initLayout();
        this.initAnimation();
        // this.initDev();
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.womanDay25 = document.createElement('div');
        this.container = document.createElement('div');

        this.womanDay25.id = 'womanDay25';
        this.womanDay25.className = 'anniversary anniversary--womanDay25';
        this.container.classList = 'anniversary__container';

        this.womanDay25.innerHTML = `
			<picture id="womanDay25Back">
				<img src="assets/images/womanDay25/womanDay25Back.svg" alt="">
			</picture>
			<picture id="womanDay25BackBottom">
				<img src="assets/images/womanDay25/womanDay25Back_2.png" alt="">
			</picture>
		`;

        this.container.innerHTML = `
            <div id="womanDay25Slogan">
                <picture id="womanDay25Slogan_1">
                    <img src="assets/images/womanDay25/womanDay25Slogan_1.png" id="womanDay25Slogan_1" alt="">
                </picture>
                <picture id="womanDay25Slogan_2">
                    <img src="assets/images/womanDay25/womanDay25Slogan_2.png" id="womanDay25Slogan_2" alt="">
                </picture>
                <picture id="womanDay25Slogan_3">
                    <img src="assets/images/womanDay25/womanDay25Slogan_3.png" id="womanDay25Slogan_3" alt="">
                </picture>
                <picture id="womanDay25Slogan_4">
                    <img src="assets/images/womanDay25/womanDay25Slogan_4.png" id="womanDay25Slogan_4" alt="">
                </picture>
            </div>
            <div id="womanDay25Woman1">
                <picture id="womanDay25Woman1_1">
                    <img src="assets/images/womanDay25/womanDay25Woman1_1.png" id="womanDay25Woman1_1" alt="">
                </picture>
                <picture id="womanDay25Woman1_2">
                    <img src="assets/images/womanDay25/womanDay25Woman1_2.png" id="womanDay25Woman1_2" alt="">
                </picture>
                <picture id="womanDay25Woman1_3">
                    <img src="assets/images/womanDay25/womanDay25Woman1_3.png" id="womanDay25Woman1_3" alt="">
                </picture>
                <picture id="womanDay25Woman1_4">
                    <img src="assets/images/womanDay25/womanDay25Woman1_4.png" id="womanDay25Woman1_4" alt="">
                </picture>
                <picture id="womanDay25Woman1_5">
                    <img src="assets/images/womanDay25/womanDay25Woman1_5.png" id="womanDay25Woman1_5" alt="">
                </picture>
            </div>
            <div id="womanDay25Woman2">
                <picture id="womanDay25Woman2_1">
                    <img src="assets/images/womanDay25/womanDay25Woman2_1.png" id="womanDay25Woman2_1" alt="">
                </picture>
                <picture id="womanDay25Woman2_2">
                    <img src="assets/images/womanDay25/womanDay25Woman2_2.png" id="womanDay25Woman2_2" alt="">
                </picture>
                <picture id="womanDay25Woman2_3">
                    <img src="assets/images/womanDay25/womanDay25Woman3_5.png" id="womanDay25Woman2_3" alt="">
                </picture>
            </div>
            <div id="womanDay25Woman3">
                <picture id="womanDay25Woman3_1">
                    <img src="assets/images/womanDay25/womanDay25Woman3_1.png" id="womanDay25Woman3_1" alt="">
                </picture>
                <picture id="womanDay25Woman3_2">
                    <img src="assets/images/womanDay25/womanDay25Woman3_2.png" id="womanDay25Woman3_2" alt="">
                </picture>
                <picture id="womanDay25Woman3_3">
                    <img src="assets/images/womanDay25/womanDay25Woman3_3.png" id="womanDay25Woman3_3" alt="">
                </picture>
                <picture id="womanDay25Woman3_4">
                    <img src="assets/images/womanDay25/womanDay25Woman3_4.png" id="womanDay25Woman3_4" alt="">
                </picture>
                <picture id="womanDay25Woman3_5">
                    <img src="assets/images/womanDay25/womanDay25Woman2_3.png" id="womanDay25Woman3_5" alt="">
                </picture>
            </div>
            <div id="womanDay25Woman4">
                <picture id="womanDay25Woman4_1">
                    <img src="assets/images/womanDay25/womanDay25Woman4_1.png" id="womanDay25Woman4_1" alt="">
                </picture>
                <picture id="womanDay25Woman4_2">
                    <img src="assets/images/womanDay25/womanDay25Woman4_2.png" id="womanDay25Woman4_2" alt="">
                </picture>
                <picture id="womanDay25Woman4_3">
                    <img src="assets/images/womanDay25/womanDay25Woman4_3.png" id="womanDay25Woman4_3" alt="">
                </picture>
                <picture id="womanDay25Woman4_4">
                    <img src="assets/images/womanDay25/womanDay25Woman4_4.png" id="womanDay25Woman4_4" alt="">
                </picture>
                <picture id="womanDay25Woman4_5">
                    <img src="assets/images/womanDay25/womanDay25Woman4_5.png" id="womanDay25Woman4_5" alt="">
                </picture>
            </div>
        `;

        // Appends
        this.bodyBlock.appendChild(this.womanDay25);
        this.womanDay25.appendChild(this.container);
    }

    initAnimation() {
        const
            womanDay25 = document.getElementById('womanDay25'),
            womanDay25Back = document.getElementById('womanDay25Back'),
            womanDay25BackBottom = document.getElementById('womanDay25BackBottom'),
            womanDay25Slogan_1 = document.getElementById('womanDay25Slogan_1'),
            womanDay25Slogan_2 = document.getElementById('womanDay25Slogan_2'),
            womanDay25Slogan_3 = document.getElementById('womanDay25Slogan_3'),
            womanDay25Slogan_4 = document.getElementById('womanDay25Slogan_4'),
            womanDay25Woman1_1 = document.getElementById('womanDay25Woman1_1'),
            womanDay25Woman1_2 = document.getElementById('womanDay25Woman1_2'),
            womanDay25Woman1_3 = document.getElementById('womanDay25Woman1_3'),
            womanDay25Woman1_4 = document.getElementById('womanDay25Woman1_4'),
            womanDay25Woman1_5 = document.getElementById('womanDay25Woman1_5'),
            womanDay25Woman2_1 = document.getElementById('womanDay25Woman2_1'),
            womanDay25Woman2_2 = document.getElementById('womanDay25Woman2_2'),
            womanDay25Woman2_3 = document.getElementById('womanDay25Woman2_3'),
            womanDay25Woman3_1 = document.getElementById('womanDay25Woman3_1'),
            womanDay25Woman3_2 = document.getElementById('womanDay25Woman3_2'),
            womanDay25Woman3_3 = document.getElementById('womanDay25Woman3_3'),
            womanDay25Woman3_4 = document.getElementById('womanDay25Woman3_4'),
            womanDay25Woman3_5 = document.getElementById('womanDay25Woman3_5'),
            womanDay25Woman4_1 = document.getElementById('womanDay25Woman4_1'),
            womanDay25Woman4_2 = document.getElementById('womanDay25Woman4_2'),
            womanDay25Woman4_3 = document.getElementById('womanDay25Woman4_3'),
            womanDay25Woman4_4 = document.getElementById('womanDay25Woman4_4'),
            womanDay25Woman4_5 = document.getElementById('womanDay25Woman4_5')
        ;

        let tl = new gsap.timeline({
            delay: 0.5,
            onComplete: this.initHide(9)
        });

        tl
            .to(womanDay25, {
                duration: 0.3,
                delay: '1',
                autoAlpha: 1,
                zIndex: 9999,
                // easy: "elastic.in(1,0.3)"
            })
            .from([womanDay25Back, womanDay25BackBottom], {
                duration: 1,
                delay: '0.1',
                autoAlpha: 0
            })
            .from([
                womanDay25Woman1_1,
                womanDay25Woman1_2,
                womanDay25Woman1_3,
                womanDay25Woman1_4,
                womanDay25Woman1_5,
                womanDay25Woman2_1,
                womanDay25Woman2_2,
                womanDay25Woman2_3,
                womanDay25Woman3_1,
                womanDay25Woman3_2,
                womanDay25Woman3_3,
                womanDay25Woman3_4,
                womanDay25Woman3_5,
                womanDay25Woman4_1,
                womanDay25Woman4_2,
                womanDay25Woman4_3,
                womanDay25Woman4_4,
                womanDay25Woman4_5
            ], {
                duration: 0.3,
                delay: '-0.5',
                autoAlpha: 0,
                y: '-15%',
                stagger: 0.1,
                // easy: 'bounce'
            })
            .from([womanDay25Slogan_1, womanDay25Slogan_2, womanDay25Slogan_3, womanDay25Slogan_4], {
                duration: 1,
                delay: '-1',
                autoAlpha: 0,
                y: '-30%',
                stagger: 0.3,
                // easy: 'bounce'
            })
        ;
    }

    initHide(delay) {
        let tl = new gsap.timeline({
            delay: delay,
            onComplete: () => {
                setTimeout(() => {
                    this.bodyBlock.removeChild(this.womanDay25);
                }, 1000)
            }
        });

        tl
            .to(this.womanDay25, {
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
        this.womanDay25.style.opacity = 1;
        this.womanDay25.style.visibility = 'visible';
        this.womanDay25.style.zIndex = 9999;
    }
}

export { Event_08_03_25 }