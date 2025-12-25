import { gsap } from "gsap";
import { GAME_CONFIG } from './utils/config.js'

class SnowmanGame {
    constructor() {
        this.initSnowmanNew();
        this.initDev();
    }

    initSnowman() {
        this.bodyBlock = document.body;
        this.snowmanContainer = document.createElement('div');
        this.bodyBlock.appendChild(this.snowmanContainer);
        this.snowmanContainer.id = 'snowman2026';
        this.snowmanContainer.classList = 'snowman-container';
        this.snowmanContainer.innerHTML = `
            <div class="snowman" id="snowman">
                <picture class="snowman__part" id="part-1">
                    <img src="/assets/games/snowman/images/snowman_1Circle.png">
                </picture>
                <picture class="snowman__part" id="part-2">
                    <img src="/assets/games/snowman/images/snowman_2Circle.png">
                </picture>
                <picture class="snowman__part" id="part-3">
                    <img src="/assets/games/snowman/images/snowman_3Circle.png">
                </picture>
                <picture class="snowman__part" id="part-4">
                    <img src="/assets/games/snowman/images/snowman_bucket.png">
                </picture>
                <picture class="snowman__part" id="part-5">
                    <img src="/assets/games/snowman/images/snowman_scurf.png">
                </picture>
                <picture class="snowman__part" id="part-6">
                    <img src="/assets/games/snowman/images/snowman_hands.png">
                </picture>
                <picture class="snowman__part" id="part-7">
                    <img src="/assets/games/snowman/images/snowman_mittens.png">
                </picture>
                <picture class="snowman__part" id="part-8">
                    <img src="/assets/games/snowman/images/snowman_broomstick.png">
                </picture>
                <picture class="snowman__part" id="part-9">
                    <img src="/assets/games/snowman/images/snowman_face.png">
                </picture>
                <picture class="snowman__part" id="part-10">
                    <img src="/assets/games/snowman/images/snowman_nose.png">
                </picture>
            </div>
        `;
    }

    initSnowmanNew() {
        this.bodyBlock = document.body;
        this.snowmanContainer = document.createElement('div');
        this.bodyBlock.appendChild(this.snowmanContainer);
        this.snowmanContainer.id = 'snowman2026';
        this.snowmanContainer.classList = 'snowman';

        this.snowmanSnowdrift = document.createElement('div');
        this.snowmanSnowdrift.id = 'snowmanSnowdrift';
        this.snowmanSnowdrift.innerHTML = `
            <picture>
                <img src="/assets/games/snowman/images/snowman_snowdrift.png">
            </picture>
        `;

        let html = '<div class="snowman__block" id="snowman">'
        GAME_CONFIG.SNOWMAN_PARTS.forEach(part => {
            // const hasPart = this.gameState.collectedParts.includes(part.id)
            html += `
                <picture class="snowman__part" id="${part.id}">
                    <img src="/assets/games/snowman/images/${part.image}">
                </picture>
            `
        })
        html += '</div>'
        this.snowmanContainer.innerHTML = html;

        this.snowmanTitle = document.createElement('div');
        this.snowmanTitle.classList = 'snowman__titles';

        this.snowmanTitle_1 = document.createElement('div');
        this.snowmanTitle_2 = document.createElement('div');

        let title_1 = '<div class="snowman__title snowman__title--1" id="snowmanTitle1">'
        GAME_CONFIG.SNOWMAN_TITLE_1.forEach(part => {
            title_1 += `
                <picture class="snowman__title_part" id="${part.id}">
                    <img src="/assets/games/snowman/images/titles/${part.image}.png">
                </picture>
            `
        })
        title_1 += '</div>'

        let title_2 = '<div class="snowman__title snowman__title--1" id="snowmanTitle1">'
        GAME_CONFIG.SNOWMAN_TITLE_2.forEach(part => {
            title_2 += `
                <picture class="snowman__title_part" id="${part.id}">
                    <img src="/assets/games/snowman/images/titles/${part.image}.png">
                </picture>
            `
        })
        title_2 += '</div>'

        this.snowmanContainer.appendChild(this.snowmanSnowdrift);
        this.snowmanContainer.appendChild(this.snowmanTitle);
        this.snowmanTitle.innerHTML = ( title_1 + title_2 );
    }

    initAnimation() {
        const
            anniversary2026 = document.getElementById("anniversary2026"),
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
                delay: "-0.6",
                autoAlpha: 0,
                top: "-=20",
            })
        ;
    }

    initDev() {
        this.snowmanContainer.style.opacity = 1;
        this.snowmanContainer.style.visibility = "visible";
        this.snowmanContainer.style.zIndex = 9999;
        this.bodyBlock.style.overflow = "hidden";

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

export { SnowmanGame };