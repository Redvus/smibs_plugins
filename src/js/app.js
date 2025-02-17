import '/scss/main.scss';
import '/main.css';
import { Anniversary2025 } from "./Anniversary2025";
import {BannerTop} from "./BannerTop.js";
import {Page80Event} from "./Page80Event.js";


class Plugins {
    constructor() {
        // new Anniversary2025();
        // new BannerTop();
        new Page80Event();
    }
}

export { Plugins }