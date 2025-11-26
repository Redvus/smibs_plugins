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

        this.retailBooksContent = document.createElement("ul");
        this.retailBooksContent.className = "retail__content";

        let countBooks = 10; // Example count

        for (let i = 0; i < countBooks.length; i++) {
            const retailBooksBlock = document.createElement("li")[i];
            retailBooksBlock.className = "retail__block";
            retailBooksBlock.innerHTML = `
                <div class="retail__item-image">
                    <img src="path_to_image.jpg" alt="Book Image">
                </div>
                <div class="retail__item-info">
                    <h3 class="retail__item-title">Book Title ${i + 1}</h3>
                    <p class="retail__item-author">Author Name</p>
                    <p class="retail__item-description">Brief description of the book.</p>
                </div>
            `;
            this.retailBooksContent.appendChild(retailBooksBlock[i]);
        }
    }

    initAppend() {
        this.mainContentInside.appendChild(this.retailBooksTitle);
        this.mainContentInside.appendChild(this.retailBooksContent);
        // this.retailBooksContent.appendChild(this.retailBooksBlock);
    }
}

export { RetailBooks };
