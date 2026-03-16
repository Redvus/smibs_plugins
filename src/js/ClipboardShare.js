// import { gsap } from "gsap";
import { PageContent } from "./PageContent";

/**
 * Модуль для копирования текста и шаринга в соцсети
 * Кнопки появляются при выделении текста
 * @version 4.0
 */
class ClipboardShare {
    constructor(options = {}) {
        this.options = {
            successMessage: "Скопировано!",
            errorMessage: "Не удалось скопировать",
            copyButtonSelector: "[data-copy]",
            shareButtonSelector: "[data-share]",

            // Настройки выделения
            enableSelectionCopy: true,
            selectionCopyKey: "shift",
            showSelectionTooltip: true,

            // Настройки кнопок шаринга при выделении
            showShareButtonsOnSelect: true, // Показывать кнопки при выделении
            shareButtonsPosition: "bottom", // 'top', 'bottom', 'right', 'left'
            shareButtons: ["copy", "vk", "telegram", "whatsapp", "twitter"], // Какие кнопки показывать
            shareButtonsStyle: "icons", // 'icons', 'text', 'both'
            shareButtonSize: "medium", // 'small', 'medium', 'large'
            autoHideDelay: 5000, // Автоскрытие через 5 секунд
            showCopyInSelection: true, // Показывать кнопку копирования
            showShareInSelection: true, // Показывать кнопки шаринга

            // Тексты кнопок
            copyButtonTooltip: "Копировать выделенное",
            shareButtonTooltip: "Поделиться выделенным",
            ...options,
        };

        this.selectedText = "";
        this.selectionRange = null;
        this.selectionTooltip = null;
        this.currentSelectionElement = null;

        this.init();

        if (import.meta.env.DEV) {
            new PageContent();
        }
    }

    init() {
        this.initCopyButtons();
        this.initShareButtons();

        if (this.options.enableSelectionCopy) {
            this.initSelectionCopy();
        }
    }

    // Инициализация копирования выделением
    initSelectionCopy() {
        document.addEventListener("mouseup", (e) =>
            this.handleTextSelection(e),
        );
        document.addEventListener("keyup", (e) => this.handleTextSelection(e));

        // Скрывать тултип при клике вне
        document.addEventListener("mousedown", (e) => {
            if (
                this.selectionTooltip &&
                !this.selectionTooltip.contains(e.target)
            ) {
                this.hideSelectionTooltip();
            }
        });

        // Скрывать при скролле
        window.addEventListener("scroll", () => {
            this.hideSelectionTooltip();
        });
    }

    // Обработка выделения текста
    handleTextSelection(event) {
        // Не обрабатываем выделение внутри интерактивных элементов
        if (
            event.target.closest(
                "button, a, input, textarea, [data-copy], [data-share]",
            )
        ) {
            return;
        }

        // Даем время на завершение выделения
        setTimeout(() => {
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();

            if (selectedText && selectedText.length > 0) {
                this.selectedText = selectedText;

                if (selection.rangeCount > 0) {
                    this.selectionRange = selection.getRangeAt(0);

                    // Получаем контейнер выделения
                    this.currentSelectionElement =
                        this.selectionRange.commonAncestorContainer;
                    if (this.currentSelectionElement.nodeType === 3) {
                        // Text node
                        this.currentSelectionElement =
                            this.currentSelectionElement.parentElement;
                    }

                    // Показываем тултип с кнопками
                    this.showSelectionTooltipWithButtons();
                }
            } else {
                this.hideSelectionTooltip();
                this.selectedText = "";
                this.selectionRange = null;
            }
        }, 10);
    }

    // Показать тултип с кнопками шаринга и копирования
    showSelectionTooltipWithButtons() {
        this.hideSelectionTooltip();

        if (!this.selectedText || !this.selectionRange) return;

        // Создаем основной тултип
        this.selectionTooltip = document.createElement("div");
        this.selectionTooltip.className =
            "selection-tooltip selection-tooltip-with-buttons";

        // Добавляем превью выделенного текста
        const textPreview = document.createElement("div");
        textPreview.className = "selection-preview";
        textPreview.textContent =
            this.selectedText.length > 50
                ? this.selectedText.substring(0, 50) + "..."
                : this.selectedText;
        this.selectionTooltip.appendChild(textPreview);

        // Контейнер для кнопок
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = `selection-tooltip-buttons position-${this.options.shareButtonsPosition}`;

        // Добавляем кнопки согласно настройкам
        this.options.shareButtons.forEach((buttonType) => {
            const button = this.createSelectionButton(buttonType);
            if (button) {
                buttonsContainer.appendChild(button);
            }
        });

        this.selectionTooltip.appendChild(buttonsContainer);

        // Добавляем информацию о горячей клавише (если нужно)
        if (
            this.options.selectionCopyKey &&
            !this.options.showShareButtonsOnSelect
        ) {
            const shortcutHint = document.createElement("div");
            shortcutHint.className = "selection-shortcut-hint";
            shortcutHint.textContent = `Нажмите ${this.getKeyName(this.options.selectionCopyKey)}+Enter`;
            this.selectionTooltip.appendChild(shortcutHint);
        }

        document.body.appendChild(this.selectionTooltip);

        // Позиционирование
        this.positionTooltipNearSelection();

        // Анимация появления
        setTimeout(() => this.selectionTooltip.classList.add("show"), 10);

        // Автоматическое скрытие
        // if (this.options.autoHideDelay > 0) {
        //     setTimeout(
        //         () => this.hideSelectionTooltip(),
        //         this.options.autoHideDelay,
        //     );
        // }
    }

    // Создание кнопки для тултипа выделения
    createSelectionButton(buttonType) {
        const button = document.createElement("button");
        button.className = `selection-tooltip-btn selection-btn-${buttonType} size-${this.options.shareButtonSize}`;

        switch (buttonType) {
            case "copy":
                button.innerHTML =
                    this.options.shareButtonsStyle === "text"
                        ? "Копировать"
                        : this.options.shareButtonsStyle === "both"
                          ? "📋 Копировать"
                          : "📋 Копировать";
                button.title = this.options.copyButtonTooltip;

                button.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.copySelectedText();
                });
                break;

            case "vk":
            case "telegram":
            case "twitter":
            case "facebook":
            case "whatsapp":
            case "viber":
            case "email":
                const shareData = this.getShareData();
                const shareLink = this.getShareLink(buttonType, shareData);

                button.innerHTML =
                    this.options.shareButtonsStyle === "text"
                        ? this.getSocialName(buttonType)
                        : this.options.shareButtonsStyle === "both"
                          ? this.getSocialIcon(buttonType) +
                            " " +
                            this.getSocialName(buttonType)
                          : this.getSocialIcon(buttonType) +
                            " " +
                            "Поделиться в " +
                            " " +
                            this.getSocialName(buttonType);
                button.title = `Поделиться в ${this.getSocialName(buttonType)}`;

                button.addEventListener("click", (e) => {
                    e.stopPropagation();

                    if (navigator.share && buttonType === "web") {
                        navigator.share(shareData).catch(() => {
                            window.open(
                                shareLink,
                                "share",
                                "width=600,height=400",
                            );
                        });
                    } else {
                        window.open(shareLink, "share", "width=600,height=400");
                    }

                    this.triggerEvent("shareFromSelection", {
                        network: buttonType,
                        text: this.selectedText,
                    });

                    this.hideSelectionTooltip();
                });
                break;

            case "select-all":
                button.innerHTML = "🔍 Выделить всё";
                button.title = "Выделить весь текст";

                button.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.selectAllText();
                });
                break;

            default:
                return null;
        }

        return button;
    }

    // Получить данные для шаринга
    getShareData() {
        return {
            url: window.location.href,
            title: document.title,
            text: this.selectedText,
        };
    }

    // Получение ссылки для шаринга
    getShareLink(network, data) {
        const encodedUrl = encodeURIComponent(data.url);
        const encodedTitle = encodeURIComponent(data.title);
        const encodedText = encodeURIComponent(data.text);

        const links = {
            vk: `https://vk.com/share.php?url=${encodedUrl}&title=${encodedTitle}&comment=${encodedText}`,
            telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
            whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
            viber: `viber://forward?text=${encodedText}%20${encodedUrl}`,
            email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
        };

        return links[network] || links.telegram;
    }

    // Выделить весь текст в контейнере
    selectAllText() {
        if (this.currentSelectionElement) {
            const range = document.createRange();
            range.selectNodeContents(this.currentSelectionElement);

            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            this.selectedText = selection.toString().trim();
            this.selectionRange = range;

            // Показываем обновленный тултип
            this.showSelectionTooltipWithButtons();
        }
    }

    // Копирование выделенного текста
    async copySelectedText() {
        if (!this.selectedText) {
            this.showMessage(
                this.selectionTooltip,
                "Нет выделенного текста",
                "error",
            );
            return;
        }

        try {
            await this.copyToClipboard(this.selectedText);

            // Подсветка выделенного текста
            this.highlightSelection();

            this.showMessage(
                this.selectionTooltip,
                this.options.successMessage,
                "success",
            );
            this.triggerEvent("copySuccess", {
                text: this.selectedText,
                source: "selection",
            });

            // Скрыть тултип после копирования
            setTimeout(() => this.hideSelectionTooltip(), 500);
        } catch (err) {
            console.error("Copy failed:", err);
            this.showMessage(
                this.selectionTooltip,
                this.options.errorMessage,
                "error",
            );
            this.triggerEvent("copyError", { error: err, source: "selection" });
        }
    }

    // Копирование в буфер обмена
    async copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            this.fallbackCopy(text);
        }
    }

    fallbackCopy(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand("copy");
        } finally {
            document.body.removeChild(textarea);
        }
    }

    // Подсветка выделенного текста
    highlightSelection() {
        if (!this.selectionRange) return;

        try {
            const span = document.createElement("span");
            span.className = "selection-highlight";
            span.style.backgroundColor = "#cce5ff";
            span.style.transition = "background-color 1s";

            this.selectionRange.surroundContents(span);

            setTimeout(() => {
                span.style.backgroundColor = "transparent";
                setTimeout(() => {
                    if (span.parentNode) {
                        const parent = span.parentNode;
                        while (span.firstChild) {
                            parent.insertBefore(span.firstChild, span);
                        }
                        parent.removeChild(span);
                    }
                }, 1000);
            }, 1000);
        } catch (e) {
            // Игнорируем ошибки при подсветке
        }
    }

    // Позиционирование тултипа около выделения
    positionTooltipNearSelection() {
        if (!this.selectionRange || !this.selectionTooltip) return;

        const rect = this.selectionRange.getBoundingClientRect();
        const tooltipRect = this.selectionTooltip.getBoundingClientRect();

        let top, left;

        switch (this.options.shareButtonsPosition) {
            case "top":
                top = rect.top + window.scrollY - tooltipRect.height - 10;
                left =
                    rect.left +
                    window.scrollX +
                    rect.width / 2 -
                    tooltipRect.width / 2;
                break;
            case "bottom":
                top = rect.bottom + window.scrollY + 10;
                left =
                    rect.left +
                    window.scrollX +
                    rect.width / 2 -
                    tooltipRect.width / 2;
                break;
            case "left":
                top =
                    rect.top +
                    window.scrollY +
                    rect.height / 2 -
                    tooltipRect.height / 2;
                left = rect.left + window.scrollX - tooltipRect.width - 10;
                break;
            case "right":
                top =
                    rect.top +
                    window.scrollY +
                    rect.height / 2 -
                    tooltipRect.height / 2;
                left = rect.right + window.scrollX + 10;
                break;
            default:
                top = rect.bottom + window.scrollY + 10;
                left =
                    rect.left +
                    window.scrollX +
                    rect.width / 2 -
                    tooltipRect.width / 2;
        }

        // Проверяем границы экрана
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }

        if (top < 10) {
            top = rect.bottom + window.scrollY + 10;
        }

        this.selectionTooltip.style.top = `${top}px`;
        this.selectionTooltip.style.left = `${left}px`;
    }

    // Скрыть тултип
    hideSelectionTooltip() {
        if (this.selectionTooltip) {
            this.selectionTooltip.classList.remove("show");
            setTimeout(() => {
                if (this.selectionTooltip && this.selectionTooltip.parentNode) {
                    this.selectionTooltip.parentNode.removeChild(
                        this.selectionTooltip,
                    );
                }
                this.selectionTooltip = null;
            }, 300);
        }
    }

    // Получить название клавиши
    getKeyName(key) {
        const keys = {
            shift: "Shift",
            ctrl: "Ctrl",
            alt: "Alt",
        };
        return keys[key] || key;
    }

    // Получить название соцсети
    getSocialName(network) {
        const names = {
            vk: "ВК",
            telegram: "TG",
            twitter: "X",
            facebook: "FB",
            whatsapp: "WA",
            viber: "Viber",
            email: "Email",
        };
        return names[network] || network;
    }

    // Получить иконку соцсети
    getSocialIcon(network) {
        const icons = {
            vk: "📘",
            telegram: "✈️",
            twitter: "🐦",
            facebook: "📱",
            whatsapp: "💬",
            viber: "📞",
            email: "📧",
            copy: "📋",
            "select-all": "🔍",
        };
        return icons[network] || "🔗";
    }

    // Показ сообщения
    showMessage(element, message, type) {
        const tooltip = document.createElement("div");
        tooltip.className = `copy-tooltip copy-tooltip-${type}`;
        tooltip.textContent = message;

        const rect = element
            ? element.getBoundingClientRect()
            : this.selectionRange
              ? this.selectionRange.getBoundingClientRect()
              : {
                    top: window.scrollY + 100,
                    left: window.innerWidth / 2,
                    width: 0,
                };

        tooltip.style.top = `${rect.top - 30 + window.scrollY}px`;
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.transform = "translateX(-50%)";

        document.body.appendChild(tooltip);

        setTimeout(() => tooltip.classList.add("show"), 10);

        setTimeout(() => {
            tooltip.classList.remove("show");
            setTimeout(() => tooltip.remove(), 300);
        }, 600);
    }

    triggerEvent(name, detail) {
        const event = new CustomEvent(`clipboardshare:${name}`, { detail });
        document.dispatchEvent(event);
    }

    // Остальные методы для кнопок
    initCopyButtons() {
        document
            .querySelectorAll(this.options.copyButtonSelector)
            .forEach((button) => {
                button.addEventListener("click", (e) => this.handleCopy(e));
            });
    }

    initShareButtons() {
        document
            .querySelectorAll(this.options.shareButtonSelector)
            .forEach((button) => {
                button.addEventListener("click", (e) => this.handleShare(e));
            });
    }

    async handleCopy(event) {
        const button = event.currentTarget;
        const textToCopy =
            button.getAttribute("data-copy-text") ||
            button.getAttribute("data-copy") ||
            button.textContent.trim();

        try {
            await this.copyToClipboard(textToCopy);
            this.showMessage(button, this.options.successMessage, "success");
            this.triggerEvent("copySuccess", { text: textToCopy, button });
        } catch (err) {
            console.error("Copy failed:", err);
            this.showMessage(button, this.options.errorMessage, "error");
            this.triggerEvent("copyError", { error: err, button });
        }
    }

    handleShare(event) {
        const button = event.currentTarget;
        const shareData = {
            url: button.getAttribute("data-share-url") || window.location.href,
            title: button.getAttribute("data-share-title") || document.title,
            text: button.getAttribute("data-share-text") || "",
        };

        this.share(shareData, button);
    }

    share(data, button) {
        if (navigator.share) {
            navigator
                .share({
                    title: data.title,
                    text: data.text,
                    url: data.url,
                })
                .catch((err) => {
                    if (err.name !== "AbortError") {
                        this.showFallbackShare(data, button);
                    }
                });
        } else {
            this.showFallbackShare(data, button);
        }
    }

    showFallbackShare(data, button) {
        const encodedUrl = encodeURIComponent(data.url);
        const encodedTitle = encodeURIComponent(data.title);
        const encodedText = encodeURIComponent(data.text || data.title);

        const shareLinks = {
            vk: `https://vk.com/share.php?url=${encodedUrl}&title=${encodedTitle}&comment=${encodedText}`,
            telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
            whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
            viber: `viber://forward?text=${encodedText}%20${encodedUrl}`,
            email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
        };

        this.createSharePopup(shareLinks, button);
    }

    createSharePopup(links, triggerButton) {
        let popup = document.querySelector(".share-popup");
        if (popup) popup.remove();

        popup = document.createElement("div");
        popup.className = "share-popup";

        const content = document.createElement("div");
        content.className = "share-popup-content";

        const title = document.createElement("h3");
        title.textContent = "Поделиться";
        content.appendChild(title);

        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "share-buttons";

        for (const [network, link] of Object.entries(links)) {
            const btn = document.createElement("a");
            btn.href = link;
            btn.target = "_blank";
            btn.rel = "noopener noreferrer";
            btn.className = `share-btn share-btn-${network}`;
            btn.innerHTML = this.getSocialIcon(network);
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                window.open(link, "share", "width=600,height=400");
                popup.remove();
            });
            buttonsContainer.appendChild(btn);
        }

        content.appendChild(buttonsContainer);

        const closeBtn = document.createElement("button");
        closeBtn.className = "share-popup-close";
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", () => popup.remove());
        content.appendChild(closeBtn);

        popup.appendChild(content);

        popup.addEventListener("click", (e) => {
            if (e.target === popup) popup.remove();
        });

        document.body.appendChild(popup);
        this.positionPopup(popup, triggerButton);
    }

    positionPopup(popup, triggerButton) {
        const rect = triggerButton.getBoundingClientRect();
        popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
        popup.style.left = `${rect.left + window.scrollX}px`;
    }
}

export { ClipboardShare };
