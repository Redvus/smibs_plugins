// import '/main.css';

import '/scss/main.scss';
import { Anniversary2025 } from "./Anniversary2025";
import {BannerTop} from "./BannerTop.js";
import {Page80Event} from "./Page80Event.js";

class Plugins {
    constructor() {
        // this.initLayout();
        // new Anniversary2025();
        // new BannerTop();
        new Page80Event();
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