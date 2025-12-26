import { gsap } from "gsap";
import { GAME_CONFIG } from './utils/config.js'
import { Snowfall } from './components/Snowfall.js';

class SnowmanGame {
    constructor() {
        this.initSnowman();

        const snowmanLoad = document.getElementById('snowmanLoad');
        if (snowmanLoad) {
            snowmanLoad.addEventListener('click', () => {
                this.initAnimation();
            });
        }

        // this.initDev();
    }

    initSnowman() {
        this.bodyBlock = document.body;
        this.snowmanContainer = document.createElement('div');
        this.snowmanContainer.id = 'snowman2026';
        this.snowmanContainer.classList = 'snowman';

        this.snowmanSnowdrift = document.createElement('div');
        this.snowmanSnowdrift.id = 'snowmanSnowdrift';
        this.snowmanSnowdrift.innerHTML = `
            <picture>
                <img src="/assets/games/snowman/images/snowman_snowdrift.webp">
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

        this.bodyBlock.appendChild(this.snowmanContainer);
        this.snowmanContainer.appendChild(this.snowmanSnowdrift);
        this.snowmanContainer.appendChild(this.snowmanTitle);
        this.snowmanTitle.innerHTML = ( title_1 + title_2 );
    }

    initAnimation() {
        const
            snowman2026 = document.getElementById("snowman2026"),
            snowmanParts = [...snowman2026.querySelectorAll(".snowman__part")],
            snowmanTitleParts = [...snowman2026.querySelectorAll(".snowman__title_part")]
        ;

        let tl = new gsap.timeline({
            delay: 0,
            onStart: () => {
                // this.bodyBlock.style.overflow = "hidden";
                // setTimeout(() => {
                //     new Snowfall();
                // }, 700);
            },
            onComplete: this.initHide(7),
        });

        tl
            .to(snowman2026, {
                duration: 0.3,
                delay: "0.3",
                autoAlpha: 1,
                zIndex: 9999,
                // easy: "elastic.in(1,0.3)"
            })
            .from(snowmanParts, {
                duration: 1,
                delay: "0.1",
                autoAlpha: 0,
                stagger: 0.2,
                y: "-=10",
                ease: "elastic.out(1, 0.5)",
            })
            .from(snowmanTitleParts, {
                duration: 1,
                delay: "-1.3",
                autoAlpha: 0,
                stagger: 0.2,
                y: "-=10",
                ease: "elastic.out(1, 0.5)",
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
        const snowfallCanvas = document.getElementById('snowfallCanvas');

        let tl = new gsap.timeline({
            delay: delay,
            onComplete: () => {
                // this.bodyBlock.style.overflow = "auto";
                // this.bodyBlock.removeChild(snowfallCanvas);
                this.bodyBlock.removeChild(this.snowmanContainer);
            },
        });

        tl.to(this.snowmanContainer, {
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