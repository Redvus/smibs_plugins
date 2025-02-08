import { gsap } from "gsap";

class BannerTop {

    constructor() {
        this.initLayout();
        if (document.body.clientWidth > 767 || screen.width > 767) {
            this.initAnim();
        }

        if (document.body.clientWidth < 767 || screen.width < 767) {
            this.initMobile();
            this.initAnimMobile();
        }

        // this.initDev();
    }

    initLayout() {
        // this.mainContentInside = document.querySelector('.main-content__inside');
        // this.mainContentTop = document.createElement('div');
        // this.mainContentTop.className = 'main-content__top';
        this.mainContentTop = document.querySelector('.main-content__top');

        this.bannerTop = document.createElement('div');
        this.bannerTop.id = 'bannerTop';

        // Block Years
        this.bannerTopYears = document.createElement('div');
        this.bannerTopYears.id = 'bannerTopYears';

        this.bannerTop1945 = document.createElement('picture');
        this.bannerTop2025 = document.createElement('picture');
        this.bannerTopDefis = document.createElement('picture');
        this.bannerTop1945.id = 'bannerTop1945';
        this.bannerTop2025.id = 'bannerTop2025';
        this.bannerTopDefis.id = 'bannerTopDefis';

        this.bannerTop1945.innerHTML = `
            <img src="assets/images/80victory/bannerTop1945.svg">
        `;

        this.bannerTopDefis.innerHTML = `
            <img src="assets/images/80victory/bannerTopDefis.svg">
        `;

        this.bannerTop2025.innerHTML = `
            <img src="assets/images/80victory/bannerTop2025.svg">
        `;

        // Block Center
        this.bannerTopCenter = document.createElement('div');
        this.bannerTopCenter.id = 'bannerTopCenter';

        this.bannerTop80 = document.createElement('picture');
        this.bannerTopVictory = document.createElement('picture');
        this.bannerTop80.id = 'bannerTop80';
        this.bannerTopVictory.id = 'bannerTopVictory';

        this.bannerTop80.innerHTML = `
            <img src="assets/images/80victory/bannerTop80.svg">
        `;

        this.bannerTopVictory.innerHTML = `
            <img src="assets/images/80victory/bannerTopVictory.svg">
        `;

        // Block Right
        this.bannerTopRight = document.createElement('picture');
        this.bannerTopRight.id = 'bannerTopRight';
        this.bannerTopRight.innerHTML = `
            <img src="assets/images/80victory/bannerTopRight.svg">
        `;

        this.bannerTopLenta = document.createElement('picture');
        this.bannerTopLenta.id = 'bannerTopLenta';
        this.bannerTopLenta.innerHTML = `
            <img src="assets/images/80victory/bannerTopLenta.png">
        `;

        // Slogan Right
        this.bannerTopSlogan = document.createElement('div');
        this.bannerTopSlogan.id = 'bannerTopSlogan';

        this.bannerTopSloganTop = document.createElement('picture');
        this.bannerTopSloganTop.id = 'bannerTopSloganTop';
        this.bannerTopSloganTop.innerHTML = `
            <img src="assets/images/80victory/bannerTopSloganTop.svg">
        `;

        this.bannerTopSloganBottom = document.createElement('picture');
        this.bannerTopSloganBottom.id = 'bannerTopSloganBottom';
        this.bannerTopSloganBottom.innerHTML = `
            <img src="assets/images/80victory/bannerTopSloganBottom.svg">
        `;

        // Appends
        // this.mainContentInside.insertBefore(this.mainContentTop, this.mainContentInside.firstChild);
        this.mainContentTop.appendChild(this.bannerTop);
        this.bannerTop.appendChild(this.bannerTopRight);
        this.bannerTop.appendChild(this.bannerTopLenta);
        this.bannerTop.appendChild(this.bannerTopSlogan);
        this.bannerTopSlogan.appendChild(this.bannerTopSloganTop);
        this.bannerTopSlogan.appendChild(this.bannerTopSloganBottom);
        this.bannerTop.appendChild(this.bannerTopYears);
        this.bannerTopYears.appendChild(this.bannerTop1945);
        this.bannerTopYears.appendChild(this.bannerTopDefis);
        this.bannerTopYears.appendChild(this.bannerTop2025);
        this.bannerTop.appendChild(this.bannerTopCenter);
        this.bannerTopCenter.appendChild(this.bannerTop80);
        this.bannerTopCenter.appendChild(this.bannerTopVictory);
    }

    initAnim() {
        let tl = gsap.timeline({
            delay: 0.6
        });

        tl
            .from(this.bannerTop, {
                duration: 1,
                autoAlpha: 0
            })
            .from([this.bannerTopLenta, this.bannerTopRight], {
                delay: -0.6,
                duration: 0.6,
                autoAlpha: 0,
                stagger: 0.2
            })
            .from([this.bannerTopSloganTop, this.bannerTopSloganBottom], {
                delay: -0.4,
                duration: 0.3,
                x: '7%',
                autoAlpha: 0,
                stagger: 0.2
            })
            .from([this.bannerTop2025, this.bannerTopDefis, this.bannerTop1945], {
                delay: -0.2,
                duration: 0.3,
                x: '-10%',
                autoAlpha: 0,
                stagger: 0.2
            })
            .from([this.bannerTop80, this.bannerTopVictory], {
                delay: -0.2,
                duration: 0.3,
                x: '10%',
                autoAlpha: 0,
                stagger: 0.2
            })
        ;
    }

    initMobile() {
        this.bannerTop1945M = document.createElement('picture');
        this.bannerTop2025M = document.createElement('picture');
        this.bannerTop1945M.id = 'bannerTop1945M';
        this.bannerTop2025M.id = 'bannerTop2025M';

        this.bannerTop1945M.innerHTML = `
            <img src="assets/images/80victory/bannerTop1945M.svg">
        `;

        this.bannerTop2025M.innerHTML = `
            <img src="assets/images/80victory/bannerTop2025M.svg">
        `;

        this.bannerTop.appendChild(this.bannerTop1945M);
        this.bannerTop.appendChild(this.bannerTop2025M);
    }

    initAnimMobile() {
        let tl = gsap.timeline({
            delay: 0.6
        });

        tl
            .from(this.bannerTop, {
                duration: 1,
                autoAlpha: 0
            })
            .from(this.bannerTop1945M, {
                delay: -0.5,
                duration: 0.6,
                x: '-10%',
                autoAlpha: 0
            })
            .from(this.bannerTop2025M, {
                delay: -0.5,
                duration: 0.6,
                x: '10%',
                autoAlpha: 0
            })
        ;
    }

    initDev() {
        this.bannerTopImg = document.createElement('picture');
        this.bannerTopImg.id = 'bannerTopImg';
        this.bannerTopImg.innerHTML = `
            <img src="assets/images/80victory/bannerTopM.jpg">
        `;
        this.mainContentTop.appendChild(this.bannerTopImg);
    }
}

export { BannerTop }