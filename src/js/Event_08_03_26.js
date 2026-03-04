import { gsap } from "gsap";

class Event_08_03_26 {
    constructor() {
        this.initLayout();
        this.initAnimation();
        this.initDev();
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.womanDay26 = document.createElement("div");
        this.container = document.createElement("div");

        this.womanDay26.id = "womanDay26";
        this.womanDay26.className = "anniversary anniversary--womanDay26";
        this.container.classList = "anniversary__container";

        this.womanDay26.innerHTML = `
			<picture id="womanDay26Back">
				<img src="assets/images/womanDay26/womanDay26Back.svg" alt="">
			</picture>
			<picture id="womanDay26BackBottom">
				<img src="assets/images/womanDay26/womanDay26Back_2.png" alt="">
			</picture>
		`;

        this.container.innerHTML = `
            <div id="womanDay26Slogan">
                <picture id="womanDay26Slogan_1">
                    <img src="assets/images/womanDay26/womanDay26Slogan_1.png" id="womanDay26Slogan_1" alt="">
                </picture>
                <picture id="womanDay26Slogan_2">
                    <img src="assets/images/womanDay26/womanDay26Slogan_2.png" id="womanDay26Slogan_2" alt="">
                </picture>
                <picture id="womanDay26Slogan_3">
                    <img src="assets/images/womanDay26/womanDay26Slogan_3.png" id="womanDay26Slogan_3" alt="">
                </picture>
                <picture id="womanDay26Slogan_4">
                    <img src="assets/images/womanDay26/womanDay26Slogan_4.png" id="womanDay26Slogan_4" alt="">
                </picture>
            </div>
            <div id="womanDay26Woman1">
                <picture id="womanDay26Woman1_1">
                    <img src="assets/images/womanDay26/womanDay26Woman1_1.png" id="womanDay26Woman1_1" alt="">
                </picture>
                <picture id="womanDay26Woman1_2">
                    <img src="assets/images/womanDay26/womanDay26Woman1_2.png" id="womanDay26Woman1_2" alt="">
                </picture>
                <picture id="womanDay26Woman1_3">
                    <img src="assets/images/womanDay26/womanDay26Woman1_3.png" id="womanDay26Woman1_3" alt="">
                </picture>
                <picture id="womanDay26Woman1_4">
                    <img src="assets/images/womanDay26/womanDay26Woman1_4.png" id="womanDay26Woman1_4" alt="">
                </picture>
                <picture id="womanDay26Woman1_5">
                    <img src="assets/images/womanDay26/womanDay26Woman1_5.png" id="womanDay26Woman1_5" alt="">
                </picture>
            </div>
            <div id="womanDay26Woman2">
                <picture id="womanDay26Woman2_1">
                    <img src="assets/images/womanDay26/womanDay26Woman2_1.png" id="womanDay26Woman2_1" alt="">
                </picture>
                <picture id="womanDay26Woman2_2">
                    <img src="assets/images/womanDay26/womanDay26Woman2_2.png" id="womanDay26Woman2_2" alt="">
                </picture>
                <picture id="womanDay26Woman2_3">
                    <img src="assets/images/womanDay26/womanDay26Woman3_5.png" id="womanDay26Woman2_3" alt="">
                </picture>
            </div>
            <div id="womanDay26Woman3">
                <picture id="womanDay26Woman3_1">
                    <img src="assets/images/womanDay26/womanDay26Woman3_1.png" id="womanDay26Woman3_1" alt="">
                </picture>
                <picture id="womanDay26Woman3_2">
                    <img src="assets/images/womanDay26/womanDay26Woman3_2.png" id="womanDay26Woman3_2" alt="">
                </picture>
                <picture id="womanDay26Woman3_3">
                    <img src="assets/images/womanDay26/womanDay26Woman3_3.png" id="womanDay26Woman3_3" alt="">
                </picture>
                <picture id="womanDay26Woman3_4">
                    <img src="assets/images/womanDay26/womanDay26Woman3_4.png" id="womanDay26Woman3_4" alt="">
                </picture>
                <picture id="womanDay26Woman3_5">
                    <img src="assets/images/womanDay26/womanDay26Woman2_3.png" id="womanDay26Woman3_5" alt="">
                </picture>
            </div>
            <div id="womanDay26Woman4">
                <picture id="womanDay26Woman4_1">
                    <img src="assets/images/womanDay26/womanDay26Woman4_1.png" id="womanDay26Woman4_1" alt="">
                </picture>
                <picture id="womanDay26Woman4_2">
                    <img src="assets/images/womanDay26/womanDay26Woman4_2.png" id="womanDay26Woman4_2" alt="">
                </picture>
                <picture id="womanDay26Woman4_3">
                    <img src="assets/images/womanDay26/womanDay26Woman4_3.png" id="womanDay26Woman4_3" alt="">
                </picture>
                <picture id="womanDay26Woman4_4">
                    <img src="assets/images/womanDay26/womanDay26Woman4_4.png" id="womanDay26Woman4_4" alt="">
                </picture>
                <picture id="womanDay26Woman4_5">
                    <img src="assets/images/womanDay26/womanDay26Woman4_5.png" id="womanDay26Woman4_5" alt="">
                </picture>
            </div>
        `;

        // Appends
        this.bodyBlock.appendChild(this.womanDay26);
        this.womanDay26.appendChild(this.container);
    }

    initAnimation() {
        const womanDay26 = document.getElementById("womanDay26"),
            womanDay26Back = document.getElementById("womanDay26Back"),
            womanDay26BackBottom = document.getElementById(
                "womanDay26BackBottom",
            ),
            womanDay26Slogan_1 = document.getElementById("womanDay26Slogan_1"),
            womanDay26Slogan_2 = document.getElementById("womanDay26Slogan_2"),
            womanDay26Slogan_3 = document.getElementById("womanDay26Slogan_3"),
            womanDay26Slogan_4 = document.getElementById("womanDay26Slogan_4"),
            womanDay26Woman1_1 = document.getElementById("womanDay26Woman1_1"),
            womanDay26Woman1_2 = document.getElementById("womanDay26Woman1_2"),
            womanDay26Woman1_3 = document.getElementById("womanDay26Woman1_3"),
            womanDay26Woman1_4 = document.getElementById("womanDay26Woman1_4"),
            womanDay26Woman1_5 = document.getElementById("womanDay26Woman1_5"),
            womanDay26Woman2_1 = document.getElementById("womanDay26Woman2_1"),
            womanDay26Woman2_2 = document.getElementById("womanDay26Woman2_2"),
            womanDay26Woman2_3 = document.getElementById("womanDay26Woman2_3"),
            womanDay26Woman3_1 = document.getElementById("womanDay26Woman3_1"),
            womanDay26Woman3_2 = document.getElementById("womanDay26Woman3_2"),
            womanDay26Woman3_3 = document.getElementById("womanDay26Woman3_3"),
            womanDay26Woman3_4 = document.getElementById("womanDay26Woman3_4"),
            womanDay26Woman3_5 = document.getElementById("womanDay26Woman3_5"),
            womanDay26Woman4_1 = document.getElementById("womanDay26Woman4_1"),
            womanDay26Woman4_2 = document.getElementById("womanDay26Woman4_2"),
            womanDay26Woman4_3 = document.getElementById("womanDay26Woman4_3"),
            womanDay26Woman4_4 = document.getElementById("womanDay26Woman4_4"),
            womanDay26Woman4_5 = document.getElementById("womanDay26Woman4_5");
        let tl = new gsap.timeline({
            // delay: 0.5,
            // onComplete: this.initHide(9),
        });

        tl.to(womanDay26, {
            duration: 0.3,
            delay: "1",
            autoAlpha: 1,
            zIndex: 9999,
            // easy: "elastic.in(1,0.3)"
        })
            .from([womanDay26Back, womanDay26BackBottom], {
                duration: 1,
                delay: "0.1",
                autoAlpha: 0,
            })
            .from(
                [
                    womanDay26Woman1_1,
                    womanDay26Woman1_2,
                    womanDay26Woman1_3,
                    womanDay26Woman1_4,
                    womanDay26Woman1_5,
                    womanDay26Woman2_1,
                    womanDay26Woman2_2,
                    womanDay26Woman2_3,
                    womanDay26Woman3_1,
                    womanDay26Woman3_2,
                    womanDay26Woman3_3,
                    womanDay26Woman3_4,
                    womanDay26Woman3_5,
                    womanDay26Woman4_1,
                    womanDay26Woman4_2,
                    womanDay26Woman4_3,
                    womanDay26Woman4_4,
                    womanDay26Woman4_5,
                ],
                {
                    duration: 0.3,
                    delay: "-0.5",
                    autoAlpha: 0,
                    y: "-15%",
                    stagger: 0.1,
                    // easy: 'bounce'
                },
            )
            .from(
                [
                    womanDay26Slogan_1,
                    womanDay26Slogan_2,
                    womanDay26Slogan_3,
                    womanDay26Slogan_4,
                ],
                {
                    duration: 1,
                    delay: "-1",
                    autoAlpha: 0,
                    y: "-30%",
                    stagger: 0.3,
                    // easy: 'bounce'
                },
            );
    }

    initHide(delay) {
        let tl = new gsap.timeline({
            delay: delay,
            onComplete: () => {
                setTimeout(() => {
                    this.bodyBlock.removeChild(this.womanDay26);
                }, 1000);
            },
        });

        tl.to(this.womanDay26, {
            autoAlpha: 0,
            duration: 0.6,
            delay: "-0.8",
            display: "none",
            zIndex: "-1",
            ease: "power1",
        });
    }

    initDev() {
        this.womanDay26.style.opacity = 1;
        this.womanDay26.style.visibility = "visible";
        this.womanDay26.style.zIndex = 9999;
    }
}

export { Event_08_03_26 };
