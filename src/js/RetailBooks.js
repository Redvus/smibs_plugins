class RetailBooks {
    constructor() {
        this.initLayout();
        this.initAppend();
    }

    initLayout() {
        this.mainContentInside = document.querySelector(
            ".main-content__inside"
        );

        this.retailBooksTitle = document.createElement("div");
        this.retailBooksTitle.className = "main-content__title";
        this.retailBooksTitle.innerHTML = `
            <h2>Аренда книг</h2>
        `;

        this.retailBooksContent = document.createElement("div");
        this.retailBooksContent.className = "retail__content";

        let countBooks = 11; // Example count
        this.retailBookTitles = [
            "Непоколебимое",
            "Властелин колец",
            "Преступление и наказание",
            "Мастер и Маргарита",
            "Война и мир",
            "Анна Каренина",
            "1984",
            "Улисс",
            "Гордость и предубеждение",
            "Гарри Поттер",
        ];
        this.retailBookAuthors = [
            "Забавнов А. Т.",
            "Иванов И. И.",
            "Петров П. П.",
            "Сидоров С. С.",
            "Кузнецов К. К.",
            "Смирнов С. С.",
            "Попов П. П.",
            "Васильев В. В.",
            "Михайлов М. М.",
            "Новиков Н. Н.",
        ];
        this.retailBookCovers = [
            "assets/images/retailBook_1.jpg",
            "assets/images/retailBook_2.jpg",
            "assets/images/retailBook_3.jpg",
            "assets/images/retailBook_4.jpg",
            "assets/images/retailBook_5.jpg",
            "assets/images/retailBook_6.jpg",
            "assets/images/retailBook_7.jpg",
            "assets/images/retailBook_8.jpg",
            "assets/images/retailBook_9.jpg",
            "assets/images/retailBook_10.jpg",
            "assets/images/retailBook_11.jpg",
            "assets/images/retailBook_12.jpg",
        ];

        for (let i = 0; i < countBooks; i++) {
            const retailBooksBlock = document.createElement("div");
            retailBooksBlock.className = "retail__block";

            const retailBookAuthorsRandom =
                this.retailBookAuthors[
                    Math.floor(Math.random() * this.retailBookAuthors.length)
                ];
            const retailBookTitlesRandom =
                this.retailBookTitles[
                    Math.floor(Math.random() * this.retailBookTitles.length)
                ];
            const retailBookCoversRandom =
                this.retailBookCovers[
                    Math.floor(Math.random() * this.retailBookCovers.length)
                ];

            retailBooksBlock.innerHTML = `
                <picture class="retail__block_image">
                    <img src="${retailBookCoversRandom}" load="lazy" alt="Книга №${
                i + 1
            }">
                </picture>
                <div class="retail__block_info">
                    <h4 class="retail__block_author">${retailBookAuthorsRandom}</h4>
                    <h3 class="retail__block_title">${retailBookTitlesRandom}</h3>

                    <!--<p class="retail__block_description">Идейные соображения высшего порядка, а также выбранный нами инновационный путь представляет собой интересный эксперимент системы массового участия...</p>-->
                </div>
                <div class="retail__block_footer">
                    <button class="retail__block_button">Взять читать</button>
                </div>
            `;
            this.retailBooksContent.appendChild(retailBooksBlock);
        }
    }

    initAppend() {
        this.mainContentInside.appendChild(this.retailBooksTitle);
        this.mainContentInside.appendChild(this.retailBooksContent);
        // this.retailBooksContent.appendChild(this.retailBooksBlock);
    }
}

export { RetailBooks };
