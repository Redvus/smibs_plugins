import { gsap } from "gsap";

class SnowmanGame {
    constructor() {
        this.currentPage = this.getCurrentPageNumber();
        this.gameState = this.loadGameState();
        this.initPage();
        // this.initSnowman();
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



