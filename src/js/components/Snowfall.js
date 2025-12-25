export class Snowfall {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'snowfallCanvas';
        this.ctx = this.canvas.getContext('2d');
        this.snowflakes = [];
        this.animationId = null;

        this.config = {
            count: 200,
            size: 5,
            speed: 5,
            wind: 0.5
        };

        this.canvas.style.zIndex = '9999';

        this.setupCanvas();
        // this.bindEvents();
        this.createSnowflakes();
        this.animate();
    }

    setupCanvas() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        document.body.appendChild(this.canvas);

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        const countSlider = document.getElementById('snowflakesCount');
        const sizeSlider = document.getElementById('snowflakeSize');
        const speedSlider = document.getElementById('snowfallSpeed');
        const applyBtn = document.getElementById('applyBtn');
        const randomizeBtn = document.getElementById('randomizeBtn');

        // countSlider.addEventListener('input', (e) => {
        //     document.getElementById('countValue').textContent = e.target.value;
        // });

        sizeSlider.addEventListener('input', (e) => {
            document.getElementById('sizeValue').textContent = e.target.value + 'px';
        });

        speedSlider.addEventListener('input', (e) => {
            document.getElementById('speedValue').textContent = e.target.value;
        });

        applyBtn.addEventListener('click', () => {
            this.config.count = parseInt(countSlider.value);
            this.config.size = parseInt(sizeSlider.value);
            this.config.speed = parseInt(speedSlider.value);
            this.createSnowflakes();
        });

        randomizeBtn.addEventListener('click', () => {
            this.config.count = Math.floor(Math.random() * 951) + 50;
            this.config.size = Math.floor(Math.random() * 13) + 2;
            this.config.speed = Math.floor(Math.random() * 9) + 1;

            countSlider.value = this.config.count;
            sizeSlider.value = this.config.size;
            speedSlider.value = this.config.speed;

            document.getElementById('countValue').textContent = this.config.count;
            document.getElementById('sizeValue').textContent = this.config.size + 'px';
            document.getElementById('speedValue').textContent = this.config.speed;

            this.createSnowflakes();
        });
    }

    createSnowflakes() {
        this.snowflakes = [];

        for (let i = 0; i < this.config.count; i++) {
            this.snowflakes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * this.config.size + 1,
                speed: Math.random() * this.config.speed + 1,
                sway: Math.random() * 2 - 1,
                opacity: Math.random() * 0.8 + 0.2,
                swaySpeed: Math.random() * 0.05 + 0.01
            });
        }

        // document.getElementById('count').textContent =
        //     `Снежинок: ${this.config.count}`;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.snowflakes.forEach(snowflake => {
            snowflake.y += snowflake.speed;
            snowflake.x += Math.sin(Date.now() * 0.001 * snowflake.swaySpeed) * snowflake.sway;

            if (snowflake.y > this.canvas.height) {
                snowflake.y = -10;
                snowflake.x = Math.random() * this.canvas.width;
            }

            if (snowflake.x > this.canvas.width) {
                snowflake.x = 0;
            } else if (snowflake.x < 0) {
                snowflake.x = this.canvas.width;
            }

            this.ctx.beginPath();
            this.ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
            this.ctx.filter = `blur(${snowflake.size * 0.3}px)`;
            this.ctx.fill();
            this.ctx.filter = 'none';

            // Добавляем блик для снежинки
            this.ctx.beginPath();
            this.ctx.arc(
                snowflake.x - snowflake.size * 0.3,
                snowflake.y - snowflake.size * 0.3,
                snowflake.size * 0.4,
                0,
                Math.PI * 2
            );
            this.ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity * 0.7})`;
            this.ctx.fill();
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.canvas.remove();
    }
}

// Инициализация снегопада при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//     const snowfall = new Snowfall();

//     // Обработка выхода из полноэкранного режима
//     document.addEventListener('fullscreenchange', () => {
//         snowfall.resizeCanvas();
//     });

//     // Остановка анимации при скрытии вкладки
//     document.addEventListener('visibilitychange', () => {
//         if (document.hidden) {
//             cancelAnimationFrame(snowfall.animationId);
//         } else {
//             snowfall.animate();
//         }
//     });
// });