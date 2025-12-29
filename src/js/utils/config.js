export const GAME_CONFIG = {
    TOTAL_PAGES: 10,

    SNOWMAN_PARTS: [
        { id: 'part-1', name: 'BottomCircle', image: 'snowman_1Circle.webp', order: 1 },
        { id: 'part-2', name: 'MiddleCircle', image: 'snowman_2Circle.webp', order: 2 },
        { id: 'part-3', name: 'TopCircle', image: 'snowman_3Circle.webp', order: 3 },
        { id: 'part-4', name: 'Bucket', image: 'snowman_bucket.webp', order: 4 },
        { id: 'part-5', name: 'Scarf', image: 'snowman_scurf.webp', order: 5 },
        { id: 'part-6', name: 'Hands', image: 'snowman_hands.webp', order: 6 },
        { id: 'part-7', name: 'Mittens', image: 'snowman_mittens.webp', order: 7 },
        { id: 'part-8', name: 'Broomstick', image: 'snowman_broomstick.webp', order: 8 },
        { id: 'part-9', name: 'Face', image: 'snowman_face.webp', order: 9 },
        { id: 'part-10', name: 'Nose', image: 'snowman_nose.webp', order: 10 }
    ],

    QUESTIONS: {
        1: {
            question: "Какой химический элемент обозначается символом 'H'?",
            options: ["Гелий", "Водород", "Кислород", "Азот"],
            correct: 1,
            part: 'part-1',
            image: '/public/images/winter-forest.jpg'
        },
        2: {
            question: "Сколько планет в Солнечной системе?",
            options: ["8", "9", "7", "10"],
            correct: 0,
            part: 'part-2',
            image: '/public/images/snow-plain.jpg'
        },
        3: {
            question: "Как называется самая длинная река в мире?",
            options: ["Амазонка", "Нил", "Янцзы", "Миссисипи"],
            correct: 0,
            part: 'part-3',
            image: '/public/images/mountain-peak.jpg'
        },
        4: {
            question: "Кто написал роман 'Война и мир'?",
            options: ["Фёдор Достоевский", "Лев Толстой", "Александр Пушкин", "Антон Чехов"],
            correct: 1,
            part: 'part-4',
            image: '/public/images/northern-lights.jpg'
        },
        5: {
            question: "Какой газ преобладает в атмосфере Земли?",
            options: ["Кислород", "Углекислый газ", "Азот", "Водород"],
            correct: 2,
            part: 'part-5',
            image: '/public/images/ice-cave.jpg'
        },
        6: {
            question: "Столица Австралии?",
            options: ["Сидней", "Мельбурн", "Канберра", "Брисбен"],
            correct: 2,
            part: 'part-6',
            image: '/public/images/frozen-lake.jpg'
        },
        7: {
            question: "Сколько дней в високосном году?",
            options: ["365", "366", "364", "367"],
            correct: 1,
            part: 'part-7',
            image: '/public/images/polar-night.jpg'
        },
        8: {
            question: "Кто открыл закон всемирного тяготения?",
            options: ["Альберт Эйнштейн", "Исаак Ньютон", "Галилео Галилей", "Николай Коперник"],
            correct: 1,
            part: 'part-8',
            image: '/public/images/arctic-wind.jpg'
        },
        9: {
            question: "Какая планета известна своими кольцами?",
            options: ["Юпитер", "Сатурн", "Уран", "Нептун"],
            correct: 1,
            part: 'part-9',
            image: '/public/images/snow-storm.jpg'
        },
        10: {
            question: "Как называется самая высокая гора в мире?",
            options: ["Килиманджаро", "Эверест", "Мак-Кинли", "Аконкагуа"],
            correct: 1,
            part: 'part-10',
            image: '/public/images/ice-palace.jpg'
        }
    },

    // РАЗНОЕ СОДЕРЖИМОЕ для каждой страницы
    PAGE_CONTENT: {
        1: {
            title: "❄️ Зимний лес ❄️",
            description: "Вы находитесь в заснеженном зимнем лесу. Сосны стоят в белых шапках снега, а вокруг царит тишина, нарушаемая лишь хрустом снега под ногами. Воздух чист и морозен.",
            background: "winter-forest",
            image: "/assets/games/snowman/images/back/forest-sculpt-snowman.jpg",
            themeColor: "#2ecc71", // Зеленый
            facts: [
                "🌲 В зимнем лесу температура может быть на 5-10°C ниже, чем в городе",
                "🐇 Зимой зайцы меняют серую шубку на белую",
                "❄️ Снег сохраняет тепло и защищает растения от мороза"
            ]
        },
        2: {
            title: "🏔️ Горная вершина 🏔️",
            description: "Вы поднялись на заснеженную горную вершину. Отсюда открывается потрясающий вид на долины, покрытые белым покрывалом. Воздух разрежен и холоден.",
            background: "mountain-peak",
            image: "/assets/games/snowman/images/back/mountain-sculpt-snowman.jpg",
            themeColor: "#3498db", // Синий
            facts: [
                "⛰️ На вершинах гор снег лежит круглый год",
                "🌬️ Скорость ветра на вершинах может достигать 200 км/ч",
                "☀️ На высоте солнце светит ярче из-за разреженного воздуха"
            ]
        },
        3: {
            title: "🏡 Деревенский двор 🏡",
            description: "Вы в уютном деревенском дворе. Деревянный дом украшен резными наличниками, а во дворе дети лепят снеговика. Из трубы идет дымок.",
            background: "village-yard",
            image: "/assets/games/snowman/images/back/boys-sculpt-snowman.jpg",
            themeColor: "#e74c3c", // Красный
            facts: [
                "🪵 В деревнях до сих пор топят печи дровами",
                "🧺 Зимой белье сушат на морозе - оно становится хрустящим",
                "🍎 В погребах хранят запасы овощей и фруктов"
            ]
        },
        4: {
            title: "🏰 Ледяной замок 🏰",
            description: "Перед вами величественный замок, полностью сделанный изо льда. Стены переливаются всеми цветами радуги, а сосульки сверкают как бриллианты.",
            background: "ice-castle",
            image: "/assets/games/snowman/images/back/castle-sculpt-snowman.webp",
            themeColor: "#9b59b6", // Фиолетовый
            facts: [
                "🧊 Ледяные замки строят при температуре ниже -10°C",
                "💎 Лед для строительства берут из чистых озер",
                "🎨 Лед можно окрашивать пищевыми красителями"
            ]
        },
        5: {
            title: "🌌 Северное сияние 🌌",
            description: "Ночное небо озарено магическим танцем северного сияния. Зеленые, фиолетовые и розовые лучи переливаются и движутся, как живые.",
            background: "northern-lights",
            image: "/assets/games/snowman/images/back/light-sculpt-snowman.jpg",
            themeColor: "#1abc9c", // Бирюзовый
            facts: [
                "✨ Северное сияние вызывается солнечным ветром",
                "🌈 Видно только вблизи магнитных полюсов Земли",
                "📅 Лучше всего наблюдать с сентября по март"
            ]
        },
        6: {
            title: "❄️ Снежная пустыня ❄️",
            description: "Бескрайняя снежная равнина простирается до горизонта. Ни деревца, ни холма - только белое покрывало снега под свинцовым небом.",
            background: "snow-desert",
            image: "/assets/games/snowman/images/back/desert-sculpt-snowman.jpg",
            themeColor: "#ecf0f1", // Белый
            facts: [
                "🌪️ В снежных пустынях бывают белые бури",
                "🐾 Животные оставляют четкие следы на снегу",
                "☃️ Снег скрипит только при температуре ниже -10°C"
            ]
        },
        7: {
            title: "🎿 Горнолыжный склон 🎿",
            description: "Вы на популярном горнолыжном курорте. Лыжники и сноубордисты несутся по идеально укатанным склонам. В воздухе витает дух спорта и веселья.",
            background: "ski-slope",
            image: "/assets/games/snowman/images/back/ski-sculpt-snowman.jpg",
            themeColor: "#e67e22", // Оранжевый
            facts: [
                "⛷️ Первые лыжи появились 4000 лет назад",
                "🎯 Современные лыжи делают из карбона и титана",
                "🏔️ Самый длинный склон - 21 км в Швейцарии"
            ]
        },
        8: {
            title: "🛷 Собачья упряжка 🛷",
            description: "Вы мчитесь на собачьей упряжке по заснеженной тропе. Хаски весело бегут, звенят бубенцы, а снежная пыль летит из-под полозьев.",
            background: "dog-sled",
            image: "/assets/games/snowman/images/back/dogs-sculpt-snowman.jpg",
            themeColor: "#34495e", // Темно-синий
            facts: [
                "🐕 В упряжке обычно 6-8 собак",
                "🏆 Гонки на собачьих упряжках - олимпийский вид спорта",
                "🛷 Сани делают из легкой древесины ясеня или березы"
            ]
        },
        9: {
            title: "🎣 Ледяная рыбалка 🎣",
            description: "Вы на замерзшем озере. Рыбаки сидят у лунок, над которыми поднимается пар. Тишину нарушает лишь скрип пешни и редкие возгласы улова.",
            background: "ice-fishing",
            image: "/assets/games/snowman/images/back/fishing-sculpt-snowman.jpg",
            themeColor: "#2980b9", // Темно-синий
            facts: [
                "🎣 Лед должен быть толщиной не менее 10 см",
                "🐟 Зимой рыба менее активна, но крупнее",
                "🔥 Рыбаки греются у переносных печек"
            ]
        },
        10: {
            title: "🎄 Новогодняя площадь 🎄",
            description: "Городская площадь украшена к Новому году. Огромная ель сверкает гирляндами, дети катаются на коньках, пахнет глинтвейном и мандаринами.",
            background: "new-year-square",
            image: "/assets/games/snowman/images/back/square-sculpt-snowman.jpg",
            themeColor: "#c0392b", // Темно-красный
            facts: [
                "🎅 Первая публичная елка была установлена в 1510 году",
                "⛸️ Катки заливают слоями по 2-3 см",
                "🍷 Глинтвейн согревает благодаря специям"
            ]
        }
    }
}

export const PAGE_PATTERNS = {
    // Форматы имён файлов
    filePatterns: [
        /page(\d+)\.html/,
        /vopros(\d+)\.html/,
        /question(\d+)\.html/,
        /stranica(\d+)\.html/,
        /(\d+)\.html/
    ],

    // Пути в URL
    pathPatterns: [
        /\/pages?\/(\d+)/,
        /\/questions?\/(\d+)/,
        /\/voprosy?\/(\d+)/
    ],

    // Query параметры
    queryParam: 'page',

    // Hash формат
    hashPattern: /#(?:page|question|vopros)?(\d+)/
}

export function detectPageNumber() {
    // Проверяем все возможные варианты
    const checks = [
        checkDataAttribute,
        checkQueryParam,
        checkHash,
        checkFilename,
        checkPath
    ]

    for (const check of checks) {
        const result = check()
        if (result !== null) {
            return result
        }
    }

    return 'home'
}

function checkDataAttribute() {
    if (document.body.dataset.page) {
        const page = parseInt(document.body.dataset.page)
        return !isNaN(page) ? page : null
    }
    return null
}

function checkQueryParam() {
    const params = new URLSearchParams(window.location.search)
    const page = params.get(PAGE_PATTERNS.queryParam)
    if (page && !isNaN(page)) {
        return parseInt(page)
    }
    return null
}

function checkHash() {
    const hash = window.location.hash
    if (hash && PAGE_PATTERNS.hashPattern) {
        const match = hash.match(PAGE_PATTERNS.hashPattern)
        if (match) {
            return parseInt(match[1])
        }
    }
    return null
}

function checkFilename() {
    const filename = window.location.pathname.split('/').pop()
    if (!filename) return null

    for (const pattern of PAGE_PATTERNS.filePatterns) {
        const match = filename.match(pattern)
        if (match) {
            return parseInt(match[1])
        }
    }

    // Специальные файлы
    if (filename === 'index.html' || filename === '') return 'home'
    if (filename === 'result.html') return 'result'

    return null
}

function checkPath() {
    const path = window.location.pathname
    for (const pattern of PAGE_PATTERNS.pathPatterns) {
        const match = path.match(pattern)
        if (match) {
            return parseInt(match[1])
        }
    }
    return null
}