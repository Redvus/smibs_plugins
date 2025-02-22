import {gsap} from "gsap";

class Event_08_03_25 {

    constructor() {
        this.initLayout();
        // this.initAnimation();
        this.initDev();
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.anniversaryDay = document.createElement('div');

        this.anniversaryDay.id = 'anniversary2025';
        this.anniversaryDay.className = 'anniversary anniversary--2025';
        this.bodyBlock.appendChild(this.anniversaryDay);

        this.anniversaryDay.innerHTML = `
			<div id="s2025_floor"></div>
			<picture id="s2025_pattern">
				<img src="assets/images/anniversary/2025/anni2025_pattern.png" alt="">
			</picture>
			<picture id="s2025_snow">
				<img src="assets/images/anniversary/2025/s2025_snow.png" alt="">
			</picture>
			<div id="s2025_gifts">
				<img src="assets/images/anniversary/2025/s2025_gift_5.png" id="s2025_gift1_1" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_6.png" id="s2025_gift1_2" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_7.png" id="s2025_gift1_3" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_8.png" id="s2025_gift1_4" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_6.png" id="s2025_gift1_5" alt="">

				<img src="assets/images/anniversary/2025/s2025_gift_9.png" id="s2025_gift2_1" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_8.png" id="s2025_gift2_2" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_10.png" id="s2025_gift2_3" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_2.png" id="s2025_gift2_4" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_9.png" id="s2025_gift2_5" alt="">

				<img src="assets/images/anniversary/2025/s2025_gift_1.png" id="s2025_gift3_1" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_1.png" id="s2025_gift3_2" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_5.png" id="s2025_gift3_3" alt="">

				<img src="assets/images/anniversary/2025/s2025_gift_5.png" id="s2025_gift4_1" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_2.png" id="s2025_gift4_2" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_6.png" id="s2025_gift4_3" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_9.png" id="s2025_gift4_4" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_10.png" id="s2025_gift4_5" alt="">

				<img src="assets/images/anniversary/2025/s2025_gift_7.png" id="s2025_gift5_1" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_8.png" id="s2025_gift5_2" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_2.png" id="s2025_gift5_3" alt="">

				<img src="assets/images/anniversary/2025/s2025_gift_6.png" id="s2025_gift6_1" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_1.png" id="s2025_gift6_2" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_9.png" id="s2025_gift6_3" alt="">

				<img src="assets/images/anniversary/2025/s2025_gift_3.png" id="s2025_gift7_1" alt="">
				<img src="assets/images/anniversary/2025/s2025_gift_4.png" id="s2025_gift7_2" alt="">
				<img src="assets/images/anniversary/2025/s2025_back.png" id="s2025_back" alt="">

				<img src="assets/images/anniversary/2025/s2025_dream.png" id="s2025_dream" alt="">
				<img src="assets/images/anniversary/2025/s2025_made.png" id="s2025_made" alt="">
			</div>
		`;
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
        this.anniversaryDay.style.opacity = 1;
        this.anniversaryDay.style.visibility = 'visible';
        this.anniversaryDay.style.zIndex = 9999;
    }
}

export { Event_08_03_25 }