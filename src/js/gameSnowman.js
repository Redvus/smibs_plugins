import { gsap } from "gsap";

class GameSnowman {
    constructor(parameters) {
        this.initLayout();
        // this.initAnimation();

        // this.initDev();
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.anniversaryDay = document.createElement("div");

        this.anniversaryDay.id = "anniversary2026";
        this.anniversaryDay.className = "anniversary anniversary--2026";
        this.bodyBlock.appendChild(this.anniversaryDay);

        this.anniversaryDay.innerHTML = `

		`;
    }

    initAnimation() {
        //
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

export { GameSnowman };
