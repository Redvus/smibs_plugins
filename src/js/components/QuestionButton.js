import { QuestionModal } from "./QuestionModal.js";

export class QuestionButton {
    constructor() {
        this.questionBtn = null;
        this.createQuestionButton();
        this.positionButtonRandomly();
        this.openModal = new QuestionModal();
        this.openModal = this.openModal.openModal.bind(this.openModal);
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
        document.body.appendChild(this.questionBtn);

        // Размещаем кнопку в случайном месте
        this.positionButtonRandomly();

        // Обработчик для кнопки
        this.questionBtn.addEventListener('click', () => this.openModal());
    }

    // Размещение кнопки в случайном месте
    positionButtonRandomly() {
        if (!this.questionBtn) return;

        // Получаем размеры окна
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Учитываем отступы от краев
        const margin = 20;
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
}