import { gsap } from "gsap";

class Event_NY2026 {
    constructor(parameters) {
        this.initLayout();
        // this.initAnimation();

        this.initDev();
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.anniversaryDay = document.createElement("div");

        this.anniversaryDay.id = "anniversary2026";
        this.anniversaryDay.className = "anniversary anniversary--2026";
        this.bodyBlock.appendChild(this.anniversaryDay);

        this.anniversaryDay.innerHTML = `
			<picture id="s2026_back">
				<img src="assets/plugins/ny2026/images/s2026_back.webp" alt="">
			</picture>
			<div id="s2026_ded">
				<img src="assets/plugins/ny2026/images/s2026_ded.svg" id="s2026_gift1_1" alt="">
			</div>
            <div id="s2026_girl">
				<img src="assets/plugins/ny2026/images/s2026_girl.svg" id="s2026_gift1_1" alt="">
			</div>
            <div id="s2026_bag">
				<img src="assets/plugins/ny2026/images/s2026_bag.svg" id="s2026_gift1_1" alt="">
			</div>
            <div id="s2026_slogan">
				<img src="assets/plugins/ny2026/images/s2026_slogan.png" id="s2026_gift1_1" alt="">
			</div>
		`;
    }

    initAnimation() {
        const anniversary2026 = document.getElementById("anniversary2026"),
            s2026_back = document.getElementById("s2026_back"),
            s2026_bag = document.getElementById("s2026_bag"),
            s2026_girl = document.getElementById("s2026_girl"),
            s2026_slogan = document.getElementById("s2026_slogan");

        let tl = new gsap.timeline({
            delay: 1,
            onComplete: this.initHide(7),
        });

        tl
            .to(anniversary2026, {
                duration: 0.3,
                delay: "0.3",
                autoAlpha: 1,
                zIndex: 9999,
                // easy: "elastic.in(1,0.3)"
            })
            .from([s2026_back], {
                duration: 1,
                delay: "-0.3",
                autoAlpha: 0,
            })
            .from([s2026_ded, s2026_bag], {
                duration: 0.6,
                delay: "-0.3",
                autoAlpha: 0,
                left: "-=50",
                stagger: 0.7,
            })
            .from(s2026_girl, {
                duration: 0.6,
                delay: "-0.1",
                autoAlpha: 0,
                left: "+=50",
            })
            .from(s2026_slogan, {
                duration: 0.6,
                delay: "-0.1",
                autoAlpha: 0,
                top: "-=20",
            })
        ;
    }

    initDev() {
        this.anniversaryDay.style.opacity = 1;
        this.anniversaryDay.style.visibility = "visible";
        this.anniversaryDay.style.zIndex = 9999;
    }

    initHide(delay) {
        let tl = new gsap.timeline({
            delay: delay,
            onComplete: () => {
                this.bodyBlock.removeChild(this.anniversaryDay);
            },
        });

        tl.to(this.anniversaryDay, {
            autoAlpha: 0,
            duration: 0.6,
            delay: "-0.8",
            display: "none",
            zIndex: "-1",
            ease: "power1",
        });
    }
}

export { Event_NY2026 };
