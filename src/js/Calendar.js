class Calendar {
    constructor() {
        this.initLayout();
        // this.initEventsInside();
    }

    initLayout() {
        this.mainContentInside = document.querySelector('.main-content__inside');
        this.calendar = document.createElement('div');
        this.calendar.className = 'main-content__calendar';

        this.calendarMonth = document.createElement('ul');
        this.calendarMonth.className = 'calendar__month';

        for (let i = 0; i < 31; i++) {
            this.calendarDay = document.createElement('li');
            this.calendarDay.className = 'calendar__month_date';
            this.calendarDay.innerHTML = i + 1;
            this.calendarMonth.appendChild(this.calendarDay);
        }

        this.calendarEvents = document.createElement('ul');
        this.calendarEvents.className = 'calendar__events';

        for (let i = 0; i < 10; i++) {
            this.calendarEventsSingle = document.createElement('li');
            this.calendarEventsSingle.className = 'calendar__events_single';
            this.calendarEventsSingle.id = 'calendarEvent_' + `${i + 1}`;

            this.calendarEventsSingle.innerHTML = `
                <h4><span>1${i}:${i * 5}</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;Библиотека №${i + 1}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum minima provident quas quisquam quos sit sunt temporibus veritatis voluptate. Culpa cumque deleniti dolorum facere facilis incidunt iste ratione voluptas?</p>
            `;

            this.calendarEvents.appendChild(this.calendarEventsSingle);
        }

        //Appends
        this.mainContentInside.appendChild(this.calendar);
        this.calendar.appendChild(this.calendarMonth);
        this.calendar.appendChild(this.calendarEvents);
    }

    initEventsInside() {
        this.calendarEvent_1 = document.getElementById('calendarEvent_1');
        this.calendarEvent_2 = document.getElementById('calendarEvent_2');
        this.calendarEvent_3 = document.getElementById('calendarEvent_3');
        this.calendarEvent_4 = document.getElementById('calendarEvent_4');
    }
}

export { Calendar }