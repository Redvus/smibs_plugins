

export class QuestionModal {
    constructor() {
        this.selectedAnswer = null;
        this.isAnswered = false;
    }

    // Открытие модального окна
    openModal() {
        const modalOverlay = document.getElementById('modalOverlay');
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const resultMessage = document.getElementById('resultMessage');
        const nextBtn = document.getElementById('nextBtn');

        // Устанавливаем текст вопроса
        questionText.textContent = this.config.question.text;

        // Очищаем предыдущие результаты
        resultMessage.className = 'result-message';
        resultMessage.style.display = 'none';
        nextBtn.classList.remove('show');

        // Очищаем контейнер с вариантами
        optionsContainer.innerHTML = '';

        // Перемешиваем варианты ответов
        const shuffledOptions = [...this.config.question.options].sort(() => Math.random() - 0.5);

        // Создаем кнопки для каждого варианта ответа
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;

            // Если уже отвечали на этой странице, показываем правильный ответ
            if (this.collectedParts.includes(this.config.question.partId)) {
                if (option === this.config.question.correctAnswer) {
                    button.classList.add('correct');
                }
                button.disabled = true;
            }

            button.addEventListener('click', () => this.selectAnswer(option));
            optionsContainer.appendChild(button);
        });

        // Показываем модальное окно
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку

        // Если уже отвечали правильно на этой странице, показываем кнопку следующей страницы
        if (this.collectedParts.includes(this.config.question.partId) && this.config.question.nextPageUrl) {
            nextBtn.classList.add('show');
            nextBtn.onclick = () => {
                window.location.href = this.config.question.nextPageUrl;
            };
        }
    }

    // Закрытие модального окна
    closeModal() {
        const modalOverlay = document.getElementById('modalOverlay');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Возвращаем прокрутку
    }

    // Выбор ответа
    selectAnswer(answer) {
        if (this.isAnswered) return;

        this.selectedAnswer = answer;
        this.isAnswered = true;

        const isCorrect = answer === this.config.question.correctAnswer;
        const resultMessage = document.getElementById('resultMessage');
        const optionsContainer = document.getElementById('optionsContainer');
        const nextBtn = document.getElementById('nextBtn');
        const optionButtons = optionsContainer.querySelectorAll('.option-btn');

        // Показываем правильные/неправильные ответы
        optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === this.config.question.correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.textContent === answer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Показываем сообщение с результатом
        if (isCorrect) {
            resultMessage.textContent = "Правильно! Вы получили часть снеговика!";
            resultMessage.className = 'result-message correct';

            // Добавляем часть снеговика, если её еще нет
            if (!this.collectedParts.includes(this.config.question.partId)) {
                this.collectedParts.push(this.config.question.partId);
                this.saveProgress();
                this.renderSnowman();
                this.showSnowmanDisplay();
            }

            // Показываем кнопку перехода на следующую страницу
            if (this.config.question.nextPageUrl) {
                nextBtn.classList.add('show');
                nextBtn.onclick = () => {
                    window.location.href = this.config.question.nextPageUrl;
                };
            }

            // Скрываем кнопку вопроса через 2 секунды
            setTimeout(() => {
                if (this.questionBtn) {
                    this.questionBtn.style.display = 'none';
                }
            }, 2000);
        } else {
            resultMessage.textContent = "Неправильно! Попробуйте найти правильный ответ.";
            resultMessage.className = 'result-message incorrect';

            // Через 3 секунды позволяем выбрать снова
            setTimeout(() => {
                this.isAnswered = false;
                resultMessage.textContent = "Попробуйте еще раз!";
            }, 3000);
        }

        // Обновляем отображение прогресса
        this.updateProgressDisplay();
    }
}