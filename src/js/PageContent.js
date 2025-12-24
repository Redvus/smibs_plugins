class PageContent {

    constructor() {
        this.initPageContent();
    }

    initPageContent() {
        this.mainContentInside = document.querySelector('.main-content__inside');
        this.mainContentInside.innerHTML = `
        <div class="game-container">
            <div class="header">
                <h1>❄️ Добро пожаловать в игру «Собери снеговика»! ❄️</h1>
                <p class="subtitle">Путешествуйте по 10 зимним локациям и отвечайте на вопросы!</p>
            </div>

            <div class="progress-bar">
                <div class="progress" id="progress"></div>
            </div>

            <div class="snowman-container" id="snowmanContainer">
                <!-- Снеговик будет здесь -->
            </div>

            <div class="page-content">
                <div class="instructions">
                    <h3>🎮 Как играть:</h3>
                    <ol style="text-align: left; max-width: 600px; margin: 20px auto;">
                        <li>Нажмите "Начать игру" для старта</li>
                        <li>На каждой странице вас ждет зимняя локация</li>
                        <li>Нажмите кнопку "Ответить на вопрос" для открытия модального окна</li>
                        <li>Выберите правильный ответ, чтобы получить часть снеговика</li>
                        <li>На одной из страниц спрятана бонусная кнопка 🎁</li>
                        <li>Найдите ее для получения дополнительной части снеговика</li>
                        <li>Прогресс автоматически сохраняется</li>
                    </ol>
                </div>

                <div style="margin: 40px 0;">
                    <a href="page1.html" class="show-question-btn" style="text-decoration: none;">
                        🎮 Начать игру!
                    </a>

                    <div style="margin-top: 20px;">
                        <button class="btn" onclick="resetGame()"
                                style="background: #f56565; color: white; margin: 10px;">
                            🔄 Сбросить игру
                        </button>
                    </div>
                </div>

                <div id="continueGame" style="display: none;">
                    <h3>Продолжить игру:</h3>
                    <div id="continueButtons"></div>
                </div>
            </div>
        </div>
        `;
    }
}

export {PageContent};