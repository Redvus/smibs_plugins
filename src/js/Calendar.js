import {gsap} from "gsap";

class Calendar {
    constructor() {
        this.initLayoutDev();
        this.initEventDev();

        this.objectsTabs();
        this.initFilter();
    }

    initLayoutDev() {
        this.mainContentInside = document.querySelector('.main-content__inside');
        this.calendar = document.createElement('div');
        this.calendar.className = 'main-content__calendar';
        this.mainContentSubheader = document.createElement('div');
        this.mainContentSubheader.className = 'main-content__subheader';
        this.mainContentSubheader.innerHTML = `
            <h2>Календарь событий. Февраль</h2>
        `;

        this.calendarMonth = document.createElement('ul');
        this.calendarMonth.className = 'calendar__month';
        this.calendarMonth.id = 'objectsTab';

        this.calendarEvents = document.createElement('ul');
        this.calendarEvents.className = 'calendar__events';

        // Event Random
        let min = 2;
        let max = 5;
        this.calendarInsideRandom = Math.floor(Math.random() * (max - min + 1) + min);

        //Appends
        this.mainContentInside.appendChild(this.mainContentSubheader);
        this.mainContentInside.appendChild(this.calendar);
        this.calendar.appendChild(this.calendarMonth);
        this.calendar.appendChild(this.calendarEvents);
    }

    initEventDev() {
        // for (let i = 0; i < 31; i++) {
        //     this.calendarDay = document.createElement('li');
        //     this.calendarDay.className = 'calendar__month_date';
        //     this.calendarDay.id = `calendarDate_${i}`;
        //     this.calendarDay.innerHTML = `<span>${i + 1}</span>`;
        //     // this.calendarDay.style.userSelect = 'none';
        //     // this.calendarDay.style.pointerEvents = 'none';
        //     this.calendarMonth.appendChild(this.calendarDay);
        //
        //     if (this.calendarDay.id === `calendarDate_${i}`) {
        //         if (this.calendarDay.id === `calendarDate_${0}`) {
        //             this.calendarDay.className = 'calendar__month_date is-show';
        //         }
        //         this.calendarDay.setAttribute('data-id', `tab_${i + 1}`);
        //         this.calendarEvent = document.createElement('div');
        //         this.calendarEvent.id = `tab_${i + 1}`;
        //         this.calendarEvent.className = 'calendar__events_inside';
        //     }
        //
        //     for (let i = 0; i < this.calendarInsideRandom; i++) {
        //         this.calendarEventSingle = document.createElement('li');
        //         this.calendarEventSingle.className = 'calendar__events_single';
        //         this.calendarEventSingle.id = 'calendarEvent_' + `${i + 1}`;
        //
        //         this.calendarEventSingle.innerHTML = `
        //                 <h4><span>1${i}:${i * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №${i + 1}</h4>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
        //             `;
        //
        //         this.calendarEvent.appendChild(this.calendarEventSingle);
        //         this.calendarEvents.appendChild(this.calendarEvent);
        //     }
        // }

        // for (let i = 0; i < 31; i++) {
        //     this.calendarDay = document.createElement('li');
        //     this.calendarDay.className = 'calendar__month_date';
        //     this.calendarDay.id = `calendarDate_${i}`;
        //     this.calendarDay.innerHTML = `<span>${i + 1}</span>`;
        //     // this.calendarDay.style.userSelect = 'none';
        //     // this.calendarDay.style.pointerEvents = 'none';
        //     this.calendarMonth.appendChild(this.calendarDay);
        //
        //     if (this.calendarDay.id === 'calendarDate_0') {
        //         this.calendarDay.className = 'calendar__month_date is-show';
        //         this.calendarDay.setAttribute('data-id', 'tab_0');
        //         this.calendarEvent = document.createElement('div');
        //         this.calendarEvent.id = 'tab_0';
        //         this.calendarEvent.className = 'calendar__events_inside';
        //
        //         for (let i = 0; i < 5; i++) {
        //             this.calendarEventSingle = document.createElement('li');
        //             this.calendarEventSingle.className = 'calendar__events_single';
        //             this.calendarEventSingle.id = 'calendarEvent_1' + `${i + 1}`;
        //
        //             this.calendarEventSingle.innerHTML = `
        //                 <h4><span>1${i}:${(i + 5) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №1${i + 1}</h4>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
        //             `;
        //
        //             this.calendarEvent.appendChild(this.calendarEventSingle);
        //             this.calendarEvents.appendChild(this.calendarEvent);
        //         }
        //     } else if (this.calendarDay.id === 'calendarDate_1') {
        //         this.calendarDay.className = 'calendar__month_date';
        //         this.calendarDay.setAttribute('data-id', 'tab_1');
        //         this.calendarEvent = document.createElement('div');
        //         this.calendarEvent.id = 'tab_1';
        //         this.calendarEvent.className = 'calendar__events_inside';
        //
        //         for (let i = 0; i < 5; i++) {
        //             this.calendarEventSingle = document.createElement('li');
        //             this.calendarEventSingle.className = 'calendar__events_single';
        //             this.calendarEventSingle.id = 'calendarEvent_2' + `${i + 1}`;
        //
        //             this.calendarEventSingle.innerHTML = `
        //                 <h4><span>1${i}:${(i + 2) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №2${i + 1}</h4>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate.?</p>
        //             `;
        //
        //             this.calendarEvent.appendChild(this.calendarEventSingle);
        //             this.calendarEvents.appendChild(this.calendarEvent);
        //         }
        //     } else if (this.calendarDay.id === 'calendarDate_2') {
        //         this.calendarDay.className = 'calendar__month_date';
        //         this.calendarDay.setAttribute('data-id', 'tab_2');
        //         this.calendarEvent = document.createElement('div');
        //         this.calendarEvent.id = 'tab_2';
        //         this.calendarEvent.className = 'calendar__events_inside';
        //
        //         for (let i = 0; i < 4; i++) {
        //             this.calendarEventSingle = document.createElement('li');
        //             this.calendarEventSingle.className = 'calendar__events_single';
        //             this.calendarEventSingle.id = 'calendarEvent_3' + `${i + 1}`;
        //
        //             this.calendarEventSingle.innerHTML = `
        //                 <h4><span>1${i}:${(i + 2) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №3${i + 1}</h4>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate.?</p>
        //             `;
        //
        //             this.calendarEvent.appendChild(this.calendarEventSingle);
        //             this.calendarEvents.appendChild(this.calendarEvent);
        //         }
        //     }
        // }

        for (let i = 0; i < 31; i++) {
            this.calendarDay = document.createElement('li');
            this.calendarDay.className = 'calendar__month_date';
            this.calendarDay.id = `calendarDate_${i}`;
            this.calendarDay.innerHTML = `<span>${i + 1}</span>`;
            // this.calendarDay.style.userSelect = 'none';
            // this.calendarDay.style.pointerEvents = 'none';
            this.calendarMonth.appendChild(this.calendarDay);

            if (this.calendarDay.id === 'calendarDate_0') {
                this.calendarDay.className = 'calendar__month_date is-show';
                this.calendarDay.setAttribute('data-id', 'tab_0');
                this.calendarEvent = document.createElement('div');
                this.calendarEvent.id = 'tab_0';
                this.calendarEvent.className = 'calendar__events_inside';

                this.calendarEvent.innerHTML = `
                    <li class="calendar__events_single" data-lib="library_2">
                        <h4><span>1${i}:${(i + 5) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                    </li>
                    <li class="calendar__events_single" data-lib="library_15">
                        <h4><span>1${i}:${(i + 5) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №15</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                    </li>
                    <li class="calendar__events_single" data-lib="library_23">
                        <h4><span>1${i}:${(i + 5) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №23</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                    </li>
                    <li class="calendar__events_single" data-lib="library_32">
                        <h4><span>1${i}:${(i + 5) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №32</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                    </li>
                `;

                const calendarEventSingle = document.querySelectorAll('.calendar__events_single');
                for (let j = 0; j < calendarEventSingle.length; j++) {
                    calendarEventSingle[j].setAttribute('id', 'library_1')
                }

            } else if (this.calendarDay.id === 'calendarDate_1') {
                this.calendarDay.className = 'calendar__month_date';
                this.calendarDay.setAttribute('data-id', 'tab_1');
                this.calendarEvent = document.createElement('div');
                this.calendarEvent.id = 'tab_1';
                this.calendarEvent.className = 'calendar__events_inside';

                this.calendarEvent.innerHTML = `
                    <li class="calendar__events_single" data-lib="library_23">
                        <h4><span>1${i}:${(i + 5) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №23</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                    </li>
                    <li class="calendar__events_single" data-lib="library_32">
                        <h4><span>1${i}:${(i + 5) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №32</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                    </li>
                `;

            } else if (this.calendarDay.id === 'calendarDate_2') {
                this.calendarDay.className = 'calendar__month_date';
                this.calendarDay.setAttribute('data-id', 'tab_2');
                this.calendarEvent = document.createElement('div');
                this.calendarEvent.id = 'tab_2';
                this.calendarEvent.className = 'calendar__events_inside';

                this.calendarEvent.innerHTML = `
                    <li class="calendar__events_single" data-lib="library_32">
                        <h4><span>1${i}:${(i + 5) * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №32</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                    </li>
                `;
            }

            this.calendarEvents.appendChild(this.calendarEvent);
        }
    }

    objectsTabs() {
        this.tabMenuTrigger = document.querySelectorAll('.calendar__month_date');
        this.arrayPanels = document.querySelectorAll('.calendar__events_inside');
        let flag = 0;

        for (let i = 0; i < this.tabMenuTrigger.length; i++) {
            this.tabMenuTrigger[i].addEventListener('click', () => {
                document.getElementsByClassName('is-show')[0].classList.remove('is-show');
                this.tabMenuTrigger[i].classList.add('is-show');
                this.arrayTabs = Array.prototype.slice.call(this.tabMenuTrigger);
                this.index = this.arrayTabs.indexOf(this);

                this.arrayPanels.forEach(tab => {
                    gsap.set(tab, {
                        autoAlpha: 0,
                        display: 'none'
                    });
                });

                let tl = gsap.timeline();
                tl
                    .fromTo(this.arrayPanels[i], {
                        autoAlpha: 0
                    }, {
                        duration: 0.3,
                        autoAlpha: 1,
                        display: 'flex',
                        ease: 'power2.in'
                    })
                ;
            }, false);

            if (this.tabMenuTrigger[i] !== this.tabMenuTrigger[0]) {
                gsap.set(this.arrayPanels, {
                    autoAlpha: 0,
                    display: 'none'
                });
            }
        }

        if (flag === 0) {
            gsap.set(this.arrayPanels[0], {
                autoAlpha: 1,
                display: 'flex'
            });
            // flag = 1
        }
    }

    initFilter() {
        this.calendarFilter = document.createElement('div');
        this.calendarFilter.classList = 'main-content__calendar_filter';
        this.calendarFilterChoice = document.createElement('select');
        this.calendarFilterChoice.classList = 'main-content__calendar_select';
        this.calendarFilterChoice.id = 'calendarSelectLibrary';
        // this.calendarFilterChoice.setAttribute('name', 'calendarSelectLibrary');
        this.calendarFilterChoice.innerHTML = `
            <option value="choiceLibrary" data-filter="choiceLibrary">Выберите филиал</option>
            <option value="library_23" data-filter="library_23">Библиотека №23</option>
            <option value="library_32" data-filter="library_32">Библиотека №32</option>
        `;
        this.calendarFilterChoiceArrow = document.createElement('div');
        this.calendarFilterChoiceArrow.classList = 'fa-solid fa-chevron-down main-content__calendar_arrow';

        // this.calendarFilterText = document.createElement('div');
        // this.calendarFilterText.innerHTML = `
        //     <span>Выберите филиал библиотеки</span>
        // `;

        this.mainContentSubheader.appendChild(this.calendarFilter);
        this.calendarFilter.appendChild(this.calendarFilterChoice);
        this.calendarFilter.appendChild(this.calendarFilterChoiceArrow);

        const
            calendarMonthDates = document.querySelectorAll('.calendar__month_date'),
            calendarEventsAll = document.querySelectorAll('.calendar__events'),
            calendarEventsInside = document.querySelectorAll('.calendar__events_inside'),
            calendarSelectLibrary = document.getElementById('calendarSelectLibrary'),
            calendarEventSingle = document.querySelectorAll('.calendar__events_single'),
            calendarFilters = document.querySelectorAll('option[data-filter]')
        ;

        // let filters = document.querySelectorAll('');


        // for (let filter of filters) {
        //     filter.addEventListener('change', (e) => {
        // e.preventDefault();

        // let libId = filter.getAttribute('data-filter');
        // let libCat = document.querySelectorAll('.calendar__events_single');
        //
        // libCat.forEach((lib) => {
        //     if (libId === 'choiceLibrary') {
        //         c.classList.remove('.is-hide');
        //     } else {
        //         if (lib.getAttribute('data-lib') !== libId) {
        //             lib.classList.add('is-hide');
        //             // lib.style.display = 'none';
        //             // lib.style.visibility = 'hidden';
        //         } else {
        //             lib.classList.remove('is-hide');
        //             // lib.style.display = 'block';
        //             // lib.style.visibility = 'visible';
        //         }
        //     }
        // })
        // console.log(e)
        // });
        // }

        // if (calendarSelectLibrary.value === 'library_23') {
        //     // calendarEventsInside.forEach((el) => {
        //         calendarEventFilter.forEach(event => {
        //             const eventClass = document.getElementsByClassName('library_23');
        //             if (!eventClass) {
        //                 // event.style.display = 'none';
        //                 // event.style.visibility = 'hidden';
        //                 // if (!event) {
        //                 //     console.log(event.id)
        //                 // }
        //             }
        //             console.log(eventClass)
        //         })
        // })
        // calendarMonthDates.forEach(date => {
        //     if (date.id === 'tab_1') {
        //         date.parent.style.display = 'none';
        //         // console.log(date.id)
        //     }
        // })
        // }
        // })

        calendarSelectLibrary.addEventListener("change", () => {
            if (calendarSelectLibrary.value === 'choiceLibrary') {
                calendarEventSingle.forEach(elem => {
                    calendarMonthDates.forEach((dates) => {
                        if (elem.getAttribute('data-lib') !== 'choiceLibrary') {
                            elem.style.display = 'block';
                            elem.style.visibility = 'visible';
                            dates.classList.remove('is-active')
                        }
                    })
                })
            } else if (calendarSelectLibrary.value === 'library_23') {
                calendarEventSingle.forEach(elem => {
                    calendarMonthDates.forEach((dates) => {
                        if (elem.getAttribute('data-lib') !== 'library_23') {
                            elem.style.display = 'none';
                            elem.style.visibility = 'hidden';
                        } else {
                            elem.style.display = 'block';
                            elem.style.visibility = 'visible';
                        }

                        if (elem.getAttribute('data-lib') === 'library_23') {
                            if (elem.parentNode.id === dates.getAttribute('data-id')) {
                                dates.classList += ' is-active'
                                // if(dates.classList.contains('is-active')) {
                                //     dates.addEventListener('click', () => {
                                //         dates.classList.remove('is-active')
                                //     })
                                // }
                            } else if(elem.parentNode.id !== dates.getAttribute('data-id')) {
                                dates.style.opacity = '0.5'
                            }
                        }
                    })


                })
            } else if (calendarSelectLibrary.value === 'library_32') {
                calendarEventSingle.forEach(elem => {
                    calendarMonthDates.forEach(dates => {
                        if (elem.getAttribute('data-lib') !== 'library_32') {
                            elem.style.display = 'none';
                            elem.style.visibility = 'hidden';
                        } else {
                            elem.style.display = 'block';
                            elem.style.visibility = 'visible';
                        }

                        if (elem.getAttribute('data-lib') === 'library_32') {
                            if (elem.parentNode.id === dates.getAttribute('data-id')) {
                                dates.classList += ' is-active'
                            }
                        }
                    })
                })
            }
        })
    }
}

export {Calendar}