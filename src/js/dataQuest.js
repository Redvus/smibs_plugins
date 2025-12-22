
class dataQuest {
    constructor(parameters) {
        this.initLayout();
    }

    initLayout() {
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
    }
}

export { dataQuest };