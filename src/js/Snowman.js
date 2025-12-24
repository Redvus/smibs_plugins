import { gsap } from "gsap";

// Конфигурация игры
const GAME_CONFIG = {
    totalPages: 10,
    snowmanParts: ['bottom', 'middle', 'top', 'hat', 'scarf', 'leftArm', 'rightArm', 'leftEye', 'rightEye', 'nose'],
    questions: {
        1: {
            text: "Какой химический элемент обозначается символом 'H'?",
            options: ["Гелий", "Водород", "Кислород", "Азот"],
            correct: 1,
            part: 'bottom'
        },
        2: {
            text: "Сколько планет в Солнечной системе?",
            options: ["8", "9", "7", "10"],
            correct: 0,
            part: 'middle'
        },
        3: {
            text: "Как называется самая длинная река в мире?",
            options: ["Амазонка", "Нил", "Янцзы", "Миссисипи"],
            correct: 0,
            part: 'top'
        },
        4: {
            text: "Кто написал роман 'Война и мир'?",
            options: ["Фёдор Достоевский", "Лев Толстой", "Александр Пушкин", "Антон Чехов"],
            correct: 1,
            part: 'hat'
        },
        5: {
            text: "Какой газ преобладает в атмосфере Земли?",
            options: ["Кислород", "Углекислый газ", "Азот", "Водород"],
            correct: 2,
            part: 'scarf'
        },
        6: {
            text: "Столица Австралии?",
            options: ["Сидней", "Мельбурн", "Канберра", "Брисбен"],
            correct: 2,
            part: 'leftArm'
        },
        7: {
            text: "Сколько дней в високосном году?",
            options: ["365", "366", "364", "367"],
            correct: 1,
            part: 'rightArm'
        },
        8: {
            text: "Кто открыл закон всемирного тяготения?",
            options: ["Альберт Эйнштейн", "Исаак Ньютон", "Галилео Галилей", "Николай Коперник"],
            correct: 1,
            part: 'leftEye'
        },
        9: {
            text: "Какая планета известна своими кольцами?",
            options: ["Юпитер", "Сатурн", "Уран", "Нептун"],
            correct: 1,
            part: 'rightEye'
        },
        10: {
            text: "Как называется самая высокая гора в мире?",
            options: ["Килиманджаро", "Эверест", "Мак-Кинли", "Аконкагуа"],
            correct: 1,
            part: 'nose'
        }
    },
    pageTitles: {
        1: "Зимний лес",
        2: "Снежная равнина",
        3: "Горная вершина",
        4: "Северное сияние",
        5: "Ледяная пещера",
        6: "Замёрзшее озеро",
        7: "Полярная ночь",
        8: "Арктический ветер",
        9: "Снежный шторм",
        10: "Ледяной дворец"
    },
    pageDescriptions: {
        1: "Вы находитесь в зимнем лесу. Вокруг вас сосны, покрытые снегом, и тишина.",
        2: "Перед вами бескрайняя снежная равнина. Снег блестит на солнце.",
        3: "Вы поднялись на горную вершину. Отсюда видно всю округу.",
        4: "Над вами танцует северное сияние. Это завораживающее зрелище!",
        5: "Вы вошли в ледяную пещеру. Стены сверкают как бриллианты.",
        6: "Перед вами замёрзшее озеро. Лёд такой прозрачный, что видно дно.",
        7: "Наступила полярная ночь. Небо усыпано звёздами.",
        8: "Дует арктический ветер. Он пронизывает до самых костей.",
        9: "Начался снежный шторм. Видимость почти нулевая.",
        10: "Вы обнаружили ледяной дворец. Он прекрасен и величественен."
    }
};

class SnowmanGame {
    constructor() {
        this.currentPage = this.getCurrentPageNumber();
        this.gameState = this.loadGameState();
        this.initPage();
        // this.initSnowman();
    }

    initSnowman() {
        this.bodyBlock = document.body;
        this.snowmanContainer = document.createElement('div');
        this.bodyBlock.appendChild(this.snowmanContainer);
        // this.snowmanContainer.id = 'snowman2026';
        this.snowmanContainer.classList = 'snowman-container';
        this.snowmanContainer.innerHTML = `
            <div class="snowman" id="snowman">
                <picture class="snowman__part" id="part-1">
                    <img src="/assets/games/snowman/images/snowman_1Circle.png">
                </picture>
                <picture class="snowman__part" id="part-2">
                    <img src="/assets/games/snowman/images/snowman_2Circle.png">
                </picture>
                <picture class="snowman__part" id="part-3">
                    <img src="/assets/games/snowman/images/snowman_3Circle.png">
                </picture>
                <picture class="snowman__part" id="part-4">
                    <img src="/assets/games/snowman/images/snowman_bucket.png">
                </picture>
                <picture class="snowman__part" id="part-5">
                    <img src="/assets/games/snowman/images/snowman_scurf.png">
                </picture>
                <picture class="snowman__part" id="part-6">
                    <img src="/assets/games/snowman/images/snowman_hands.png">
                </picture>
                <picture class="snowman__part" id="part-7">
                    <img src="/assets/games/snowman/images/snowman_mittens.png">
                </picture>
                <picture class="snowman__part" id="part-8">
                    <img src="/assets/games/snowman/images/snowman_broomstick.png">
                </picture>
                <picture class="snowman__part" id="part-9">
                    <img src="/assets/games/snowman/images/snowman_face.png">
                </picture>
                <picture class="snowman__part" id="part-10">
                    <img src="/assets/games/snowman/images/snowman_nose.png">
                </picture>
            </div>
        `;
    }

    getCurrentPageNumber() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();

        if (filename === 'index.html' || filename === '') return 0;
        if (filename === 'result.html') return 'result';

        const match = filename.match(/page(\d+)\.html/);
        return match ? parseInt(match[1]) : 0;
    }

    loadGameState() {
        let saved = localStorage.getItem('snowmanGame');

        if (!saved) {
            return this.resetGameState();
        }

        const state = JSON.parse(saved);

        // Если игра началась, но нет случайной кнопки - создаем
        if (state.gameStarted && !state.randomButtonPage) {
            state.randomButtonPage = Math.floor(Math.random() * 10) + 1;
            this.saveGameState(state);
        }

        return state;
    }

    resetGameState() {
        const initialState = {
            currentPage: 1,
            score: 0,
            answers: {},
            collectedParts: [],
            randomButtonPage: Math.floor(Math.random() * 10) + 1,
            randomButtonFound: false,
            gameStarted: true,
            lastVisit: new Date().toISOString()
        };

        this.saveGameState(initialState);
        return initialState;
    }

    saveGameState(state = this.gameState) {
        localStorage.setItem('snowmanGame', JSON.stringify(state));
    }

    initPage() {
        const pageNum = this.currentPage;

        if (pageNum === 0) {
            this.setupMainPage();
            return;
        }

        if (pageNum === 'result') {
            this.showResult();
            return;
        }

        this.setupGamePage(pageNum);
    }

    setupMainPage() {
        // Главная страница уже имеет свою структуру
        this.updateSnowmanDisplay();
    }

    setupGamePage(pageNum) {
        // Устанавливаем заголовок страницы
        document.title = `${GAME_CONFIG.pageTitles[pageNum]} - Собери снеговика`;

        // Обновляем состояние
        this.gameState.currentPage = pageNum;
        this.saveGameState();

        // Создаем содержимое страницы
        this.createPageContent(pageNum);

        // Создаем снеговика
        this.createSnowman();

        // Обновляем прогресс
        this.updateProgress();

        // Создаем случайную кнопку, если нужно
        if (pageNum === this.gameState.randomButtonPage && !this.gameState.randomButtonFound) {
            this.createRandomButton();
        }

        // Добавляем информацию о текущей странице
        this.addPageInfo();
    }

    createPageContent(pageNum) {
        const container = document.querySelector('.game-container') || document.body;

        const content = `
            <div class="header">
                <h1>❄️ ${GAME_CONFIG.pageTitles[pageNum]} ❄️</h1>
                <p class="subtitle">Страница ${pageNum} из 10</p>
            </div>

            <div class="progress-bar">
                <div class="progress" id="progress"></div>
            </div>

            <div class="snowman-container" id="snowmanContainer">
                <!-- Снеговик будет здесь -->
            </div>

            <div class="page-content">
                <p class="page-text">${GAME_CONFIG.pageDescriptions[pageNum]}</p>

                <button class="show-question-btn" onclick="game.showQuestionModal(${pageNum})">
                    ❓ Ответить на вопрос
                </button>

                <div class="buttons">
                    ${pageNum > 1 ?
                        `<a href="page${pageNum - 1}.html" class="btn prev-btn">← Предыдущая страница</a>` :
                        `<a href="index.html" class="btn prev-btn">← На главную</a>`
                    }

                    ${pageNum < 10 ?
                        `<a href="page${pageNum + 1}.html" class="btn next-btn">Следующая страница →</a>` :
                        `<a href="result.html" class="btn next-btn">Узнать результат →</a>`
                    }
                </div>

                <div class="score-display" id="scoreDisplay">
                    Правильных ответов: ${this.gameState.score} из 10
                </div>
            </div>
        `;

        if (container.classList.contains('game-container')) {
            container.innerHTML = content;
        } else {
            container.innerHTML = `<div class="game-container">${content}</div>`;
        }
    }

    addPageInfo() {
        const pageInfo = document.createElement('div');
        pageInfo.className = 'current-page-info';
        pageInfo.innerHTML = `Страница ${this.currentPage}/10`;
        document.body.appendChild(pageInfo);
    }

    createSnowman() {
        const container = document.getElementById('snowmanContainer');
        if (!container) return;

        // Позиции частей снеговика
        const positions = {
            'bottom': { top: '150px', emoji: '⛄', size: '80px' },
            'middle': { top: '90px', emoji: '⛄', size: '60px' },
            'top': { top: '40px', emoji: '⛄', size: '45px' },
            'hat': { top: '5px', emoji: '🎩', size: '40px' },
            'scarf': { top: '70px', emoji: '🧣', size: '30px' },
            'leftArm': { top: '100px', left: '35%', emoji: '↙️', size: '30px' },
            'rightArm': { top: '100px', right: '35%', emoji: '↘️', size: '30px' },
            'leftEye': { top: '55px', left: '45%', emoji: '⚫', size: '15px' },
            'rightEye': { top: '55px', right: '45%', emoji: '⚫', size: '15px' },
            'nose': { top: '65px', emoji: '🥕', size: '20px' }
        };

        container.innerHTML = '';

        GAME_CONFIG.snowmanParts.forEach(part => {
            const partDiv = document.createElement('div');
            partDiv.className = 'snowman-part';
            partDiv.id = `part-${part}`;
            partDiv.textContent = positions[part].emoji;

            partDiv.style.top = positions[part].top;
            partDiv.style.fontSize = positions[part].size;

            if (positions[part].left) partDiv.style.left = positions[part].left;
            if (positions[part].right) partDiv.style.right = positions[part].right;

            // Если часть собрана, показываем ее
            if (this.gameState.collectedParts.includes(part)) {
                partDiv.classList.add('visible');
            }

            container.appendChild(partDiv);
        });
    }

    updateSnowman() {
        GAME_CONFIG.snowmanParts.forEach(part => {
            const partElement = document.getElementById(`part-${part}`);
            if (partElement) {
                const isVisible = this.gameState.collectedParts.includes(part);
                partElement.classList.toggle('visible', isVisible);

                if (isVisible && !partElement.classList.contains('part-collected')) {
                    partElement.classList.add('part-collected');
                    setTimeout(() => {
                        partElement.classList.remove('part-collected');
                    }, 500);
                }
            }
        });

        // Обновляем счет
        const scoreDisplay = document.getElementById('scoreDisplay');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Правильных ответов: ${this.gameState.score} из 10`;
        }
    }

    updateSnowmanDisplay() {
        // Для главной страницы просто показываем базового снеговика
        const container = document.getElementById('snowmanContainer');
        if (container) {
            container.innerHTML = '<div style="font-size: 120px;">⛄</div>';
        }
    }

    createRandomButton() {
        const randomBtn = document.createElement('button');
        randomBtn.className = 'btn random-btn';
        randomBtn.textContent = '🎁 Найти бонус!';
        randomBtn.style.top = `${Math.random() * 400 + 100}px`;
        randomBtn.style.left = `${Math.random() * 300 + 100}px`;

        randomBtn.addEventListener('click', () => {
            this.collectRandomBonus();
            randomBtn.remove();
        });

        document.body.appendChild(randomBtn);
    }

    collectRandomBonus() {
        const missingParts = GAME_CONFIG.snowmanParts.filter(
            part => !this.gameState.collectedParts.includes(part)
        );

        if (missingParts.length > 0) {
            const randomPart = missingParts[Math.floor(Math.random() * missingParts.length)];
            this.gameState.collectedParts.push(randomPart);
            this.gameState.randomButtonFound = true;
            this.saveGameState();

            this.updateSnowman();

            // Показываем сообщение
            if (modal) {
                modal.close();
            }

            setTimeout(() => {
                alert(`🎁 Поздравляем! Вы нашли бонус и получили ${randomPart} снеговика!`);
            }, 500);
        }
    }

    updateProgress() {
        const progressElement = document.getElementById('progress');
        if (progressElement) {
            const answeredCount = Object.keys(this.gameState.answers || {}).length;
            const progress = (answeredCount / GAME_CONFIG.totalPages) * 100;
            progressElement.style.width = `${progress}%`;
        }
    }

    showQuestionModal(pageNum) {
        if (modal && GAME_CONFIG.questions[pageNum]) {
            const questionData = {
                number: pageNum,
                text: GAME_CONFIG.questions[pageNum].text,
                options: GAME_CONFIG.questions[pageNum].options
            };

            modal.show(questionData);
        }
    }

    selectAnswer(questionNum, answerIndex) {
        // Если уже ответили, игнорируем
        if (this.gameState.answers?.[questionNum] !== undefined) return;

        // Сохраняем ответ
        this.gameState.answers = this.gameState.answers || {};
        this.gameState.answers[questionNum] = answerIndex;

        // Проверяем правильность
        const isCorrect = answerIndex === GAME_CONFIG.questions[questionNum].correct;

        if (isCorrect) {
            this.gameState.score++;

            // Добавляем часть снеговика
            const part = GAME_CONFIG.questions[questionNum].part;
            if (!this.gameState.collectedParts.includes(part)) {
                this.gameState.collectedParts.push(part);
            }
        }

        // Сохраняем состояние
        this.saveGameState();

        // Обновляем отображение
        this.updateSnowman();

        // Показываем результат в модальном окне
        if (modal) {
            modal.showSavedAnswer(questionNum, answerIndex);
        }
    }

    showResult() {
        document.title = 'Результат - Собери снеговика';

        const container = document.querySelector('.game-container') || document.body;
        const score = this.gameState.score || 0;

        container.innerHTML = `
            <div class="header">
                <h1>❄️ Игра завершена! ❄️</h1>
            </div>

            <div class="snowman-container" id="snowmanContainer">
                <!-- Полный снеговик будет здесь -->
            </div>

            <div class="result">
                <h2>🎉 ${this.getResultTitle(score)} 🎉</h2>
                <p>${this.getResultMessage(score)}</p>
                <p style="font-size: 1.5em; margin: 20px 0;">
                    <strong>Ваш результат: ${score} из 10 правильных ответов</strong>
                </p>

                <div class="buttons">
                    <a href="index.html" class="btn prev-btn">На главную</a>
                    <button class="btn restart-btn" onclick="game.restartGame()">Играть снова</button>
                </div>
            </div>
        `;

        // Показываем полного снеговика
        this.showCompleteSnowman();

        // Очищаем игру
        localStorage.removeItem('snowmanGame');
    }

    getResultTitle(score) {
        if (score === 10) return 'Идеальный результат!';
        if (score >= 8) return 'Отлично!';
        if (score >= 6) return 'Хорошо!';
        return 'Попробуйте еще раз!';
    }

    getResultMessage(score) {
        if (score === 10) return 'Вы собрали снеговика целиком! Браво!';
        if (score >= 8) return 'Вы собрали почти всего снеговика! Отличная работа!';
        if (score >= 6) return 'Вы собрали больше половины снеговика! Хороший результат!';
        return 'Вы собрали часть снеговика. Попробуйте еще раз для лучшего результата!';
    }

    showCompleteSnowman() {
        const container = document.getElementById('snowmanContainer');
        if (!container) return;

        // Показываем анимированного снеговика
        container.innerHTML = `
            <div style="position: relative; height: 300px; width: 200px; margin: 0 auto;">
                ${GAME_CONFIG.snowmanParts.map((part, index) => `
                    <div class="snowman-part visible"
                         style="position: absolute; font-size: ${this.getPartSize(part)};
                                top: ${this.getPartPosition(part).top};
                                ${this.getPartPosition(part).left ? `left: ${this.getPartPosition(part).left};` : ''}
                                ${this.getPartPosition(part).right ? `right: ${this.getPartPosition(part).right};` : ''}
                                animation: appear ${index * 0.2 + 0.5}s ease forwards;">
                        ${this.getPartEmoji(part)}
                    </div>
                `).join('')}
            </div>
        `;
    }

    getPartSize(part) {
        const sizes = {
            'bottom': '80px', 'middle': '60px', 'top': '45px',
            'hat': '40px', 'scarf': '30px',
            'leftArm': '30px', 'rightArm': '30px',
            'leftEye': '15px', 'rightEye': '15px',
            'nose': '20px'
        };
        return sizes[part] || '30px';
    }

    getPartPosition(part) {
        const positions = {
            'bottom': { top: '150px' },
            'middle': { top: '90px' },
            'top': { top: '40px' },
            'hat': { top: '5px' },
            'scarf': { top: '70px' },
            'leftArm': { top: '100px', left: '35%' },
            'rightArm': { top: '100px', right: '35%' },
            'leftEye': { top: '55px', left: '45%' },
            'rightEye': { top: '55px', right: '45%' },
            'nose': { top: '65px' }
        };
        return positions[part] || { top: '0' };
    }

    getPartEmoji(part) {
        const emojis = {
            'bottom': '⛄', 'middle': '⛄', 'top': '⛄',
            'hat': '🎩', 'scarf': '🧣',
            'leftArm': '↙️', 'rightArm': '↘️',
            'leftEye': '⚫', 'rightEye': '⚫',
            'nose': '🥕'
        };
        return emojis[part] || '❓';
    }

    restartGame() {
        this.resetGameState();
        window.location.href = 'page1.html';
    }

    showQuestion(pageNum) {
        if (game) game.showQuestionModal(pageNum);
    }

    resetGame() {
        if (confirm('Вы уверены, что хотите сбросить игру? Весь прогресс будет потерян.')) {
            localStorage.removeItem('snowmanGame');
            alert('Игра сброшена! Нажмите "Начать игру" для старта.');
            window.location.href = 'index.html';
        }
    }
}

export { SnowmanGame };

// Инициализируем игру
let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new SnowmanGame();
});

// Глобальные функции



