import { gsap } from "gsap";
import { PageContent } from './PageContent'

class AnchorOnPage {
    constructor(parameters) {
        this.initLayout();
        this.initLayoutPage();
        this.initAnhcorBlock();
        // this.initAnimation();

        // if (import.meta.env.DEV) {
            new PageContent();
        // }
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.mainContent = document.querySelector('.main-content');
        this.mainContentInside = document.querySelector('.main-content__inside');
    }

    initLayoutPage() {
        this.anchorDayArray = document.getElementById[
            this.anchorDay_0,
            this.anchorDay_1,
            this.anchorDay_2,
            this.anchorDay_3,
            this.anchorDay_4,
            this.anchorDay_5,
            this.anchorDay_6,
            this.anchorDay_7,
            this.anchorDay_8,
            this.anchorDay_9,
            this.anchorDay_10,
            this.anchorDay_11,
            this.anchorDay_12,
            this.anchorDay_13,
            this.anchorDay_14,
            this.anchorDay_15,
            this.anchorDay_16,
            this.anchorDay_17
        ];

        this.anchorDayNum = [17, 18, 21, 22, 23, 24, 25, 26, 28, 29, 3, 4, 5, 6, 8, 9, 10, 11];
    }

    initAnhcorBlock() {
        this.anchorDayBlock = document.createElement('ul');
        this.anchorDayBlock.className = 'anchor-day-block';
        this.anchorDayCount = 18;

        for (let i = 0; i < this.anchorDayCount; i++) {
            const anchorDayLink = document.createElement('li');
            anchorDayLink.className = 'anchor-day-block__item';

            anchorDayLink.innerHTML = `<a href="#anchorDay_${i}">${this.anchorDayNum[i]}</a>`;
            this.anchorDayBlock.appendChild(anchorDayLink);
        }

        this.mainContent.appendChild(this.anchorDayBlock);
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
}

export { AnchorOnPage };
