class Calendar {
    constructor() {
        this.initLayout();
    }

    initLayout() {
        this.mainContentInside = document.querySelector('.main-content__inside');
        this.calendar = document.createElement('div');
        this.calendar.className = 'main-content__calendar';

        this.calendarMonth = document.createElement('ul');


        for (let i = 0; i < 31; i++) {
            this.calendarDay = document.createElement('li');
            this.calendarDay.innerHTML = i + 1;
            this.calendarMonth.appendChild(this.calendarDay);
        }

        //Appends
        this.mainContentInside.appendChild(this.calendar);
        this.calendar.appendChild(this.calendarMonth);
    }
}

export { Calendar }