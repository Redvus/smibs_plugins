import {gsap} from "gsap";
import {FilterTerms} from "./FilterTerms.js";
import {FilterLibrary} from "./FilterLibrary.js";
import {FilterEntrance} from "./FilterEntrance.js";
import {FilterAge} from "./FilterAge.js";

class Calendar {
    constructor(
        dateNow = new Date().getDate(),
        monthNow = new Date().getMonth(),
        yearNow = new Date().getFullYear(),
    ) {
        this.dateNow = dateNow;
        this.monthNow = monthNow;
        this.yearNow = yearNow;

        this.initLayoutDev(); // Скрывать для build
        this.initEventDev(); // Скрывать для build

        this.objectsTabs();
        new FilterLibrary();
        // new FilterTerms();
        // new FilterEntrance();
        // new FilterAge();

        // localStorage.clear();
    }

    // Common Layout
    initLayoutDev() {
        this.mainContentInside = document.querySelector('.main-content__inside');
        this.calendar = document.createElement('div');
        this.calendar.className = 'main-content__calendar';
        this.mainContentSubheader = document.createElement('div');
        this.mainContentSubheader.className = 'main-content__subheader';
        this.monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        this.mainContentSubheader.innerHTML = `
            <h2>Календарь событий ${this.yearNow}. ${this.monthNames[this.monthNow]}</h2>
        `;

        this.calendarMonth = document.createElement('div');
        this.calendarMonth.className = 'main-content__calendar_month';

        this.calendarWeek = document.createElement('ul');
        this.calendarWeek.className = 'calendar__week';
        this.calendarWeek.innerHTML = `
            <li>Пн</li>
            <li>Вт</li>
            <li>Ср</li>
            <li>Чт</li>
            <li>Пт</li>
            <li>Сб</li>
            <li>Вс</li>
        `;

        this.calendarMonthList = document.createElement('ul');
        this.calendarMonthList.className = 'calendar__month';
        this.calendarMonthList.id = 'objectsTab';

        this.calendarFilter = document.createElement('div');
        this.calendarFilter.classList = 'main-content__calendar_filter';

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
        this.calendarMonth.appendChild(this.calendarWeek);
        this.calendar.appendChild(this.calendarEvents);
        this.calendarMonth.appendChild(this.calendarMonthList);
        this.calendarMonth.appendChild(this.calendarFilter);
    }

    initEventDev() {
        for (let i = 0; i < 31; i++) {
            this.calendarDay = document.createElement('li');
            this.calendarDay.className = 'calendar__month_date';
            this.calendarDay.id = `calendarDate_${i}`;
            this.calendarDay.innerHTML = `<span>${i + 1}</span>`;
            // this.calendarDay.style.userSelect = 'none';
            // this.calendarDay.style.pointerEvents = 'none';
            this.calendarMonthList.appendChild(this.calendarDay);

            if (this.calendarDay.id === 'calendarDate_0') {
                this.calendarDay.className = 'calendar__month_date';
                this.calendarDay.setAttribute('data-id', 'tab_0');
                this.calendarEvent = document.createElement('div');
                this.calendarEvent.id = 'tab_0';
                this.calendarEvent.className = 'calendar__events_inside';

                this.calendarEvent.innerHTML = `
                    <li class="calendar__events_single" data-lib="Библиотека №2" data-terms="termsLecture">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_tags calendar__events_terms">Библиотека №2</span>
                                <span class="calendar__events_tags calendar__events_entrance">1 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_tags calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_tags calendar__events_entrance">Лекция</span>
                                <span class="calendar__events_tags calendar__events_terms">Вход свободный</span>
                                <span class="calendar__events_tags calendar__events_entrance">+16</span>
                            </div>
                        </div>
                    </li>
                    <li class="calendar__events_single" data-lib="Библиотека №15" data-terms="termsExhibition">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_terms">Библиотека №15</span>
                                <span class="calendar__events_entrance">1 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_entrance">Лекция</span>
                                <span class="calendar__events_terms">Вход свободный</span>
                                <span class="calendar__events_entrance">+16</span>
                                </div>
                        </div>
                    </li>
                    <li class="calendar__events_single" data-lib="Библиотека №23"  data-terms="termsLecture">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_terms">Библиотека №23</span>
                                <span class="calendar__events_entrance">1 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_entrance">Мастер-класс</span>
                                <span class="calendar__events_terms">Вход по пушкинской карте</span>
                                <span class="calendar__events_entrance">+16</span>
                            </div>
                        </div>
                    </li>
                    <li class="calendar__events_single" data-lib="Библиотека №32" data-terms="termsConferences">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_terms">Библиотека №15</span>
                                <span class="calendar__events_entrance">1 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_entrance">Выставка</span>
                                <span class="calendar__events_terms">Вход платный</span>
                            </div>
                        </div>
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
                    <li class="calendar__events_single" data-lib="Библиотека №23" data-terms="termsExhibition">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_terms">Библиотека №23</span>
                                <span class="calendar__events_entrance">2 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_entrance">Лекция</span>
                                <span class="calendar__events_terms">Вход свободный</span>
                            </div>
                        </div>
                    </li>
                    <li class="calendar__events_single" data-lib="Библиотека №32"  data-terms="termsLecture">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_terms">Библиотека №32</span>
                                <span class="calendar__events_entrance">2 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_entrance">Лекция</span>
                                <span class="calendar__events_terms">Вход свободный</span>
                            </div>
                        </div>
                    </li>
                `;

            } else if (this.calendarDay.id === 'calendarDate_2') {
                this.calendarDay.className = 'calendar__month_date';
                this.calendarDay.setAttribute('data-id', 'tab_2');
                this.calendarEvent = document.createElement('div');
                this.calendarEvent.id = 'tab_2';
                this.calendarEvent.className = 'calendar__events_inside';

                this.calendarEvent.innerHTML = `
                    <li class="calendar__events_single" data-lib="Библиотека №15" data-terms="termsExhibition">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_terms">Библиотека №15</span>
                                <span class="calendar__events_entrance">3 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_terms">Выставка</span>
                                <span class="calendar__events_entrance">Вход платный</span>
                            </div>
                        </div>
                    </li>
                    <li class="calendar__events_single" data-lib="Библиотека №32" data-terms="termsConferences">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_terms">Библиотека №32</span>
                                <span class="calendar__events_entrance">3 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_terms">Конференция</span>
                                <span class="calendar__events_entrance">Вход свободный</span>
                            </div>
                        </div>
                    </li>
                `;
            } else if (this.calendarDay.id === 'calendarDate_8') {
                this.calendarDay.className = 'calendar__month_date';
                this.calendarDay.setAttribute('data-id', 'tab_8');
                this.calendarEvent = document.createElement('div');
                this.calendarEvent.id = 'tab_8';
                this.calendarEvent.className = 'calendar__events_inside';

                this.calendarEvent.innerHTML = `
                    <li class="calendar__events_single" data-lib="Библиотека №23" data-terms="termsExhibition">
                        <div class="calendar__events_header">
                            <div class="calendar__events_pass">
                                <span class="calendar__events_terms">Библиотека №23</span>
                                <span class="calendar__events_entrance">4 ${this.monthNames[this.monthNow]}</span>
                                <span class="calendar__events_entrance calendar__events_entrance--dark">1${i}:${(i + 5) * 5}</span>
                            </div>
                        </div>
                        <h3>Название мероприятия. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
                        <div class="calendar__events_footer">
                            <div class="calendar__events_pass calendar__events_pass--bottom">
                                <span class="calendar__events_terms">Выставка</span>
                                <span class="calendar__events_entrance">Вход платный</span>
                            </div>
                        </div>
                    </li>
                `;
            }

            this.calendarEvents.appendChild(this.calendarEvent);
        }
    }

    objectsTabs() {
        this.tabMenuTrigger = document.querySelectorAll('.calendar__month_date');
        this.arrayPanels = document.querySelectorAll('.calendar__events_inside');
        let yearPresent;
        const dateFirst = document.getElementById('calendarDate_0');

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

            this.arrayPanels.forEach(tab => {
                if (this.dateNow) {
                    gsap.set(this.arrayPanels[`${this.dateNow}` - 1], {
                        autoAlpha: 1,
                        display: 'flex'
                    });
                    this.tabMenuTrigger[`${this.dateNow}` - 1].classList.add('is-show');
                }
            });

            this.arrayPanels.forEach(tab => {
                if (this.yearNow === 2025) {
                    if (this.monthNow === 4) {
                        dateFirst.classList.add('calendar__month_date--thirdsday');
                    } else if (this.monthNow === 5) {
                        dateFirst.classList.add('calendar__month_date--sunday');
                    } else if (this.monthNow === 6) {
                        dateFirst.classList.add('calendar__month_date--tuesday');
                    } else if (this.monthNow === 7) {
                        dateFirst.classList.add('calendar__month_date--friday');
                    } else if (this.monthNow === 8) {
                        dateFirst.classList.add('calendar__month_date--monday');
                    } else if (this.monthNow === 9) {
                        dateFirst.classList.add('calendar__month_date--wendsday');
                    } else if (this.monthNow === 10) {
                        dateFirst.classList.add('calendar__month_date--saturday');
                    } else if (this.monthNow === 11) {
                        dateFirst.classList.add('calendar__month_date--monday');
                    }
                } else if (this.yearNow === 2026) {
                    if (this.monthNow === 0) {
                        dateFirst.classList.add('calendar__month_date--thirdsday');
                    } else if (this.monthNow === 1) {
                        dateFirst.classList.add('calendar__month_date--sunday');
                    } else if (this.monthNow === 2) {
                        dateFirst.classList.add('calendar__month_date--sunday');
                    } else if (this.monthNow === 3) {
                        dateFirst.classList.add('calendar__month_date--wendsday');
                    } else if (this.monthNow === 4) {
                        dateFirst.classList.add('calendar__month_date--friday');
                    } else if (this.monthNow === 5) {
                        dateFirst.classList.add('calendar__month_date--monday');
                    } else if (this.monthNow === 6) {
                        dateFirst.classList.add('calendar__month_date--wendsday');
                    } else if (this.monthNow === 7) {
                        dateFirst.classList.add('calendar__month_date--saturday');
                    } else if (this.monthNow === 8) {
                        dateFirst.classList.add('calendar__month_date--tuesday');
                    } else if (this.monthNow === 9) {
                        dateFirst.classList.add('calendar__month_date--thursday');
                    } else if (this.monthNow === 10) {
                        dateFirst.classList.add('calendar__month_date--sunday');
                    } else if (this.monthNow === 11) {
                        dateFirst.classList.add('calendar__month_date--tuesday');
                    }
                }

            });
        }
    }
}

export {Calendar}