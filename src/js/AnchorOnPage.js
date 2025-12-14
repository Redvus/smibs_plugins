import { gsap } from "gsap";
import { PageContent } from './PageContent'

class AnchorOnPage {
    constructor(parameters) {
        this.initLayout();
        this.initLayoutPage();
        this.initAnchorBlock();
        this.initAnimation();

        if (import.meta.env.DEV) {
            new PageContent();
        }
        this.initSelectAnchor();
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

    initAnchorBlock() {
        this.anchorDayBlock = document.createElement('ul');
        this.anchorDayBlock.className = 'anchor-day-block';
        this.anchorDayCount = 18;

        for (let i = 0; i < this.anchorDayCount; i++) {
            const anchorDayLink = document.createElement('li');
            anchorDayLink.className = 'anchor-day-block__item';

            anchorDayLink.innerHTML = `<a href="#anchorDay_${i}" class="nav-link">${this.anchorDayNum[i]}</a>`;
            this.anchorDayBlock.appendChild(anchorDayLink);
        }

        this.mainContent.appendChild(this.anchorDayBlock);
    }

    initAnimation() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;

                // Smooth scroll to target
                if (document.body.clientWidth > 576 || screen.width > 576) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }

                // Update URL without jumping
                history.pushState(null, null, targetId);
            });
        });
    }

    initSelectAnchor() {
        const sections = document.querySelectorAll('.section__anchor');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (document.body.clientWidth > 576 || screen.width > 576) {
                    if (pageYOffset >= sectionTop - 10) {
                        current = section.getAttribute('id');
                    }
                } else {
                    if (pageYOffset >= sectionTop - 50) {
                        current = section.getAttribute('id');
                    }
                }

            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

export { AnchorOnPage };
