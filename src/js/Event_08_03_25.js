import {gsap} from "gsap";

class Event_08_03_25 {

    constructor() {
        this.initLayout();
        // this.initAnimation();
        this.initDev();
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
            anniversary2025 = document.getElementById('anniversary2025'),
            s2025_gift1_1 = document.getElementById('s2025_gift1_1'),
            s2025_gift1_2 = document.getElementById('s2025_gift1_2'),
            s2025_gift1_3 = document.getElementById('s2025_gift1_3'),
            s2025_gift1_4 = document.getElementById('s2025_gift1_4'),
            s2025_gift1_5 = document.getElementById('s2025_gift1_5'),
            s2025_gift2_1 = document.getElementById('s2025_gift2_1'),
            s2025_gift2_2 = document.getElementById('s2025_gift2_2'),
            s2025_gift2_3 = document.getElementById('s2025_gift2_3'),
            s2025_gift2_4 = document.getElementById('s2025_gift2_4'),
            s2025_gift2_5 = document.getElementById('s2025_gift2_5'),
            s2025_gift3_1 = document.getElementById('s2025_gift3_1'),
            s2025_gift3_2 = document.getElementById('s2025_gift3_2'),
            s2025_gift3_3 = document.getElementById('s2025_gift3_3'),
            s2025_gift4_1 = document.getElementById('s2025_gift4_1'),
            s2025_gift4_2 = document.getElementById('s2025_gift4_2'),
            s2025_gift4_3 = document.getElementById('s2025_gift4_3'),
            s2025_gift4_4 = document.getElementById('s2025_gift4_4'),
            s2025_gift4_5 = document.getElementById('s2025_gift4_5'),
            s2025_gift5_1 = document.getElementById('s2025_gift5_1'),
            s2025_gift5_2 = document.getElementById('s2025_gift5_2'),
            s2025_gift5_3 = document.getElementById('s2025_gift5_3'),
            s2025_gift6_1 = document.getElementById('s2025_gift6_1'),
            s2025_gift6_2 = document.getElementById('s2025_gift6_2'),
            s2025_gift6_3 = document.getElementById('s2025_gift6_3'),
            s2025_gift7_1 = document.getElementById('s2025_gift7_1'),
            s2025_gift7_2 = document.getElementById('s2025_gift7_2'),
            s2025_back = document.getElementById('s2025_back'),
            s2025_dream = document.getElementById('s2025_dream'),
            s2025_made = document.getElementById('s2025_made')
        ;

        let tl = new gsap.timeline({
            delay: 1,
            onComplete: this.initHide(9)
        });

        tl
            .to(anniversary2025, {
                duration: 0.3,
                delay: '1',
                autoAlpha: 1,
                zIndex: 9999,
                // easy: "elastic.in(1,0.3)"
            })
            .from([
                s2025_gift1_1,
                s2025_gift1_2,
                s2025_gift1_3,
                s2025_gift1_4,
                s2025_gift1_5,
                s2025_gift2_1,
                s2025_gift2_2,
                s2025_gift2_3,
                s2025_gift2_4,
                s2025_gift2_5,
                s2025_gift3_1,
                s2025_gift3_2,
                s2025_gift3_3,
                s2025_gift4_1,
                s2025_gift4_2,
                s2025_gift4_3,
                s2025_gift4_4,
                s2025_gift4_5,
                s2025_gift5_1,
                s2025_gift5_2,
                s2025_gift5_3,
                s2025_gift6_1,
                s2025_gift6_2,
                s2025_gift6_3,
                s2025_gift7_1,
                s2025_gift7_2
            ], {
                duration: 0.3,
                // delay: '-0.3',
                autoAlpha: 0,
                y: '-15%',
                stagger: 0.1,
                // easy: 'bounce'
            })
            .from([s2025_back], {
                duration: 1,
                delay: '-0.7',
                autoAlpha: 0
            })
            .from([s2025_made, s2025_dream], {
                duration: 1,
                delay: '-0.4',
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
                this.bodyBlock.removeChild(this.anniversaryDay);
            }
        });

        tl
            .to(this.anniversaryDay, {
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