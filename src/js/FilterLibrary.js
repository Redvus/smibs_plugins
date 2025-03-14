class FilterLibrary {

    constructor() {
        this.initLayout();
        this.initFilterLibrary();
    }

    initLayout() {
        this.calendarFilter = document.querySelector('.main-content__calendar_filter');

        this.filterChoiceLibrary = document.createElement('div');
        this.filterChoiceLibrarySelect = document.createElement('select');
        this.filterChoiceLibraryArrow = document.createElement('div');

        this.filterChoiceLibrary.classList = 'main-content__calendar_select';
        this.filterChoiceLibrarySelect.id = 'calendarSelectLibrary';
        this.filterChoiceLibraryArrow.classList = 'fa-solid fa-chevron-down main-content__calendar_arrow';

        this.filterLibraryOptions = [
            {
                text: 'Выберите филиал',
                value: 'Выберите филиал'
            },
            {
                text: 'Библиотека №15',
                value: 'Библиотека №15'
            },
            {
                text: 'Библиотека №23',
                value: 'Библиотека №23'
            },
            {
                text: 'Библиотека №32',
                value: 'Библиотека №32'
            },
        ];

        this.filterLibraryOptions.forEach(option =>
            this.filterChoiceLibrarySelect.options.add(
                new Option(option.text, option.value, option.selected)
            )
        );

        // this.filterChoiceLibrary.innerHTML = `
        //     <option value="choiceLibrary" data-filter="choiceLibrary">Выберите филиал</option>
        //     <option value="library_23" data-filter="library_23">Библиотека №23</option>
        //     <option value="library_32" data-filter="library_32">Библиотека №32</option>
        // `;

        // Appends
        this.calendarFilter.appendChild(this.filterChoiceLibrary);
        this.filterChoiceLibrary.appendChild(this.filterChoiceLibrarySelect);
        this.filterChoiceLibrary.appendChild(this.filterChoiceLibraryArrow);
    }

    initFilterLibrary() {
        const
            calendarMonthDates = document.querySelectorAll('.calendar__month_date'),
            calendarSelectLibrary = document.getElementById('calendarSelectLibrary'),
            calendarEventSingleDev = document.querySelectorAll('.calendar__events_single')
        ;

        calendarSelectLibrary.addEventListener("change", () => {
            let daysActiveTerms = JSON.parse(localStorage.getItem('daysActiveTerms'));

            for (let i = 0; i < this.filterLibraryOptions.length; i++) {
                if (calendarSelectLibrary.value === this.filterLibraryOptions[i].value) {
                    calendarEventSingleDev.forEach(evLib => {
                        calendarMonthDates.forEach((dateLib, pos) => {
                            // if (evLib.getAttribute('data-terms') !== daysActiveTerms) {
                                if (evLib.getAttribute('data-lib') !== this.filterLibraryOptions[i].value) {
                                    evLib.style.display = 'none';
                                    evLib.style.visibility = 'hidden';
                                } else {
                                    evLib.style.display = 'block';
                                    evLib.style.visibility = 'visible';
                                }
                            // }

                            if (evLib.getAttribute('data-lib') === this.filterLibraryOptions[i].value) {
                                // if (evLib.getAttribute('data-terms') === daysActiveTerms) {
                                    dateLib.classList.remove('is-active');
                                    if (evLib.parentNode.id === dateLib.getAttribute('data-id')) {
                                        setTimeout(() => {
                                            dateLib.classList += ' is-active';
                                            let daysActiveLib = this.filterLibraryOptions[i].value;
                                            localStorage.setItem(`daysActiveLib`, JSON.stringify(daysActiveLib));
                                        }, 20)
                                    } else if (evLib.parentNode.id !== dateLib.getAttribute('data-id')) {
                                        setTimeout(() => {
                                            dateLib.style.opacity = '0.5';
                                            dateLib.style.userSelect = 'none';
                                            dateLib.style.pointerEvents = 'none';
                                        }, 20)
                                    }
                                // }
                            }
                        })
                    })

                } else if (calendarSelectLibrary.value === this.filterLibraryOptions[0].value) {
                    calendarEventSingleDev.forEach(evLib => {
                        calendarMonthDates.forEach((dateLib) => {
                            if (evLib.getAttribute('data-lib') !== this.filterLibraryOptions[0].value) {
                                evLib.style.display = 'block';
                                evLib.style.visibility = 'visible';
                                dateLib.classList.remove('is-active');
                                dateLib.style.userSelect = 'auto';
                                dateLib.style.pointerEvents = 'auto';
                                dateLib.style.opacity = '1';
                                localStorage.setItem(`daysActiveLib`, JSON.stringify(''));
                            }
                        })
                    })
                }
            }
        });
    }
}

export { FilterLibrary }