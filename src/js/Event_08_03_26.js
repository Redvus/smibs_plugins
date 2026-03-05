import { gsap } from "gsap";

class Event_08_03_26 {
    constructor() {
        this.initLayout();
        this.initAnimation();
        // this.initDev();
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
				<img src="assets/images/womanDay26/womanDay26Back.jpg" alt="">
			</picture>
            <picture id="womanDay26Baloon">
				<img src="assets/images/womanDay26/womanDay26Baloon_2.png" alt="">
			</picture>
		`;

        this.container.innerHTML = `
            <div id="womanDay26Slogan">
                <picture id="womanDay26Slogan_1">
                    <img src="assets/images/womanDay26/womanDay26Slogan_1.svg" id="womanDay26Slogan_1" alt="">
                </picture>
                <picture id="womanDay26Slogan_2">
                    <img src="assets/images/womanDay26/womanDay26Slogan_2.svg" id="womanDay26Slogan_2" alt="">
                </picture>
                <picture id="womanDay26Slogan_3">
                    <img src="assets/images/womanDay26/womanDay26Slogan_3.svg" id="womanDay26Slogan_3" alt="">
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
            womanDay26Baloon = document.getElementById("womanDay26Baloon"),
            womanDay26Slogan_1 = document.getElementById("womanDay26Slogan_1"),
            womanDay26Slogan_2 = document.getElementById("womanDay26Slogan_2"),
            womanDay26Slogan_3 = document.getElementById("womanDay26Slogan_3");
        let tl = new gsap.timeline({
            delay: 0.5,
            onComplete: this.initHide(11),
        });

        tl.to(womanDay26, {
            duration: 0.3,
            delay: "1",
            autoAlpha: 1,
            zIndex: 9999,
            // easy: "elastic.in(1,0.3)"
        })
            .from([womanDay26Back], {
                duration: 0.8,
                delay: "0",
                autoAlpha: 0,
            })
            .from(womanDay26Baloon, {
                duration: 6,
                delay: "-0.2",
                // autoAlpha: 0,
                x: "100vmin",
                scale: 1.5,
                // easy: "bounce",
            })
            .from(
                [womanDay26Slogan_1, womanDay26Slogan_2, womanDay26Slogan_3],
                {
                    duration: 1,
                    delay: "-3",
                    autoAlpha: 0,
                    // y: "10%",
                    stagger: 0.3,
                    // easy: "power2",
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
