// import { gsap } from "gsap";
import { PageContent } from "./PageContent";

/**
 * Модуль для копирования текста и шаринга в соцсети
 * Поддерживает копирование выделенного текста
 * @version 2.0
 */
class ClipboardShare {
    constructor(options = {}) {
        this.options = {
            successMessage: "Скопировано!",
            errorMessage: "Не удалось скопировать",
            copyButtonSelector: "[data-copy]",
            shareButtonSelector: "[data-share]",
            enableSelectionCopy: true, // Включить копирование выделением
            selectionCopyKey: "shift", // 'shift', 'ctrl', 'alt', или false (любое выделение)
            selectionMessage:
                "Нажмите Shift+Enter чтобы скопировать выделенный текст",
            showSelectionTooltip: true,
            copyOnSelect: false, // Копировать сразу при выделении (без клавиши)
            ...options,
        };

        this.selectedText = "";
        this.selectionRange = null;
        this.selectionTooltip = null;

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
        document.addEventListener("keydown", (e) => this.handleCopyShortcut(e));

        // Скрывать тултип при клике вне
        document.addEventListener("mousedown", (e) => {
            if (
                this.selectionTooltip &&
                !this.selectionTooltip.contains(e.target)
            ) {
                this.hideSelectionTooltip();
            }
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

        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText) {
            this.selectedText = selectedText;
            this.selectionRange = selection.getRangeAt(0);

            if (this.options.copyOnSelect) {
                // Копировать сразу при выделении
                this.copySelectedText();
            } else if (this.options.showSelectionTooltip) {
                // Показать тултип с подсказкой
                this.showSelectionTooltip(event);
            }
        } else {
            this.hideSelectionTooltip();
            this.selectedText = "";
            this.selectionRange = null;
        }
    }

    // Обработка горячих клавиш для копирования выделенного текста
    handleCopyShortcut(event) {
        if (!this.selectedText) return;

        const key = this.options.selectionCopyKey;

        // Проверяем нажатие нужной клавиши
        let keyPressed = false;

        if (key === "shift" && event.shiftKey && event.key === "Enter") {
            keyPressed = true;
        } else if (key === "ctrl" && event.ctrlKey && event.key === "Enter") {
            keyPressed = true;
        } else if (key === "alt" && event.altKey && event.key === "Enter") {
            keyPressed = true;
        } else if (key === false && event.key === "Enter") {
            keyPressed = true;
        }

        if (keyPressed) {
            event.preventDefault();
            this.copySelectedText();
        }
    }

    // Копирование выделенного текста
    async copySelectedText() {
        if (!this.selectedText) {
            this.showMessage(null, "Нет выделенного текста", "error");
            return;
        }

        try {
            await this.copyToClipboard(this.selectedText);

            // Подсветка выделенного текста
            this.highlightSelection();

            this.showMessage(null, this.options.successMessage, "success");
            this.triggerEvent("copySuccess", {
                text: this.selectedText,
                source: "selection",
            });

            // Скрыть тултип после копирования
            this.hideSelectionTooltip();
        } catch (err) {
            console.error("Copy failed:", err);
            this.showMessage(null, this.options.errorMessage, "error");
            this.triggerEvent("copyError", { error: err, source: "selection" });
        }
    }

    // Подсветка выделенного текста
    highlightSelection() {
        if (!this.selectionRange) return;

        const span = document.createElement("span");
        span.className = "selection-highlight";
        span.style.backgroundColor = "#fff3cd";
        span.style.transition = "background-color 1s";

        try {
            this.selectionRange.surroundContents(span);

            // Убрать подсветку через 1 секунду
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
            // Игнорируем ошибки при подсветке (например, если выделение пересекает границы элементов)
        }
    }

    // Показать тултип с подсказкой
    showSelectionTooltip(event) {
        this.hideSelectionTooltip();

        if (!this.selectedText) return;

        this.selectionTooltip = document.createElement("div");
        this.selectionTooltip.className = "selection-tooltip";

        // const message = this.options.selectionMessage;
        // this.selectionTooltip.textContent = message;

        // Добавить иконку копирования
        const copyIcon = document.createElement("span");
        copyIcon.className = "selection-tooltip-icon";
        copyIcon.innerHTML = "📋";
        copyIcon.style.marginRight = "5px";
        // this.selectionTooltip.prepend(copyIcon);

        // Кнопка для немедленного копирования
        const copyBtn = document.createElement("button");
        copyBtn.className = "selection-tooltip-copy";
        copyBtn.textContent = "Копировать";
        copyBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.copySelectedText();
        });

        this.selectionTooltip.appendChild(copyBtn);

        document.body.appendChild(this.selectionTooltip);

        // Позиционирование
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            this.selectionTooltip.style.top = `${rect.bottom + window.scrollY + 10}px`;
            this.selectionTooltip.style.left = `${rect.left + window.scrollX}px`;
        }

        // Анимация появления
        setTimeout(() => this.selectionTooltip.classList.add("show"), 10);

        // Автоматическое скрытие через 5 секунд
        setTimeout(() => this.hideSelectionTooltip(), 5000);
    }

    // Скрыть тултип выделения
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

    // Копирование в буфер обмена
    async copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            this.fallbackCopy(text);
        }
    }

    // Fallback метод копирования
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

    // Показ сообщения
    showMessage(element, message, type) {
        const tooltip = document.createElement("div");
        tooltip.className = `copy-tooltip copy-tooltip-${type}`;
        tooltip.textContent = message;

        let top, left;

        if (element) {
            const rect = element.getBoundingClientRect();
            top = rect.top - 30 + window.scrollY;
            left = rect.left + rect.width / 2;
        } else if (this.selectionRange) {
            const rect = this.selectionRange.getBoundingClientRect();
            top = rect.top - 30 + window.scrollY;
            left = rect.left + rect.width / 2;
        } else {
            top = window.scrollY + 100;
            left = window.innerWidth / 2;
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        tooltip.style.transform = "translateX(-50%)";

        document.body.appendChild(tooltip);

        setTimeout(() => tooltip.classList.add("show"), 10);

        setTimeout(() => {
            tooltip.classList.remove("show");
            setTimeout(() => tooltip.remove(), 300);
        }, 2000);
    }

    // Остальные методы (handleCopy, handleShare, share, showFallbackShare, и т.д.)
    // ... (сохраняем все методы из предыдущей версии)

    // Инициализация кнопок копирования
    initCopyButtons() {
        document
            .querySelectorAll(this.options.copyButtonSelector)
            .forEach((button) => {
                button.addEventListener("click", (e) => this.handleCopy(e));
            });
    }

    // Инициализация кнопок шаринга
    initShareButtons() {
        document
            .querySelectorAll(this.options.shareButtonSelector)
            .forEach((button) => {
                button.addEventListener("click", (e) => this.handleShare(e));
            });
    }

    // Обработка копирования
    async handleCopy(event) {
        const button = event.currentTarget;
        const textToCopy =
            button.getAttribute("data-copy-text") ||
            button.getAttribute("data-copy") ||
            this.getTextFromElement(button);

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

    // Обработка шаринга
    handleShare(event) {
        const button = event.currentTarget;
        const shareData = {
            url: button.getAttribute("data-share-url") || window.location.href,
            title: button.getAttribute("data-share-title") || document.title,
            text: button.getAttribute("data-share-text") || "",
            image: button.getAttribute("data-share-image") || "",
        };

        this.share(shareData, button);
    }

    // Открытие диалога шаринга
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

    // Fallback для шаринга
    showFallbackShare(data, button) {
        const encodedUrl = encodeURIComponent(data.url);
        const encodedTitle = encodeURIComponent(data.title);
        const encodedText = encodeURIComponent(data.text);

        const shareLinks = {
            vk: `https://vk.com/share.php?url=${encodedUrl}&title=${encodedTitle}`,
            telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText || encodedTitle}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText || encodedTitle}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            whatsapp: `https://wa.me/?text=${encodedText || encodedTitle}%20${encodedUrl}`,
            odnoklassniki: `https://connect.ok.ru/offer?url=${encodedUrl}&title=${encodedTitle}`,
        };

        this.createSharePopup(shareLinks, button);
    }

    // Создание попапа с соцсетями
    createSharePopup(links, triggerButton) {
        let popup = document.querySelector(".share-popup");
        if (popup) {
            popup.remove();
        }

        popup = document.createElement("div");
        popup.className = "share-popup";

        const content = document.createElement("div");
        content.className = "share-popup-content";

        const title = document.createElement("h3");
        title.textContent = "Поделиться в соцсетях";
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
            if (e.target === popup) {
                popup.remove();
            }
        });

        document.body.appendChild(popup);
        this.positionPopup(popup, triggerButton);
    }

    positionPopup(popup, triggerButton) {
        const rect = triggerButton.getBoundingClientRect();
        const popupRect = popup.getBoundingClientRect();

        let top = rect.bottom + window.scrollY + 5;
        let left = rect.left + window.scrollX;

        if (left + popupRect.width > window.innerWidth) {
            left = window.innerWidth - popupRect.width - 10;
        }

        popup.style.top = `${top}px`;
        popup.style.left = `${left}px`;
    }

    getSocialIcon(network) {
        const icons = {
            vk: "ВК",
            telegram: "TG",
            twitter: "X",
            facebook: "FB",
            whatsapp: "WA",
            odnoklassniki: "OK",
        };
        return icons[network] || network;
    }

    getTextFromElement(button) {
        return (
            button.getAttribute("data-copy-text") ||
            button.textContent.trim() ||
            ""
        );
    }

    triggerEvent(name, detail) {
        const event = new CustomEvent(`clipboardshare:${name}`, { detail });
        document.dispatchEvent(event);
    }

    refresh() {
        this.initCopyButtons();
        this.initShareButtons();
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = ClipboardShare;
} else if (typeof define === "function" && define.amd) {
    define([], function () {
        return ClipboardShare;
    });
} else {
    window.ClipboardShare = ClipboardShare;
}

export { ClipboardShare };
