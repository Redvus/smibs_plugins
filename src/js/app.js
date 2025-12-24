if (import.meta.env.DEV) {
    // import("/main.css");
}
import "/scss/main.scss";
import { PageContent } from './PageContent.js';
import { SnowmanGame } from "./Snowman.js";
import { QuestionModal } from "./components/QuestionModal.js";

class Plugins {
    constructor() {
        if (import.meta.env.DEV) {
            // this.initLayout(); // Скрывать для build
            // new PageContent();
        }

        // new SnowmanGame();
        // new QuestionModal();
        // this.initGame();
    }

    initLayout() {
        this.body = document.body;
        this.wrapper = document.querySelector(".wrapper");

        this.sidebar = document.createElement("div");
        this.sidebar.className = "sidebar";

        this.sidebarStatic = document.createElement("div");
        this.sidebarStatic.className = "sidebar-static";

        this.header = document.createElement("div");
        this.header.className = "header header--desktop";
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

        this.mainContent = document.createElement("div");
        this.mainContent.className = "main-content";

        this.mainContentInside = document.createElement("div");
        this.mainContentInside.className = "main-content__inside";

        this.footer = document.createElement('div');
        this.footer.className = 'footer';
        this.footerTopBlock = document.createElement('div');

        //Appends
        this.body.appendChild(this.footer);
        this.wrapper.appendChild(this.sidebar);
        this.wrapper.appendChild(this.sidebarStatic);
        this.wrapper.appendChild(this.header);
        this.wrapper.appendChild(this.mainContent);
        this.mainContent.appendChild(this.mainContentInside);
    }

    initGame() {
        const savedGame = localStorage.getItem('snowmanGame');
        if (savedGame) {
            const gameState = JSON.parse(savedGame);
            if (gameState.gameStarted) {
                const continueDiv = document.getElementById('continueGame');
                const continueButtons = document.getElementById('continueButtons');

                continueDiv.style.display = 'block';

                // Кнопка для продолжения с текущей страницы
                const continueBtn = document.createElement('a');
                continueBtn.href = `page${gameState.currentPage}.html`;
                continueBtn.className = 'btn next-btn';
                continueBtn.textContent = `Продолжить со страницы ${gameState.currentPage}`;
                continueButtons.appendChild(continueBtn);

                // Кнопка для просмотра результата
                const answeredCount = Object.keys(gameState.answers || {}).length;
                if (answeredCount > 0) {
                    const resultBtn = document.createElement('a');
                    resultBtn.href = 'result.html';
                    resultBtn.className = 'btn';
                    resultBtn.style.background = '#ed8936';
                    resultBtn.style.marginLeft = '10px';
                    resultBtn.textContent = `Посмотреть результат (${gameState.score}/10)`;
                    continueButtons.appendChild(resultBtn);
                }
            }
        }
    }
}

export { Plugins };
