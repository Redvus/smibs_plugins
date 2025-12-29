export class QuestionButton {
    constructor() {
        this.button = null
        this.callback = null
    }

    create(onClick) {
        this.callback = onClick

        // Создаем кнопку
        this.button = document.createElement('button')
        this.button.className = 'question-random-button'
        this.button.innerHTML = `
            <span class="question-text">Ответить<br>на вопрос</span>
        `

        // Устанавливаем случайную позицию
        this.setRandomPosition()

        // Добавляем обработчики
        this.button.addEventListener('click', (e) => {
            e.stopPropagation()
            if (this.callback) {
                this.callback()
                this.hide() // Скрываем после клика
            }
        })

        // Добавляем в документ
        document.body.appendChild(this.button)

        // Обновляем позицию при ресайзе
        window.addEventListener('resize', () => this.updatePosition())

        return this.button
    }

    setRandomPosition() {
        if (!this.button) return

        const buttonWidth = 120
        const buttonHeight = 120
        const padding = 50
        const pageHeight = 600

        // Рассчитываем доступные координаты
        // const maxX = window.innerWidth - buttonWidth - padding * 2
        // const maxY = window.innerHeight - buttonHeight - padding * 2
        const maxX = window.innerWidth - buttonWidth - padding * 2
        const maxY = pageHeight - buttonHeight - padding * 2

        // Генерируем случайные координаты
        const x = Math.floor(Math.random() * maxX) + padding
        const y = Math.floor(Math.random() * maxY) + padding

        this.button.style.left = `${x}px`
        this.button.style.top = `${y}px`
    }

    updatePosition() {
        if (this.button) {
            this.setRandomPosition()
        }
    }

    show() {
        if (this.button) {
            this.button.style.display = 'flex'
            this.setRandomPosition()
        }
    }

    hide() {
        if (this.button) {
            this.button.style.display = 'none'
        }
    }

    remove() {
        if (this.button) {
            this.button.remove()
            this.button = null
        }
    }

    isVisible() {
        return this.button && this.button.style.display !== 'none'
    }
}