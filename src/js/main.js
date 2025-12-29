import "/scss/main.scss";

import { GAME_CONFIG } from './utils/config.js'
import { QuestionButton } from './components/QuestionButton.js'
import { Modal } from './components/QuestionModal.js'
import { Storage } from './components/Storage.js'
import { showNotification } from './utils/helpers.js'

export class SnowmanGame {
    constructor() {
        this.storage = new Storage()
        this.modal = new Modal()
        this.questionButton = new QuestionButton()
        // this.currentPage = this.getPageNumber()
        this.currentPage = this.getCurrentPageNumber()
        this.gameState = this.loadGameState()

        // 1. Определяем текущую страницу
        // this.currentPage = this.getCurrentPageNumber()

        // // 2. Загружаем состояние игры
        // this.gameState = this.loadGameState()

        // // 3. Обновляем текущую страницу в состоянии
        // if (typeof this.currentPage === 'number') {
        //     this.gameState.currentPage = this.currentPage
        //     this.saveGameState()
        // }

        this.init()
    }

    getCurrentPageNumber() {
        const path = window.location.pathname
        const page = path.split('/').pop()

        if (page === 'index.html' || page === '') return 'home'
        if (page === 'result.html') return 'result'

        const match = page.match(/page(\d+)\.html/)
        return match ? parseInt(match[1]) : 'home'
    }

    // Улучшенная функция определения страницы
    // getCurrentPageNumber() {
    //     const path = window.location.pathname
    //     const filename = path.split('/').pop()

    //     console.log('Текущий файл:', filename) // Для отладки

    //     // Проверяем специальные страницы
    //     if (!filename || filename === '' || filename === 'index.html') {
    //         return 'home'
    //     }

    //     if (filename === 'result.html' || filename === 'rezultat.html') {
    //         return 'result'
    //     }

    //     // Ищем номер страницы в имени файла
    //     const patterns = [
    //         /page(\d+)\.html/,      // page1.html
    //         /vopros(\d+)\.html/,    // vopros1.html
    //         /question(\d+)\.html/,  // question1.html
    //         /stranica(\d+)\.html/,  // stranica1.html
    //         /(\d+)\.html/           // 1.html
    //     ]

    //     for (const pattern of patterns) {
    //         const match = filename.match(pattern)
    //         if (match) {
    //             const pageNum = parseInt(match[1])
    //             // Проверяем, что номер в допустимом диапазоне
    //             if (pageNum >= 1 && pageNum <= GAME_CONFIG.TOTAL_PAGES) {
    //                 return pageNum
    //             }
    //         }
    //     }

    //     // Если ничего не нашли, возвращаем на главную
    //     console.warn('Не удалось определить номер страницы, перенаправляем на главную')
    //     return 'home'
    // }

    loadGameState() {
        const saved = this.storage.get('snowmanGame')
        if (saved) {
            return JSON.parse(saved)
        }

        return {
            score: 0,
            answers: {},
            collectedParts: [],
            currentPage: 1,
            visitedPages: []
        }
    }

    saveGameState() {
        this.storage.set('snowmanGame', JSON.stringify(this.gameState))
    }

    async init() {
        this.applyPageTheme()
        this.renderPage()
        this.modal.init()
        this.setupEventListeners()

        // Показываем кнопку вопроса на игровых страницах
        if (typeof this.currentPage === 'number') {
            this.initQuestionButton()
            this.markPageAsVisited()
        }
    }

    // Применяем тему страницы
    applyPageTheme() {
        if (typeof this.currentPage !== 'number') return

        const pageContent = GAME_CONFIG.PAGE_CONTENT[this.currentPage]
        if (!pageContent) return

        // Устанавливаем цвет темы
        document.documentElement.style.setProperty('--theme-color', pageContent.themeColor)

        // Устанавливаем фон
        document.body.classList.add(`page-${this.currentPage}`, pageContent.background)

        // Устанавливаем favicon
        this.setFavicon(pageContent.themeColor)
    }

    setFavicon(color) {
        const canvas = document.createElement('canvas')
        canvas.width = 32
        canvas.height = 32
        const ctx = canvas.getContext('2d')

        // Рисуем снежинку
        ctx.fillStyle = color
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3
            ctx.moveTo(16, 16)
            ctx.lineTo(16 + 12 * Math.cos(angle), 16 + 12 * Math.sin(angle))
        }
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(16, 16, 4, 0, Math.PI * 2)
        ctx.fill()

        // Создаем favicon
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
        link.type = 'image/x-icon'
        link.rel = 'shortcut icon'
        link.href = canvas.toDataURL()
        document.head.appendChild(link)
    }

    markPageAsVisited() {
        if (!this.gameState.visitedPages.includes(this.currentPage)) {
            this.gameState.visitedPages.push(this.currentPage)
            this.saveGameState()
        }
    }

    async renderPage() {
        const app = document.getElementById('app')
        if (!app) return

        let html = ''

        switch (this.currentPage) {
            case 'home':
                html = this.renderHomePage()
                break
            case 'result':
                html = this.renderResultPage()
                break
            default:
                if (typeof this.currentPage === 'number') {
                    html = await this.renderGamePage(this.currentPage)
                }
                break
        }

        app.innerHTML = html
        // this.initPageComponents()
    }

    async renderGamePage(pageNumber) {
        const pageContent = GAME_CONFIG.PAGE_CONTENT[pageNumber]
        const hasAnswer = this.gameState.answers[pageNumber] !== undefined
        const isVisited = this.gameState.visitedPages.includes(pageNumber)

        if (!pageContent) {
            return `<div class="error">Страница не найдена</div>`
        }

        return `
            <div class="game-container">
                <header class="game-header">
                    <div class="page-indicator">
                        <span class="page-number">${pageNumber}/10</span>
                    </div>
                    <h1 class="page-title">${pageContent.title}</h1>
                    <div class="page-subtitle">
                        ${hasAnswer ? `
                            <div class="answer-status success">
                                <div class="status-icon">✅</div>
                                <div class="status-text">
                                    <strong>Вы ответили на вопрос этой страницы</strong>
                                    <small></small>
                                </div>
                            </div>
                        ` : `
                            <div class="answer-status pending">
                                <div class="status-icon">🔍</div>
                                <div class="status-text">
                                    <strong>Найдите кнопку на странице</strong>
                                    <small>Кнопка «Ответить на вопрос» появляется в случайном месте</small>
                                </div>
                            </div>
                        `}
                        <!--${isVisited ? '📍 Вы уже посещали эту страницу' : '🎯 Новая страница!'}-->
                    </div>
                </header>

                <!--<div class="progress-section">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(Object.keys(this.gameState.answers).length / 10) * 100}%"></div>
                    </div>
                    <div class="progress-stats">
                        <span class="stat">Отвечено: ${Object.keys(this.gameState.answers).length}/10</span>
                        <span class="stat">Счёт: ${this.gameState.score}</span>
                        <span class="stat">Снеговик: ${this.gameState.collectedParts.length}/10</span>
                    </div>
                </div>-->

                <div class="page-content-wrapper">
                    <div class="location-visual">
                        ${pageContent.image ? `
                            <div class="location-image">
                                <img src="${pageContent.image}" alt="${pageContent.title}">
                            </div>
                        ` : ''}
                    </div>

                    <div class="location-description">
                        <div class="description-text">
                            <p>${pageContent.description}</p>
                        </div>

                        <div class="location-facts">
                            <h4>📌 Интересные факты:</h4>
                            <ul>
                                ${pageContent.facts.map(fact => `<li>${fact}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="page-navigation">
                    <div class="nav-buttons">
                        ${pageNumber > 1 ?
                            `<a href="page${pageNumber - 1}.html" class="nav-btn prev">
                                <span class="btn-icon">←</span>
                                <span class="btn-text">Предыдущая<br>страница</span>
                            </a>` :
                            `<a href="index.html" class="nav-btn prev">
                                <span class="btn-icon">🏠</span>
                                <span class="btn-text">На<br>главную</span>
                            </a>`
                        }

                        <div class="current-location">
                            <div class="location-number">${pageNumber}</div>
                            <div class="location-label">из 10</div>
                        </div>

                        ${pageNumber < 10 ?
                            `<a href="page${pageNumber + 1}.html" class="nav-btn next">
                                <span class="btn-text">Следующая<br>страница</span>
                                <span class="btn-icon">→</span>
                            </a>` :
                            `<a href="result.html" class="nav-btn next">
                                <span class="btn-text">Посмотреть<br>результат</span>
                                <span class="btn-icon">🏆</span>
                            </a>`
                        }
                    </div>

                    <div class="quick-stats">
                        <div class="quick-stat">
                            <span class="stat-value">${this.gameState.score}</span>
                            <span class="stat-label">Очков</span>
                        </div>
                        <div class="quick-stat">
                            <span class="stat-value">${this.gameState.collectedParts.length}</span>
                            <span class="stat-label">Частей</span>
                        </div>
                        <div class="quick-stat">
                            <span class="stat-value">${this.gameState.visitedPages.length}</span>
                            <span class="stat-label">Страниц</span>
                        </div>
                    </div>
                </div>

                <div class="snowman-container">
                    ${this.renderSnowman()}
                </div>
            </div>
        `
    }

    renderSnowman() {
        let html = '<div class="snowman">'
        GAME_CONFIG.SNOWMAN_PARTS.forEach(part => {
            const hasPart = this.gameState.collectedParts.includes(part.id)
            html += `
                <div class="snowman-part ${hasPart ? 'visible' : ''}" data-part="${part.id}">
                    ${part.emoji}
                </div>
            `
        })
        html += '</div>'
        return html
    }

    renderHomePage() {
        const hasProgress = Object.keys(this.gameState.answers).length > 0

        return `
            <div class="game-container">
                <header class="game-header">
                    <h1>❄️ Собери Снеговика ❄️</h1>
                    <p>Ответьте на 10 вопросов и соберите снеговика!</p>
                </header>

                <div class="snowman-display">
                    ${this.renderSnowman()}
                </div>

                <div class="instructions">
                    <h3>Как играть:</h3>
                    <ol>
                        <li>Начните игру с первой страницы</li>
                        <li>На каждой странице найдите кнопку «Ответить на вопрос»</li>
                        <li>Кнопка появляется в случайном месте на странице</li>
                        <li>Ответьте правильно, чтобы получить часть снеговика</li>
                        <li>Переходите на следующую страницу</li>
                    </ol>
                </div>

                <div class="actions">
                    <a href="page1.html" class="btn primary">🎮 Начать игру</a>

                    ${hasProgress ? `
                        <a href="page${this.gameState.currentPage}.html" class="btn secondary">
                            Продолжить (${this.gameState.score}/10)
                        </a>
                        <button class="btn warning" id="resetBtn">Сбросить игру</button>
                    ` : ''}
                </div>
            </div>
        `
    }

    renderResultPage() {
        const score = this.gameState.score

        return `
            <div class="game-container">
                <header class="game-header">
                    <h1>🎉 Игра завершена! 🎉</h1>
                </header>

                <div class="snowman-display">
                    ${this.renderSnowman()}
                </div>

                <div class="result-content">
                    <h2>Ваш результат: ${score}/10</h2>
                    <p>${this.getResultMessage(score)}</p>

                    <div class="result-actions">
                        <a href="index.html" class="btn">На главную</a>
                        <button class="btn primary" id="playAgain">Играть снова</button>
                    </div>
                </div>
            </div>
        `
    }

    getResultMessage(score) {
        if (score === 10) return 'Идеально! Вы собрали полного снеговика!'
        if (score >= 7) return 'Отлично! Почти весь снеговик собран!'
        if (score >= 5) return 'Хорошо! Больше половины снеговика собрано!'
        return 'Попробуйте ещё раз, чтобы собрать больше частей снеговика!'
    }

    initQuestionButton() {
        const pageNumber = this.currentPage
        const hasAnswer = this.gameState.answers[pageNumber] !== undefined

        // Показываем кнопку только если еще не отвечали
        if (!hasAnswer) {
            this.questionButton.create(() => {
                this.showQuestionModal(pageNumber)
            })
            this.questionButton.show()
        }
    }

    showQuestionModal(pageNumber) {
        const question = GAME_CONFIG.QUESTIONS[pageNumber]

        this.modal.showQuestion(question, pageNumber, (selectedIndex) => {
            this.handleAnswer(pageNumber, selectedIndex)
        })
    }

    handleAnswer(pageNumber, answerIndex) {
        const question = GAME_CONFIG.QUESTIONS[pageNumber]
        const isCorrect = answerIndex === question.correct

        // Сохраняем ответ
        this.gameState.answers[pageNumber] = answerIndex

        if (isCorrect) {
            this.gameState.score++
            if (!this.gameState.collectedParts.includes(question.part)) {
                this.gameState.collectedParts.push(question.part)
            }
            showNotification('Правильно! Вы получили часть снеговика!', 'success')
        } else {
            showNotification('Неправильно. Попробуйте в следующий раз!', 'error')
        }

        // Обновляем текущую страницу
        this.gameState.currentPage = pageNumber

        // Сохраняем
        this.saveGameState()

        // Обновляем отображение
        setTimeout(() => {
            this.renderPage()
        }, 500)
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'resetBtn') {
                if (confirm('Сбросить весь прогресс?')) {
                    this.storage.remove('snowmanGame')
                    window.location.href = 'index.html'
                }
            }

            if (e.target.id === 'playAgain') {
                this.storage.remove('snowmanGame')
                window.location.href = 'page1.html'
            }
        })
    }
}