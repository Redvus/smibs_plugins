import { GAME_CONFIG } from './utils/config.js';
import {gsap} from "gsap";

class SnowmanPage {
    constructor(
        pageID,
        questionText,
        questionCorrect,
        questionOptions,
        partID,
        nextPageUrl) {

        this.pageID = pageID;
        this.questionText = questionText;
        this.questionCorrect = questionCorrect;
        this.questionOptions = questionOptions;
        this.partID = partID;
        this.nextPageUrl = nextPageUrl;

        this.selectedAnswer = null;
        this.isAnswered = false;
        this.collectedParts = [];
        this.questionBtn = null;

        this.init();
    }

    // Инициализация игры
    init() {
        this.snowmanGameBlock = document.getElementById('snowmanGame_01-26');

        // Загружаем прогресс
        this.loadProgress();

        // Создаем кнопку вопроса
        this.createQuestionButton();

        // Отображаем собранные части снеговика
        this.renderSnowman();

        // Обновляем отображение прогресса
        this.updateProgressDisplay();

        // Настраиваем обработчики событий
        this.setupEventListeners();

        // Показываем снеговика, если есть части
        if (this.collectedParts.length > 0) {
            this.showSnowmanDisplay();
        }
    }

    // Загрузка прогресса из localStorage
    loadProgress() {
        try {
            const savedProgress = localStorage.getItem('snowmanProgress');
            if (savedProgress) {
                this.collectedParts = JSON.parse(savedProgress);
                console.log("Загружен прогресс:", this.collectedParts);
            }
        } catch (e) {
            console.error("Ошибка при загрузке прогресса:", e);
            this.collectedParts = [];
        }
    }

    // Сохранение прогресса в localStorage
    saveProgress() {
        try {
            localStorage.setItem('snowmanProgress', JSON.stringify(this.collectedParts));
            console.log("Прогресс сохранен:", this.collectedParts);
        } catch (e) {
            console.error("Ошибка при сохранении прогресса:", e);
        }
    }

    // Создание и размещение кнопки вопроса
    createQuestionButton() {
        // Создаем кнопку
        this.questionBtn = document.createElement('button');
        this.questionBtn.id = 'questionBtn';
        this.questionBtn.className = 'floating-question-btn';
        this.questionBtn.title = 'Нажмите, чтобы ответить на вопрос';
        this.questionBtn.innerHTML = '?';

        // Добавляем на страницу
        this.snowmanGameBlock.appendChild(this.questionBtn);

        // Размещаем кнопку в случайном месте
        this.positionButtonRandomly();

        // Обработчик для кнопки
        this.questionBtn.addEventListener('click', () => this.openModal());
    }

    // Размещение кнопки в случайном месте
    positionButtonRandomly() {
        if (!this.questionBtn) return;

        // Получаем размеры окна
        const windowWidth = window.innerWidth * 0.8;
        const windowHeight = window.innerHeight * 0.8;

        // Учитываем отступы от краев
        const margin = 60;
        const buttonSize = 60;

        // Генерируем случайные координаты
        const maxX = windowWidth - buttonSize - margin;
        const maxY = windowHeight - buttonSize - margin;

        const randomX = margin + Math.random() * maxX;
        const randomY = margin + Math.random() * maxY;

        // Устанавливаем позицию
        this.questionBtn.style.left = `${randomX}px`;
        this.questionBtn.style.top = `${randomY}px`;

        // Перепозиционируем при изменении размера окна
        window.addEventListener('resize', () => {
            this.positionButtonRandomly();
        });
    }

    // Открытие модального окна
    openModal() {
        const modalOverlay = document.getElementById('modalOverlay');
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const resultMessage = document.getElementById('resultMessage');
        const nextBtn = document.getElementById('nextBtn');

        // Устанавливаем текст вопроса
        questionText.textContent = this.questionText;

        // Очищаем предыдущие результаты
        resultMessage.className = 'result-message';
        resultMessage.style.display = 'none';
        nextBtn.classList.remove('show');

        // Очищаем контейнер с вариантами
        optionsContainer.innerHTML = '';

        // Перемешиваем варианты ответов
        const shuffledOptions = [...this.questionOptions].sort(() => Math.random() - 0.5);

        // Создаем кнопки для каждого варианта ответа
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;

            // Если уже отвечали на этой странице, показываем правильный ответ
            if (this.collectedParts.includes(this.partID)) {
                if (option === this.questionCorrect) {
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
        if (this.collectedParts.includes(this.partID) && this.nextPageUrl) {
            nextBtn.classList.add('show');
            nextBtn.onclick = () => {
                window.location.href = this.nextPageUrl;
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

        const isCorrect = answer === this.questionCorrect;
        const resultMessage = document.getElementById('resultMessage');
        const optionsContainer = document.getElementById('optionsContainer');
        const nextBtn = document.getElementById('nextBtn');
        const optionButtons = optionsContainer.querySelectorAll('.option-btn');

        // Показываем правильные/неправильные ответы
        optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === this.questionCorrect) {
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
            if (!this.collectedParts.includes(this.partID)) {
                this.collectedParts.push(this.partID);
                this.saveProgress();
                this.renderSnowman();
                this.showSnowmanDisplay();
            }

            // Показываем кнопку перехода на следующую страницу
            if (this.nextPageUrl) {
                nextBtn.classList.add('show');
                nextBtn.onclick = () => {
                    window.location.href = this.nextPageUrl;
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

    // Отображение снеговика в правом нижнем углу
    renderSnowman() {
        const display = document.getElementById('snowmanDisplay');

        // Очищаем дисплей
        display.innerHTML = '';

        // Добавляем части снеговика, которые уже собраны
        this.collectedParts.forEach(partId => {
            const part = GAME_CONFIG.SNOWMAN_PARTS[partId];
            if (part) {
                const partElement = document.createElement('picture');
                partElement.innerHTML = `<img src="/assets/games/snowman/images/${part.image}" alt="${part.name}">`;
                partElement.className = `snowman__part`;
                partElement.id = `${part.id}`;
                display.appendChild(partElement);
            }
        });
    }

    // Показ дисплея снеговика с анимацией
    showSnowmanDisplay() {
        const display = document.getElementById('snowmanDisplay');
        const lastPart = display.lastElementChild;

        if (lastPart) {
            lastPart.classList.add('new');

            // Убираем класс анимации после её завершения
            setTimeout(() => {
                lastPart.classList.remove('new');
            }, 500);
        }
    }

    // Обновление отображения прогресса
    updateProgressDisplay() {
        const partsCount = document.getElementById('partsCount');
        const progressFill = document.getElementById('progressFill');

        if (partsCount) {
            partsCount.textContent = this.collectedParts.length;
        }

        if (progressFill) {
            progressFill.style.width = `${(this.collectedParts.length / 10) * 100}%`;
        }
    }

    // Сброс прогресса
    resetProgress() {
        if (confirm("Вы уверены, что хотите сбросить весь прогресс? Все собранные части снеговика будут удалены.")) {
            this.collectedParts = [];
            this.selectedAnswer = null;
            this.isAnswered = false;

            // Очищаем localStorage
            localStorage.removeItem('snowmanProgress');

            // Обновляем отображение
            this.renderSnowman();
            this.updateProgressDisplay();

            // Показываем кнопку вопроса
            if (this.questionBtn) {
                this.questionBtn.style.display = 'flex';
            }

            // Сбрасываем состояние модального окна
            const resultMessage = document.getElementById('resultMessage');
            const nextBtn = document.getElementById('nextBtn');
            if (resultMessage) {
                resultMessage.className = 'result-message';
                resultMessage.style.display = 'none';
            }
            if (nextBtn) {
                nextBtn.classList.remove('show');
            }

            alert("Прогресс сброшен!");
        }
    }

    // Настройка обработчиков событий
    setupEventListeners() {
        // Обработчик закрытия модального окна
        const closeModalBtn = document.getElementById('closeModal');
        const modalOverlay = document.getElementById('modalOverlay');

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => this.closeModal());
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    this.closeModal();
                }
            });
        }

        // Обработчик кнопки сброса
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetProgress());
        }

        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Проверяем, был ли уже дан ответ на этой странице
        if (this.collectedParts.includes(this.partID)) {
            // Если уже отвечали правильно, скрываем кнопку вопроса
            if (this.questionBtn) {
                this.questionBtn.style.display = 'none';
            }
        }
    }
}

export { SnowmanPage };