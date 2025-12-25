import { gsap } from "gsap";

class SnowmanGame {
    constructor() {
        this.initSnowman();
    }

    initSnowman() {
        this.bodyBlock = document.body;
        this.snowmanContainer = document.createElement('div');
        this.bodyBlock.appendChild(this.snowmanContainer);
        // this.snowmanContainer.id = 'snowman2026';
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
}

export { SnowmanGame };