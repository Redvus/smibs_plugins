import "/scss/main.scss";

import { GAME_CONFIG } from './utils/config.js'
import { QuestionButton } from './components/QuestionButton.js'
import { Modal } from './components/QuestionModal.js'
import { Storage } from './components/Storage.js'
import { showNotification } from './utils/helpers.js'

class SnowmanGame {
    constructor() {
        this.storage = new Storage()
        this.modal = new Modal()
        this.questionButton = null
        this.currentPage = 'home' // Начинаем с главной

        // Загружаем состояние игры
        this.gameState = this.loadGameState()

        // Инициализируем историю браузера для кнопок "Назад/Вперед"
        this.initHistory()

        this.init()
    }

    initHistory() {
        // Обрабатываем нажатие кнопок браузера "Назад/Вперед"
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.page) {
                this.navigateTo(event.state.page, false) // false = не добавлять в историю
            } else {
                this.navigateTo('home', false)
            }
        })

        // Инициализируем начальное состояние истории
        if (!history.state || !history.state.page) {
            history.replaceState({ page: 'home' }, '', '/')
        }
    }

    loadGameState() {
        const saved = this.storage.get('snowmanGame')
        if (saved) {
            return JSON.parse(saved)
        }

        // Начальное состояние
        return {
            score: 0,
            answers: {},
            collectedParts: [],
            visitedPages: [],
            gameStarted: false
        }
    }

    saveGameState() {
        this.storage.set('snowmanGame', JSON.stringify(this.gameState))
    }

    async init() {
        // Парсим URL для определения начальной страницы
        this.parseUrl()

        // Инициализируем модальное окно
        this.modal.init()

        // Рендерим текущую страницу
        await this.renderPage()

        // Настраиваем обработчики событий
        this.setupEventListeners()

        // Показываем приветствие
        if (this.currentPage === 'home') {
            setTimeout(() => {
                showNotification('Добро пожаловать в игру "Собери снеговика"! ❄️', 'info')
            }, 500)
        }
    }

    parseUrl() {
        const url = new URL(window.location)

        // Проверяем hash (/#page1, /#result и т.д.)
        if (url.hash) {
            const hashMatch = url.hash.match(/#page(\d+)/)
            if (hashMatch) {
                this.currentPage = parseInt(hashMatch[1])
                return
            }

            if (url.hash === '#result') {
                this.currentPage = 'result'
                return
            }

            if (url.hash === '#home') {
                this.currentPage = 'home'
                return
            }
        }

        // Проверяем query параметры (?page=1)
        const pageParam = url.searchParams.get('page')
        if (pageParam && !isNaN(pageParam) && pageParam >= 1 && pageParam <= 10) {
            this.currentPage = parseInt(pageParam)
            return
        }

        // Если ничего не найдено, оставляем текущую страницу
    }

    async navigateTo(page, addToHistory = true) {
        // Сохраняем предыдущую страницу
        const prevPage = this.currentPage

        // Устанавливаем новую страницу
        this.currentPage = page

        // Обновляем URL без перезагрузки страницы
        this.updateUrl()

        // Добавляем в историю браузера
        if (addToHistory) {
            history.pushState({ page }, '', this.getPageUrl(page))
        }

        // Удаляем старую кнопку вопроса
        if (this.questionButton) {
            this.questionButton.remove()
            this.questionButton = null
        }

        // Рендерим новую страницу
        await this.renderPage()

        // Инициализируем кнопку вопроса для игровых страниц
        if (typeof this.currentPage === 'number') {
            await this.initQuestionButton()
        }

        // Прокручиваем наверх
        window.scrollTo(0, 0)

        // Запускаем анимацию перехода
        this.playPageTransition(prevPage, page)
    }

    updateUrl() {
        const url = new URL(window.location)

        // Очищаем старые параметры
        url.search = ''
        url.hash = ''

        // Добавляем параметры в зависимости от типа страницы
        if (this.currentPage === 'home') {
            url.pathname = '/'
        } else if (this.currentPage === 'result') {
            url.hash = '#result'
        } else if (typeof this.currentPage === 'number') {
            url.hash = `#page${this.currentPage}`
        }

        // Обновляем URL без перезагрузки
        history.replaceState({ page: this.currentPage }, '', url.toString())
    }

    getPageUrl(page) {
        if (page === 'home') return '/'
        if (page === 'result') return '/#result'
        if (typeof page === 'number') return `/#page${page}`
        return '/'
    }

    async renderPage() {
        const app = document.getElementById('app')
        if (!app) return

        // Показываем индикатор загрузки
        app.innerHTML = `
            <div class="page-transition">
                <div class="transition-loader">
                    <div class="snowflake">❄️</div>
                </div>
            </div>
        `

        // Даем время для анимации
        await this.delay(300)

        // Рендерим содержимое страницы
        let content = ''

        switch (this.currentPage) {
            case 'home':
                content = this.renderHomePage()
                break
            case 'result':
                content = this.renderResultPage()
                break
            default:
                if (typeof this.currentPage === 'number') {
                    content = await this.renderGamePage(this.currentPage)
                } else {
                    content = this.renderNotFoundPage()
                }
                break
        }

        // Обновляем содержимое
        app.innerHTML = content

        // Применяем тему страницы
        this.applyPageTheme()

        // Инициализируем компоненты страницы
        // this.initPageComponents()
    }

    async renderGamePage(pageNumber) {
        const pageConfig = GAME_CONFIG.PAGE_CONTENT[pageNumber]
        if (!pageConfig) {
            return this.renderNotFoundPage()
        }

        const hasAnswer = this.gameState.answers[pageNumber] !== undefined
        const isVisited = this.gameState.visitedPages.includes(pageNumber)

        // Добавляем страницу в посещенные
        if (!isVisited) {
            this.gameState.visitedPages.push(pageNumber)
            this.saveGameState()
        }

        return `
            <div class="game-page" data-page="${pageNumber}">
                <!-- Шапка игры -->
                <header class="game-header">
                    <div class="header-top">
                        <button class="back-btn" onclick="game.navigateTo('home')">
                            ← На главную
                        </button>
                        <div class="page-indicator">
                            <span class="page-number">${pageNumber}/10</span>
                            <span class="location-badge">${pageConfig.location}</span>
                        </div>
                    </div>

                    <h1 class="page-title">${pageConfig.title}</h1>
                    <p class="page-subtitle">${pageConfig.subtitle}</p>
                </header>

                <!-- Прогресс игры -->
                <div class="progress-section">
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(Object.keys(this.gameState.answers).length / 10) * 100}%"></div>
                        </div>
                        <div class="progress-labels">
                            <span>Прогресс: ${Object.keys(this.gameState.answers).length}/10</span>
                            <span>Счёт: ${this.gameState.score}</span>
                            <span>Снеговик: ${this.gameState.collectedParts.length}/10</span>
                        </div>
                    </div>
                </div>

                <!-- Контент страницы -->
                <div class="page-content">
                    <!-- Изображение локации -->
                    ${pageConfig.image ? `
                        <div class="location-image">
                            <img src="${pageConfig.image}" alt="${pageConfig.title}">
                            <div class="image-caption">
                                <span class="location-name">${pageConfig.location}</span>
                                <span class="location-type">${pageConfig.type}</span>
                            </div>
                        </div>
                    ` : ''}

                    <!-- Описание -->
                    <div class="description-section">
                        <div class="description-card">
                            <h3>📖 Описание локации</h3>
                            <p>${pageConfig.description}</p>
                        </div>

                        <div class="facts-card">
                            <h3>📌 Интересные факты</h3>
                            <ul class="facts-list">
                                ${pageConfig.facts.map(fact => `
                                    <li>${fact}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <!-- Статус вопроса -->
                    <div class="question-status ${hasAnswer ? 'answered' : 'pending'}">
                        <div class="status-icon">
                            ${hasAnswer ? '✅' : '❓'}
                        </div>
                        <div class="status-content">
                            <h4>${hasAnswer ? 'Вопрос пройден' : 'Вопрос доступен'}</h4>
                            <p>${hasAnswer ?
                                'Вы уже ответили на вопрос этой локации' :
                                'Найдите кнопку «Ответить на вопрос» на странице'
                            }</p>
                        </div>
                    </div>

                    <!-- Статистика снеговика -->
                    <div class="snowman-status">
                        <h3>⛄ Ваш снеговик</h3>
                        <div class="snowman-parts">
                            ${GAME_CONFIG.SNOWMAN_PARTS.map(part => {
                                const hasPart = this.gameState.collectedParts.includes(part.id)
                                return `
                                    <div class="snowman-part-item ${hasPart ? 'collected' : 'missing'}"
                                         title="${part.name}">
                                        <span class="part-icon">${hasPart ? part.emoji : '○'}</span>
                                        <span class="part-name">${part.name}</span>
                                    </div>
                                `
                            }).join('')}
                        </div>
                    </div>

                    <!-- Навигация -->
                    <div class="page-navigation">
                        <div class="nav-buttons">
                            ${pageNumber > 1 ? `
                                <button class="nav-btn prev" onclick="game.navigateTo(${pageNumber - 1})">
                                    ← Предыдущая
                                </button>
                            ` : `
                                <button class="nav-btn" onclick="game.navigateTo('home')">
                                    ← На главную
                                </button>
                            `}

                            <div class="current-page-display">
                                <span class="current">${pageNumber}</span>
                                <span class="total">/10</span>
                            </div>

                            ${pageNumber < 10 ? `
                                <button class="nav-btn next" onclick="game.navigateTo(${pageNumber + 1})">
                                    Следующая →
                                </button>
                            ` : `
                                <button class="nav-btn next" onclick="game.navigateTo('result')">
                                    Результат →
                                </button>
                            `}
                        </div>

                        <div class="quick-jump">
                            <span>Быстрый переход:</span>
                            <div class="page-links">
                                ${Array.from({length: 10}, (_, i) => i + 1).map(num => `
                                    <button class="page-link ${num === pageNumber ? 'active' : ''}"
                                            onclick="game.navigateTo(${num})">
                                        ${num}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Подсказка -->
                ${!hasAnswer ? `
                    <div class="search-hint">
                        <div class="hint-icon">🔍</div>
                        <div class="hint-text">
                            Кнопка «Ответить на вопрос» появляется в случайном месте на этой странице.
                            <br><small>Ищите внимательно!</small>
                        </div>
                    </div>
                ` : ''}
            </div>
        `
    }

    renderHomePage() {
        const hasProgress = this.gameState.visitedPages.length > 0

        return `
            <div class="home-page">
                <!-- Герой секция -->
                <section class="hero-section">
                    <div class="hero-content">
                        <h1 class="hero-title">❄️ Собери Снеговика ❄️</h1>
                        <p class="hero-subtitle">Путешествуйте по 10 зимним локациям, отвечайте на вопросы и соберите снеговика!</p>

                        <div class="hero-actions">
                            <button class="hero-btn primary" onclick="game.startGame()">
                                🎮 Начать игру
                            </button>

                            ${hasProgress ? `
                                <button class="hero-btn secondary" onclick="game.continueGame()">
                                    🚀 Продолжить
                                </button>
                            ` : ''}
                        </div>
                    </div>

                    <div class="hero-image">
                        <div class="animated-snowman">
                            ⛄
                        </div>
                    </div>
                </section>

                <!-- Прогресс (если есть) -->
                ${hasProgress ? this.renderHomeProgress() : ''}

                <!-- Инструкции -->
                <section class="instructions-section">
                    <h2>🎮 Как играть</h2>
                    <div class="instructions-grid">
                        <div class="instruction-card">
                            <div class="card-icon">1️⃣</div>
                            <h3>Начните игру</h3>
                            <p>Нажмите "Начать игру" для старта или "Продолжить" если уже играли</p>
                        </div>
                        <div class="instruction-card">
                            <div class="card-icon">2️⃣</div>
                            <h3>Исследуйте локации</h3>
                            <p>Посетите 10 уникальных зимних локаций с разными темами</p>
                        </div>
                        <div class="instruction-card">
                            <div class="card-icon">3️⃣</div>
                            <h3>Найдите кнопку</h3>
                            <p>На каждой странице кнопка вопроса появляется в случайном месте</p>
                        </div>
                        <div class="instruction-card">
                            <div class="card-icon">4️⃣</div>
                            <h3>Ответьте на вопрос</h3>
                            <p>Ответьте правильно, чтобы получить часть снеговика</p>
                        </div>
                    </div>
                </section>

                <!-- Локации -->
                <section class="locations-preview">
                    <h2>🌨️ Зимние локации</h2>
                    <div class="locations-grid">
                        ${Object.entries(GAME_CONFIG.PAGE_CONTENT).slice(0, 6).map(([num, page]) => `
                            <div class="location-preview" onclick="game.navigateTo(${num})">
                                <div class="preview-header" style="background: ${page.themeColor}">
                                    <span class="preview-number">${num}</span>
                                    <span class="preview-title">${page.location}</span>
                                </div>
                                <div class="preview-content">
                                    <h4>${page.title}</h4>
                                    <p>${page.subtitle}</p>
                                </div>
                                ${this.gameState.visitedPages.includes(parseInt(num)) ?
                                    '<div class="visited-badge">✓ Посещено</div>' :
                                    '<div class="new-badge">Новая</div>'
                                }
                            </div>
                        `).join('')}
                    </div>
                    <button class="view-all-btn" onclick="game.navigateTo(1)">
                        Посмотреть все локации →
                    </button>
                </section>

                <!-- Статистика -->
                ${hasProgress ? `
                    <section class="stats-section">
                        <h2>📊 Ваша статистика</h2>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-value">${this.gameState.visitedPages.length}</div>
                                <div class="stat-label">Посещено локаций</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value">${Object.keys(this.gameState.answers).length}</div>
                                <div class="stat-label">Отвечено вопросов</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value">${this.gameState.score}</div>
                                <div class="stat-label">Накоплено очков</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value">${this.gameState.collectedParts.length}/10</div>
                                <div class="stat-label">Частей снеговика</div>
                            </div>
                        </div>
                    </section>
                ` : ''}

                <!-- Управление -->
                <section class="control-section">
                    <h2>⚙️ Управление игрой</h2>
                    <div class="control-buttons">
                        ${hasProgress ? `
                            <button class="control-btn" onclick="game.navigateTo('result')">
                                🏆 Посмотреть результат
                            </button>
                            <button class="control-btn warning" onclick="game.resetGame()">
                                🔄 Сбросить игру
                            </button>
                        ` : ''}
                        <button class="control-btn" onclick="game.showInstructions()">
                            📖 Подробные правила
                        </button>
                    </div>
                </section>
            </div>
        `
    }

    renderHomeProgress() {
        return `
            <section class="progress-section home">
                <h2>📈 Ваш прогресс</h2>
                <div class="progress-visual">
                    <!-- Индикатор прогресса -->
                    <div class="progress-track">
                        ${Array.from({length: 10}, (_, i) => {
                            const pageNum = i + 1
                            const isVisited = this.gameState.visitedPages.includes(pageNum)
                            const isAnswered = this.gameState.answers[pageNum] !== undefined
                            const hasPart = GAME_CONFIG.PAGE_CONTENT[pageNum] &&
                                           this.gameState.collectedParts.includes(GAME_CONFIG.PAGE_CONTENT[pageNum].part)

                            let className = 'progress-point'
                            if (isVisited) className += ' visited'
                            if (isAnswered) className += ' answered'
                            if (hasPart) className += ' has-part'

                            return `
                                <div class="${className}" onclick="game.navigateTo(${pageNum})">
                                    <span class="point-number">${pageNum}</span>
                                    ${hasPart ? '<span class="point-badge">⛄</span>' : ''}
                                </div>
                            `
                        }).join('')}
                    </div>

                    <!-- Легенда -->
                    <div class="progress-legend">
                        <div class="legend-item">
                            <div class="legend-color not-visited"></div>
                            <span>Не посещено</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color visited"></div>
                            <span>Посещено</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color answered"></div>
                            <span>Отвечено</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color has-part"></div>
                            <span>Часть получена</span>
                        </div>
                    </div>
                </div>
            </section>
        `
    }

    renderResultPage() {
        const score = this.gameState.score
        const totalQuestions = Object.keys(this.gameState.answers).length
        const correctAnswers = Object.values(this.gameState.answers).filter((answer, index) =>
            answer === GAME_CONFIG.QUESTIONS[index + 1]?.correct
        ).length

        const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0

        return `
            <div class="result-page">
                <!-- Результат -->
                <section class="result-hero">
                    <h1>🎉 Игра завершена! 🎉</h1>
                    <p class="result-subtitle">Вы прошли все 10 зимних локаций!</p>

                    <div class="result-score">
                        <div class="score-circle">
                            <span class="score-percentage">${percentage}%</span>
                            <span class="score-label">правильных ответов</span>
                        </div>

                        <div class="score-details">
                            <div class="score-item">
                                <span class="score-value">${correctAnswers}/${totalQuestions}</span>
                                <span class="score-name">Правильных ответов</span>
                            </div>
                            <div class="score-item">
                                <span class="score-value">${this.gameState.collectedParts.length}/10</span>
                                <span class="score-name">Частей снеговика</span>
                            </div>
                            <div class="score-item">
                                <span class="score-value">${score}</span>
                                <span class="score-name">Всего очков</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Снеговик -->
                <section class="result-snowman">
                    <h2>⛄ Ваш снеговик</h2>
                    <div class="complete-snowman">
                        ${this.renderCompleteSnowman()}
                    </div>
                    <p class="snowman-status">
                        ${this.gameState.collectedParts.length === 10 ?
                            '🎊 Поздравляем! Вы собрали полного снеговика!' :
                            `Вы собрали ${this.gameState.collectedParts.length} из 10 частей снеговика`
                        }
                    </p>
                </section>

                <!-- Детализация по страницам -->
                <section class="page-breakdown">
                    <h2>📋 Результаты по локациям</h2>
                    <div class="breakdown-grid">
                        ${Array.from({length: 10}, (_, i) => {
                            const pageNum = i + 1
                            const page = GAME_CONFIG.PAGE_CONTENT[pageNum]
                            const answer = this.gameState.answers[pageNum]
                            const isCorrect = answer === GAME_CONFIG.QUESTIONS[pageNum]?.correct
                            const hasPart = this.gameState.collectedParts.includes(page?.part || '')

                            return `
                                <div class="breakdown-card ${isCorrect ? 'correct' : 'incorrect'}">
                                    <div class="breakdown-header">
                                        <span class="page-number">${pageNum}</span>
                                        <span class="page-location">${page?.location || 'Локация'}</span>
                                    </div>
                                    <div class="breakdown-content">
                                        <div class="breakdown-status">
                                            ${answer !== undefined ?
                                                `<span class="status ${isCorrect ? 'success' : 'error'}">
                                                    ${isCorrect ? '✅ Правильно' : '❌ Неправильно'}
                                                </span>` :
                                                '<span class="status skipped">⏭️ Не отвечено</span>'
                                            }
                                        </div>
                                        <div class="breakdown-part">
                                            ${hasPart ?
                                                `<span class="part-badge">⛄</span> Часть получена` :
                                                'Часть не получена'
                                            }
                                        </div>
                                        <button class="breakdown-btn" onclick="game.navigateTo(${pageNum})">
                                            Посмотреть локацию
                                        </button>
                                    </div>
                                </div>
                            `
                        }).join('')}
                    </div>
                </section>

                <!-- Действия -->
                <section class="result-actions">
                    <h2>🚀 Что дальше?</h2>
                    <div class="action-buttons">
                        <button class="action-btn primary" onclick="game.restartGame()">
                            🔄 Играть снова
                        </button>
                        <button class="action-btn" onclick="game.navigateTo('home')">
                            🏠 На главную
                        </button>
                        <button class="action-btn" onclick="game.shareResult()">
                            📢 Поделиться результатом
                        </button>
                    </div>
                </section>
            </div>
        `
    }

    renderCompleteSnowman() {
        let html = '<div class="snowman-complete">'
        GAME_CONFIG.SNOWMAN_PARTS.forEach(part => {
            const hasPart = this.gameState.collectedParts.includes(part.id)
            html += `
                <div class="snowman-part-complete ${hasPart ? 'collected' : 'missing'}"
                     style="animation-delay: ${part.order * 0.1}s">
                    ${hasPart ? part.emoji : '○'}
                    <div class="part-tooltip">${part.name}</div>
                </div>
            `
        })
        html += '</div>'
        return html
    }

    renderNotFoundPage() {
        return `
            <div class="not-found-page">
                <div class="not-found-content">
                    <h1>❄️ Страница не найдена ❄️</h1>
                    <p>Похоже, вы забрели не туда в снежном мире...</p>
                    <div class="not-found-actions">
                        <button class="not-found-btn" onclick="game.navigateTo('home')">
                            ← Вернуться на главную
                        </button>
                        <button class="not-found-btn" onclick="game.startGame()">
                            🎮 Начать игру
                        </button>
                    </div>
                </div>
            </div>
        `
    }

    applyPageTheme() {
        if (typeof this.currentPage !== 'number') return

        const pageConfig = GAME_CONFIG.PAGE_CONTENT[this.currentPage]
        if (!pageConfig) return

        // Устанавливаем цвет темы как CSS переменную
        document.documentElement.style.setProperty('--theme-color', pageConfig.themeColor)

        // Добавляем класс темы к body
        document.body.className = `page-${this.currentPage} ${pageConfig.background}`
    }

    async initQuestionButton() {
        const pageNumber = this.currentPage
        const hasAnswer = this.gameState.answers[pageNumber] !== undefined

        if (!hasAnswer) {
            this.questionButton = new QuestionButton()

            this.questionButton.create(() => {
                this.showQuestionModal(pageNumber)
            })
        }
    }

    showQuestionModal(pageNumber) {
        const question = GAME_CONFIG.QUESTIONS[pageNumber]
        const pageConfig = GAME_CONFIG.PAGE_CONTENT[pageNumber]

        this.modal.showQuestion(
            question,
            pageNumber,
            pageConfig.title,
            (selectedIndex) => {
                this.handleAnswer(pageNumber, selectedIndex)
            }
        )
    }

    handleAnswer(pageNumber, answerIndex) {
        const question = GAME_CONFIG.QUESTIONS[pageNumber]
        const isCorrect = answerIndex === question.correct

        // Сохраняем ответ
        this.gameState.answers[pageNumber] = answerIndex

        if (isCorrect) {
            this.gameState.score += 10

            const part = GAME_CONFIG.PAGE_CONTENT[pageNumber]?.part
            if (part && !this.gameState.collectedParts.includes(part)) {
                this.gameState.collectedParts.push(part)
                showNotification(`🎉 Правильно! +10 очков\nПолучена часть: ${this.getPartName(part)}`, 'success')
            } else {
                showNotification('🎉 Правильно! +10 очков', 'success')
            }
        } else {
            showNotification('❌ Неправильно. Попробуйте в следующий раз!', 'error')
        }

        // Обновляем состояние игры
        this.gameState.gameStarted = true
        this.saveGameState()

        // Обновляем страницу через 2 секунды
        setTimeout(() => {
            this.renderPage()
        }, 2000)
    }

    getPartName(partId) {
        const part = GAME_CONFIG.SNOWMAN_PARTS.find(p => p.id === partId)
        return part ? part.name : 'часть снеговика'
    }

    // Методы управления игрой
    startGame() {
        this.navigateTo(1)
    }

    continueGame() {
        const lastPage = this.gameState.visitedPages.length > 0 ?
            Math.max(...this.gameState.visitedPages) : 1
        this.navigateTo(lastPage)
    }

    resetGame() {
        if (confirm('Вы уверены, что хотите сбросить всю игру? Весь прогресс будет потерян.')) {
            this.storage.remove('snowmanGame')
            this.gameState = this.loadGameState()
            showNotification('Игра сброшена!', 'info')
            this.navigateTo('home')
        }
    }

    restartGame() {
        this.storage.remove('snowmanGame')
        this.gameState = this.loadGameState()
        this.startGame()
    }

    showInstructions() {
        alert('Правила игры:\n\n1. Посетите 10 зимних локаций\n2. Найдите кнопку "Ответить на вопрос" на каждой странице\n3. Ответьте правильно, чтобы получить часть снеговика\n4. Соберите все 10 частей снеговика!')
    }

    shareResult() {
        const score = this.gameState.score
        const parts = this.gameState.collectedParts.length
        const text = `🎮 Я сыграл в игру "Собери снеговика" и набрал ${score} очков, собрав ${parts} из 10 частей снеговика! Попробуйте и вы: ${window.location.origin}`

        if (navigator.share) {
            navigator.share({
                title: 'Собери снеговика',
                text: text,
                url: window.location.origin
            })
        } else {
            navigator.clipboard.writeText(text)
            showNotification('Результат скопирован в буфер обмена!', 'success')
        }
    }

    playPageTransition(fromPage, toPage) {
        // Анимация перехода между страницами
        const app = document.getElementById('app')
        app.classList.add('page-transition-active')

        setTimeout(() => {
            app.classList.remove('page-transition-active')
        }, 500)
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    setupEventListeners() {
        // Глобальные обработчики событий
        document.addEventListener('click', (e) => {
            // Обработка навигации через data-атрибуты
            if (e.target.dataset.navigate) {
                e.preventDefault()
                this.navigateTo(e.target.dataset.navigate)
            }
        })

        // Обработка клавиатуры
        document.addEventListener('keydown', (e) => {
            if (typeof this.currentPage === 'number') {
                // Стрелки для навигации
                if (e.key === 'ArrowLeft' && this.currentPage > 1) {
                    this.navigateTo(this.currentPage - 1)
                } else if (e.key === 'ArrowRight' && this.currentPage < 10) {
                    this.navigateTo(this.currentPage + 1)
                }

                // Escape для закрытия модалки
                if (e.key === 'Escape') {
                    this.modal.hide()
                }
            }
        })
    }
}

// Инициализация игры
document.addEventListener('DOMContentLoaded', () => {
    window.game = new SnowmanGame()

    // Делаем методы доступными глобально
    window.navigateToPage = (page) => window.game.navigateTo(page)
    window.startGame = () => window.game.startGame()
    window.resetGame = () => window.game.resetGame()
})