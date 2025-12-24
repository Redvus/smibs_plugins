export class Modal {
    constructor() {
        this.modal = null
        this.callback = null
    }

    init() {
        this.createModal()
    }

    createModal() {
        // Создаем модальное окно
        this.modal = document.createElement('div')
        this.modal.className = 'modal-overlay'
        this.modal.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h2 id="modalTitle">Вопрос</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="question-text" id="questionText"></div>
                    <div class="options" id="optionsContainer"></div>
                </div>
            </div>
        `

        document.body.appendChild(this.modal)

        // Обработчики событий
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.hide())
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hide()
            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'flex') {
                this.hide()
            }
        })
    }

    showQuestion(question, pageNumber, callback) {
        this.callback = callback

        // Обновляем заголовок
        document.getElementById('modalTitle').textContent = `Вопрос ${pageNumber}`
        document.getElementById('questionText').textContent = question.question

        // Создаем варианты ответов
        const optionsContainer = document.getElementById('optionsContainer')
        optionsContainer.innerHTML = ''

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div')
            optionElement.className = 'option'
            optionElement.textContent = option
            optionElement.addEventListener('click', () => {
                this.selectOption(index, question.correct)
            })
            optionsContainer.appendChild(optionElement)
        })

        this.show()
    }

    selectOption(selectedIndex, correctIndex) {
        const options = document.querySelectorAll('.option')
        const isCorrect = selectedIndex === correctIndex

        options.forEach((option, index) => {
            option.classList.remove('selected', 'correct', 'wrong')

            if (index === selectedIndex) {
                option.classList.add('selected')
                option.classList.add(isCorrect ? 'correct' : 'wrong')
            }

            if (index === correctIndex) {
                option.classList.add('correct')
            }

            // Отключаем клики после выбора
            option.style.pointerEvents = 'none'
        })

        // Показываем результат
        setTimeout(() => {
            if (this.callback) {
                this.callback(selectedIndex)
            }
            this.hide()
        }, 400)
    }

    show() {
        this.modal.style.display = 'flex'
        document.body.style.overflow = 'hidden'
    }

    hide() {
        this.modal.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
}