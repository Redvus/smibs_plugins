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
            this.anchorDay_6
        ];

        this.anchorDayNum = ['03 / 01', '04 / 01', '05 / 01', '06 / 01', '08 / 01', '09 / 01', '11 / 01'];
    }

    initAnchorBlock() {
        this.anchorDayBlock = document.createElement('ul');
        this.anchorDayBlock.className = 'anchor-day-block';
        this.anchorDayCount = 7;

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
                        top: targetElement.offsetTop + 100,
                        behavior: 'smooth'
                    });
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop + 170,
                        behavior: 'smooth'
                    });
                }

                // Update URL without jumping
                // history.pushState(null, null, targetId);
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
                    if (pageYOffset >= sectionTop + 100) {
                        current = section.getAttribute('id');
                    }
                } else {
                    if (pageYOffset >= sectionTop + 170) {
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
