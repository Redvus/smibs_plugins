import '/scss/main.scss';
import '/main.css';
import { RandomPlaceImage } from "./RandomPlaceImage.js";

class Plugins {
    constructor() {
        this.initLayout();
        new RandomPlaceImage(
            '/assets/projects/randomPlaceImage/images/personPushkin.jpg',
            'Уроки русской литературы',
            'https://smibs.ru/lessons-of-russian-literature.html')
        ;
    }

    initLayout() {
        this.body = document.body;
        this.wrapper = document.querySelector('.wrapper');

        this.sidebar = document.createElement('div');
        this.sidebar.className = 'sidebar';

        this.sidebarStatic = document.createElement('div');
        this.sidebarStatic.className = 'sidebar-static';

        this.header = document.createElement('div');
        this.header.className = 'header header--desktop';
        this.header.innerHTML = `
            <div class="header__nav">
                <div class="header__top"></div>
                <div class="header__bottom"></div>
            </div>
            <a href="javascript:void(0);" class="header__blind" id="blindButton">
<!--                <i class="fa fa-eye"></i>-->
<!--                <p>Контрастная версия</p>-->
            </a>
        `;

        this.mainContent = document.createElement('div');
        this.mainContent.className = 'main-content';

        this.mainContentInside = document.createElement('div');
        this.mainContentInside.className = 'main-content__inside';

        // this.footer = document.createElement('div');
        // this.footer.className = 'footer';
        // this.footerTopBlock = document.createElement('div');

        //Appends
        // this.body.appendChild(this.footer);
        this.wrapper.appendChild(this.sidebar);
        this.wrapper.appendChild(this.sidebarStatic);
        this.wrapper.appendChild(this.header);
        this.wrapper.appendChild(this.mainContent);
        this.mainContent.appendChild(this.mainContentInside);
    }
}

export { Plugins }