export class QuestionButton {
    constructor() {
        this.button = null
        this.isVisible = false
    }

    create(onClick) {
        // Удаляем старую кнопку, если есть
        this.remove()

        // Создаем новую кнопку
        this.button = document.createElement('button')
        this.button.className = 'question-floating-button'
        this.button.innerHTML = `
            <span class="button-emoji">❓</span>
            <span class="button-text">Ответить на вопрос</span>
        `

        // Устанавливаем случайную позицию
        this.setRandomPosition()

        // Добавляем обработчики
        this.button.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            if (onClick) {
                onClick()
            }
        })

        // Добавляем анимацию появления
        this.button.style.opacity = '0'
        this.button.style.transform = 'scale(0.8)'

        document.body.appendChild(this.button)

        // Анимация появления
        setTimeout(() => {
            this.button.style.transition = 'opacity 0.3s, transform 0.3s'
            this.button.style.opacity = '1'
            this.button.style.transform = 'scale(1)'
        }, 100)

        this.isVisible = true

        return this.button
    }

    setRandomPosition() {
        if (!this.button) return

        const buttonWidth = 180
        const buttonHeight = 60
        const padding = 50

        // Исключаем области: верхняя панель и нижняя навигация
        const excludeTop = 100
        const excludeBottom = 150

        const maxX = window.innerWidth - buttonWidth - padding
        const maxY = window.innerHeight - buttonHeight - padding - excludeBottom

        const x = Math.floor(Math.random() * maxX) + padding
        const y = Math.floor(Math.random() * (maxY - excludeTop)) + excludeTop + padding

        this.button.style.left = `${x}px`
        this.button.style.top = `${y}px`
    }

    hide() {
        if (this.button && this.isVisible) {
            this.button.style.display = 'none'
            this.isVisible = false
        }
    }

    show() {
        if (this.button && !this.isVisible) {
            this.button.style.display = 'flex'
            this.setRandomPosition()
            this.isVisible = true
        }
    }

    remove() {
        if (this.button) {
            this.button.remove()
            this.button = null
        }
        this.isVisible = false
    }
}