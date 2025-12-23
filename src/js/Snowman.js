import { gsap } from "gsap";

class GameSnowman {
    constructor(parameters) {
        this.initLayout();
        this.initSnowman();
        this.initGame();
        // this.initQuest();
        // this.initAnimation();

        // if (import.meta.env.DEV) {
        //     this.initDev();
        // }
    }

    initLayout() {
        this.bodyBlock = document.body;
        // this.gameSnowman = document.createElement("div");

        // this.gameSnowman.id = "gameSnowman";
        // this.gameSnowman.className = "anniversary";
        // this.bodyBlock.appendChild(this.gameSnowman);

        // this.gameSnowman.innerHTML = `
        //     <div class="game-area">
        //         <div class="game-info">
        //             <div class="question-box">
        //                 <div class="question-text" id="questionText">Нажмите "Начать игру", чтобы увидеть первый вопрос</div>
        //             </div>

        //             <div class="score">Найдено: <span id="score">0</span> из 10</div>

        //             <div class="progress">
        //                 <div class="progress-label">Прогресс:</div>
        //                 <div class="progress-bar">
        //                     <div class="progress-fill" id="progressFill"></div>
        //                 </div>
        //             </div>

        //             <div class="controls">
        //                 <button id="startBtn">Начать игру</button>
        //                 <button id="resetBtn" disabled>Сбросить игру</button>
        //             </div>
        //         </div>

        //         <div class="game-objects" id="gameArea">

        //             <!-- Объекты будут добавлены с помощью JavaScript -->
        //         </div>
        //     </div>
		// `;
    }

    initSnowman() {
        this.snowmanContainer = document.createElement('div');
        this.bodyBlock.appendChild(this.snowmanContainer);
        // this.snowmanContainer.id = 'snowman2026';
        this.snowmanContainer.classList = 'snowman-container';
        this.snowmanContainer.innerHTML = `
            <div class="snowman" id="snowman">
                <picture class="snowman__part" id="part-1">
                    <img src="/assets/games/snowman/images/snowman_1Circle.png">
                </picture>
                <picture class="snowman__part" id="part-2">
                    <img src="/assets/games/snowman/images/snowman_2Circle.png">
                </picture>
                <picture class="snowman__part" id="part-3">
                    <img src="/assets/games/snowman/images/snowman_3Circle.png">
                </picture>
                <picture class="snowman__part" id="part-4">
                    <img src="/assets/games/snowman/images/snowman_bucket.png">
                </picture>
                <picture class="snowman__part" id="part-5">
                    <img src="/assets/games/snowman/images/snowman_scurf.png">
                </picture>
                <picture class="snowman__part" id="part-6">
                    <img src="/assets/games/snowman/images/snowman_hands.png">
                </picture>
                <picture class="snowman__part" id="part-7">
                    <img src="/assets/games/snowman/images/snowman_mittens.png">
                </picture>
                <picture class="snowman__part" id="part-8">
                    <img src="/assets/games/snowman/images/snowman_broomstick.png">
                </picture>
                <picture class="snowman__part" id="part-9">
                    <img src="/assets/games/snowman/images/snowman_face.png">
                </picture>
                <picture class="snowman__part" id="part-10">
                    <img src="/assets/games/snowman/images/snowman_nose.png">
                </picture>
            </div>
        `;
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
        // Игровое состояние
        this.gameState = {
            currentPage: 1,
            totalPages: 10,
            collectedParts: new Set(), // Храним номера собранных частей
            answeredQuestions: new Set() // Храним номера отвеченных вопросов
        };

        // 1. Проверку прогресса при загрузке каждой страницы
        window.addEventListener('load', function() {
            const savedProgress = localStorage.getItem('snowmanProgress');
            if (savedProgress) {
                const progress = JSON.parse(savedProgress);
                this.gameState.collectedParts = new Set(progress.collectedParts || []);
                this.gameState.answeredQuestions = new Set(progress.answeredQuestions || []);

                // Показываем уже собранные части снеговика
                this.gameState.collectedParts.forEach(partNumber => {
                    this.showSnowmanPart(partNumber);
                });

                // Отмечаем уже отвеченные вопросы
                this.gameState.answeredQuestions.forEach(questionPart => {
                    const questionElement = document.querySelector(`[data-part="${questionPart}"]`);
                    if (questionElement) {
                        const options = questionElement.querySelectorAll('.option-btn');
                        options.forEach(btn => btn.disabled = true);
                    }
                });

                // updateProgress();
            }
        });
    }

    // Показать часть снеговика
    showSnowmanPart(partNumber) {
        const partElement = document.getElementById(`part-${partNumber}`);
        if (partElement) {
            partElement.style.opacity = '1';

            // Добавляем анимацию появления
            partElement.style.animation = 'fadeIn 0.5s ease';

            // Через 0.5 секунды убираем анимацию
            setTimeout(() => {
                partElement.style.animation = '';
            }, 500);
        }
    }

    // Обновить прогресс
    updateProgress() {
        const collectedCount = this.gameState.collectedParts.size;
        document.getElementById('collected-parts').textContent = collectedCount;

        // Проверяем, собран ли полностью снеговик
        if (collectedCount === 10) {
            // showCompletionMessage();
        }

        // Сохраняем прогресс в localStorage
        this.saveProgress();
    }

    // Сохранить прогресс в localStorage
    saveProgress() {
        const progress = {
            collectedParts: Array.from(this.gameState.collectedParts),
            answeredQuestions: Array.from(this.gameState.answeredQuestions)
        };
        localStorage.setItem('snowmanProgress', JSON.stringify(progress));
    }

    // Показать текущий вопрос
    showQuestion() {

    }

    initAnimation() {
        //
    }

    initDev() {
        this.gameSnowman.style.opacity = 1;
        this.gameSnowman.style.visibility = "visible";
        this.gameSnowman.style.zIndex = 9999;
        // this.bodyBlock.style.userSelect = 'none';
        // this.bodyBlock.style.overflow = 'hidden';
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
