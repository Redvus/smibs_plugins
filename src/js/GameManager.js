import { GAME_CONFIG } from './utils/config.js'
import { Storage } from './components/Storage.js'
import { showNotification, getRandomInt } from './utils/helpers.js'

export class GameManager {
    constructor() {
        this.storage = new Storage()
        this.state = this.getInitialState()
        this.questionButton = null
        this.bonusButton = null
    }

    getInitialState() {
        return {
            gameStarted: false,
            currentPage: 1,
            score: 0,
            answers: {},
            collectedParts: [],
            randomButtonPage: getRandomInt(1, 10),
            randomButtonFound: false,
            questionButtonPage: null,
            questionButtonFound: false,
            lastUpdated: new Date().toISOString()
        }
    }

    async loadGame() {
        const saved = await this.storage.get('snowmanGame')

        if (saved) {
            this.state = { ...this.getInitialState(), ...saved }
            this.state.gameStarted = true

            // Если нет случайной страницы для кнопки вопроса, генерируем
            if (!this.state.questionButtonPage) {
                this.state.questionButtonPage = this.generateQuestionButtonPage()
                this.saveGame()
            }
        } else {
            this.state = this.getInitialState()
            this.state.questionButtonPage = this.generateQuestionButtonPage()
        }

        return this.state
    }

    generateQuestionButtonPage() {
        // Генерируем случайную страницу для кнопки вопроса
        // Не совпадает с бонусной кнопкой
        let page
        do {
            page = getRandomInt(1, 10)
        } while (page === this.state.randomButtonPage)

        return page
    }

    saveGame() {
        this.storage.set('snowmanGame', this.state)
    }

    resetGame() {
        this.state = this.getInitialState()
        this.state.questionButtonPage = this.generateQuestionButtonPage()
        this.storage.remove('snowmanGame')
    }

    answerQuestion(questionNumber, answerIndex) {
        if (this.state.answers[questionNumber] !== undefined) {
            return false // Уже отвечали
        }

        const question = GAME_CONFIG.QUESTIONS[questionNumber]
        const isCorrect = answerIndex === question.correct

        this.state.answers[questionNumber] = answerIndex
        this.state.currentPage = questionNumber + 1

        if (isCorrect) {
            this.state.score++
            this.addCollectedPart(question.part)
        }

        // Если ответили через кнопку вопроса, отмечаем это
        if (questionNumber === this.state.questionButtonPage && !this.state.questionButtonFound) {
            this.state.questionButtonFound = true
        }

        this.saveGame()

        // Генерируем событие для обновления интерфейса
        const event = new CustomEvent('questionAnswered', {
            detail: {
                questionNumber,
                answerIndex,
                isCorrect,
                part: question.part
            }
        })
        document.dispatchEvent(event)

        return isCorrect
    }

    addCollectedPart(part) {
        if (!this.state.collectedParts.includes(part)) {
            this.state.collectedParts.push(part)
            this.saveGame()

            showNotification(`Получена часть снеговика: ${GAME_CONFIG.SNOWMAN_PARTS[part].name}`, 'success')
        }
    }

    shouldShowQuestionButton(pageNumber) {
        return pageNumber === this.state.questionButtonPage &&
               !this.state.questionButtonFound &&
               !this.state.answers[pageNumber]
    }

    shouldShowBonusButton(pageNumber) {
        return pageNumber === this.state.randomButtonPage &&
               !this.state.randomButtonFound
    }

    collectBonus() {
        const missingParts = Object.keys(GAME_CONFIG.SNOWMAN_PARTS)
            .filter(part => !this.state.collectedParts.includes(part))

        if (missingParts.length > 0) {
            const randomPart = missingParts[Math.floor(Math.random() * missingParts.length)]
            this.addCollectedPart(randomPart)
            this.state.randomButtonFound = true
            this.saveGame()

            return {
                success: true,
                part: randomPart,
                name: GAME_CONFIG.SNOWMAN_PARTS[randomPart].name
            }
        }

        return { success: false }
    }

    getProgress() {
        const answered = Object.keys(this.state.answers).length
        return {
            answered,
            total: GAME_CONFIG.TOTAL_PAGES,
            percentage: (answered / GAME_CONFIG.TOTAL_PAGES) * 100,
            score: this.state.score,
            partsCollected: this.state.collectedParts.length,
            hasBonus: this.state.randomButtonFound,
            hasQuestionButton: this.state.questionButtonFound
        }
    }

    isQuestionAnswered(questionNumber) {
        return this.state.answers[questionNumber] !== undefined
    }

    getQuestionResult(questionNumber) {
        const answer = this.state.answers[questionNumber]
        if (answer === undefined) return null

        const question = GAME_CONFIG.QUESTIONS[questionNumber]
        return {
            answer,
            correct: question.correct,
            isCorrect: answer === question.correct
        }
    }
}