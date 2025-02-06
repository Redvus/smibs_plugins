import '/scss/main.scss';
import { Anniversary2025 } from "./Anniversary2025";
import {BannerTop} from "./BannerTop.js";

class Plugins {
    constructor() {
        // new Anniversary2025();
        new BannerTop();
    }
}

export { Plugins }