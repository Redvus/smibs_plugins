import { gsap } from "gsap";
// import { dataQuest } from './dataQuest.js'

class GameSnowman {
    constructor(parameters) {
        // this.gameData = new dataQuest();
        this.initLayout();
        this.initLayoutGame();
        this.initQuest();
        // this.initAnimation();

        this.initDev();
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.gameSnowman = document.createElement("div");

        this.gameSnowman.id = "gameSnowman";
        this.gameSnowman.className = "anniversary";
        this.bodyBlock.appendChild(this.gameSnowman);

        this.gameSnowman.innerHTML = `
            <div class="game-area">
                <div class="game-info">
                    <div class="question-box">
                        <div class="question-text" id="questionText">Нажмите "Начать игру", чтобы увидеть первый вопрос</div>
                    </div>

                    <div class="score">Найдено: <span id="score">0</span> из 10</div>

                    <div class="progress">
                        <div class="progress-label">Прогресс:</div>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                    </div>

                    <div class="controls">
                        <button id="startBtn">Начать игру</button>
                        <button id="resetBtn" disabled>Сбросить игру</button>
                    </div>
                </div>

                <div class="game-objects" id="gameArea">
                    <div class="snowman-container">
                        <div class="snowman">
                            <!-- Части снеговика будут появляться по мере нахождения объектов -->
                            <div class="snowman-part snowman-base" id="snowmanBase"></div>
                            <div class="snowman-part snowman-middle" id="snowmanMiddle"></div>
                            <div class="snowman-part snowman-head" id="snowmanHead"></div>
                            <div class="snowman-part snowman-hat" id="snowmanHat"></div>
                            <div class="snowman-part snowman-hat-top" id="snowmanHatTop"></div>
                            <div class="snowman-part snowman-eyes" id="snowmanEyes">
                                <div class="snowman-eye"></div>
                                <div class="snowman-eye"></div>
                            </div>
                            <div class="snowman-part snowman-nose" id="snowmanNose"></div>
                            <div class="snowman-part snowman-mouth" id="snowmanMouth">
                                <div class="snowman-mouth-dot"></div>
                                <div class="snowman-mouth-dot"></div>
                                <div class="snowman-mouth-dot"></div>
                            </div>
                            <div class="snowman-part snowman-buttons" id="snowmanButtons">
                                <div class="snowman-button"></div>
                                <div class="snowman-button"></div>
                                <div class="snowman-button"></div>
                            </div>
                            <div class="snowman-part snowman-arms" id="snowmanArms"></div>
                        </div>
                    </div>
                    <!-- Объекты будут добавлены с помощью JavaScript -->
                </div>
            </div>
		`;
    }

    initLayoutGame() {
        // Элементы DOM
        this.gameArea = document.getElementById('gameArea');
        this.questionText = document.getElementById('questionText');
        this.scoreElement = document.getElementById('score');
        this.progressFill = document.getElementById('progressFill');
        this.startBtn = document.getElementById('startBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.endMessage = document.getElementById('endMessage');
        this.finalScore = document.getElementById('finalScore');
        this.playAgainBtn = document.getElementById('playAgainBtn');

        // Игровые переменные
        this.currentQuestion = 0;
        this.score = 0;
        this.gameActive = false;
        this.objects = [];
        this.currentSnowmanPart = 0;

        // Обработчики событий для кнопок
        this.startBtn.addEventListener('click', () => {
            this.initGame();
        });
        this.resetBtn.addEventListener('click', () => {
            this.initGame();
        });
        // playAgainBtn.addEventListener('click', () => {
        //     endMessage.classList.remove('show');
        //     resetGame();
        // });
    }

    initQuest() {
        this.gameData = [
            {
                question: "Найдите круглый объект",
                object: "●",
                shape: "circle",
                color: "#4cc9f0"
            },
            {
                question: "Найдите квадратный объект",
                object: "■",
                shape: "square",
                color: "#4361ee"
            },
            {
                question: "Найдите треугольный объект",
                object: "▲",
                shape: "triangle",
                color: "#3a0ca3"
            },
            {
                question: "Найдите ромбовидный объект",
                object: "♦",
                shape: "diamond",
                color: "#7209b7"
            },
            {
                question: "Найдите звездчатый объект",
                object: "★",
                shape: "star",
                color: "#f72585"
            },
            {
                question: "Найдите сердечко",
                object: "♥",
                shape: "heart",
                color: "#ff4d6d"
            },
            {
                question: "Найдите лунный объект",
                object: "☾",
                shape: "moon",
                color: "#ff9e00"
            },
            {
                question: "Найдите солнце",
                object: "☀",
                shape: "sun",
                color: "#ffd000"
            },
            {
                question: "Найдите снежинку",
                object: "❄",
                shape: "snowflake",
                color: "#00b4d8"
            },
            {
                question: "Найдите музыкальную ноту",
                object: "♪",
                shape: "music",
                color: "#9d4edd"
            }
        ];

        // Части снеговика в порядке их появления
        this.snowmanParts = [
            'snowmanBase',
            'snowmanMiddle',
            'snowmanHead',
            'snowmanHat',
            'snowmanHatTop',
            'snowmanEyes',
            'snowmanNose',
            'snowmanMouth',
            'snowmanButtons',
            'snowmanArms'
        ];
    }

    initGame() {
        this.createObjects();

        // Сбрасываем состояние игры
        this.currentQuestion = 0;
        this.score = 0;
        this.currentSnowmanPart = 0;
        this.updateScore();
        this.updateProgress();

        // Скрываем все части снеговика
        this.snowmanParts.forEach(partId => {
            const part = document.getElementById(partId);
            if (part) part.classList.remove('show');
        });

        // Скрываем сообщение о завершении
        // endMessage.classList.remove('show');

        // Активируем кнопки
        this.startBtn.disabled = true;
        this.resetBtn.disabled = false;

        // Запускаем первый вопрос
        this.showQuestion();
        this.gameActive = true;
    }

    // Создание объектов на игровом поле
    createObjects() {
        // Очищаем игровое поле (кроме снеговика)
        this.snowmanContainer = document.querySelector('.snowman-container');
        this.gameArea.innerHTML = '';
        if (this.snowmanContainer) {
            this.gameArea.appendChild(this.snowmanContainer);
        }

        // Создаем объекты
        this.objects = [];
        const areaWidth = gameArea.clientWidth - 100;
        const areaHeight = gameArea.clientHeight - 100;

        this.gameData.forEach((item, index) => {
            // Случайное положение для объекта
            const x = Math.floor(Math.random() * areaWidth);
            const y = Math.floor(Math.random() * areaHeight);

            // Создаем элемент объекта
            const objectElement = document.createElement('div');
            objectElement.className = 'object';
            objectElement.id = `object-${index}`;
            objectElement.textContent = item.object;
            objectElement.style.left = `${x}px`;
            objectElement.style.top = `${y}px`;
            objectElement.style.backgroundColor = item.color;

            // Добавляем обработчик клика
            objectElement.addEventListener('click', () => this.handleObjectClick(index));

            // Добавляем на игровое поле
            this.gameArea.appendChild(objectElement);

            // Сохраняем ссылку на объект
            this.objects.push({
                element: objectElement,
                found: false,
                ...item
            });
        });
    }

    // Показать текущий вопрос
    showQuestion() {
        if (this.currentQuestion < this.gameData.length) {
            this.questionText.textContent = this.gameData[this.currentQuestion].question;

            // Сбрасываем состояние объектов
            this.objects.forEach((obj, index) => {
                obj.element.classList.remove('active');
                obj.element.classList.remove('found');

                // Делаем активным объект, соответствующий текущему вопросу
                if (index === this.currentQuestion) {
                    obj.element.classList.add('active');
                }
            });
        } else {
            // Игра завершена
            // endGame();
        }
    }

    // Добавить часть снеговика
    addSnowmanPart() {
        if (this.currentSnowmanPart < this.snowmanParts.length) {
            const partId = this.snowmanParts[this.currentSnowmanPart];
            const part = document.getElementById(partId);
            if (part) {
                part.classList.add('show');

                // Анимация появления
                part.style.animation = 'none';
                setTimeout(() => {
                    part.style.animation = 'appear 0.5s ease';
                }, 10);
            }
            this.currentSnowmanPart++;
        }
    }

    // Обработка клика по объекту
    handleObjectClick(index) {
        if (!this.gameActive || this.objects[index].found) return;

        // Проверяем, соответствует ли объект текущему вопросу
        if (index === this.currentQuestion) {
            // Правильный объект найден
            this.objects[index].found = true;
            this.objects[index].element.classList.remove('active');
            this.objects[index].element.classList.add('found');

            // Увеличиваем счет
            this.score++;
            this.updateScore();

            // Добавляем часть снеговика
            this.addSnowmanPart();

            // Переходим к следующему вопросу
            this.currentQuestion++;
            this.updateProgress();

            // Небольшая задержка перед следующим вопросом
            setTimeout(() => {
                this.showQuestion();
            }, 800);
        } else {
            // Неправильный объект - небольшая анимация
            // const wrongObject = objects[index].element;
            // wrongObject.style.transform = 'scale(1.3)';
            // wrongObject.style.backgroundColor = '#f72585';

            // setTimeout(() => {
            //     wrongObject.style.transform = '';
            //     wrongObject.style.backgroundColor = objects[index].color;
            // }, 300);
        }
    }

    // Обновление счета
    updateScore() {
        this.scoreElement.textContent = this.score;
    }

    // Обновление прогресса
    updateProgress() {
        const progress = ((this.currentQuestion) / this.gameData.length) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    // Завершение игры
    endGame() {
        this.gameActive = false;
        this.finalScore.textContent = this.score;
        this.endMessage.classList.add('show');
        this.questionText.textContent = 'Игра завершена! Нажмите "Сбросить игру", чтобы начать заново';
    }

    initAnimation() {
        //
    }

    initDev() {
        this.gameSnowman.style.opacity = 1;
        this.gameSnowman.style.visibility = "visible";
        this.gameSnowman.style.zIndex = 9999;
        this.bodyBlock.style.userSelect = 'none';
        this.bodyBlock.style.overflow = 'hidden';
    }

    initHide(delay) {
        let tl = new gsap.timeline({
            delay: delay,
            onComplete: () => {
                this.bodyBlock.removeChild(this.gameSnowman);
            },
        });

        tl.to(this.gameSnowman, {
            autoAlpha: 0,
            duration: 0.6,
            delay: "-0.8",
            display: "none",
            zIndex: "-1",
            ease: "power1",
        });
    }
}

export { GameSnowman };
