class BannerTop {

    constructor() {
        this.initLayout();
        // this.initDev();
        // this.initAnim();
    }

    initLayout() {
        this.mainContentInside = document.querySelector('.main-content__inside');
        this.mainContentTop = document.createElement('div');
        this.mainContentTop.className = 'main-content__top';

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
        this.mainContentInside.insertBefore(this.mainContentTop, this.mainContentInside.firstChild);
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

    initDev() {
        this.bannerTopImg = document.createElement('picture');
        this.bannerTopImg.id = 'bannerTopImg';
        this.bannerTopImg.innerHTML = `
            <img src="assets/images/80victory/bannerTopImg.jpg">
        `;
        this.mainContentTop.appendChild(this.bannerTopImg);
    }

    initAnim() {

    }
}

export { BannerTop }