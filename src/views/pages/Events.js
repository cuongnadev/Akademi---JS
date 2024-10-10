import { dropdownIcon } from '~/constants';
import { Button, buttonSizes, buttonVariants, ScheduleDetails } from '../components';
import { createContainer } from '~/utils';
import { EventsRepository } from '~/models/repositories';

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
export class Events {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'events-container flex gap-10';

        // calendar
        this.calendar = document.createElement('div');
        this.calendar.className = 'events-calendar flex flex-col gap-10 flex-1';
        // header
        this.header = document.createElement('div');
        this.header.className = 'events-header flex items-center justify-between';
        // title
        this.title = document.createElement('h3');
        this.title.className = 'events-title';
        this.title.innerHTML = 'Calendar';
        // actions
        this.mouth = new Button(
            `${monthNames[new Date().getMonth()]}`,
            null,
            dropdownIcon,
            buttonVariants.outlined,
            buttonSizes.md,
            'events-action-item btn-mouth',
            () => {},
        );
        this.year = new Button(
            `${new Date().getFullYear()}`,
            null,
            dropdownIcon,
            buttonVariants.outlined,
            buttonSizes.md,
            'events-action-item btn-year',
            () => {},
        );
        this.actions = createContainer(
            'events-actions flex items-start gap-6',
            this.mouth.render(),
            this.year.render(),
        );

        this.header.append(this.title, this.actions);

        this.calendar.append(this.header);

        this.createCalendarGrid(new Date().getMonth()).then((calendarGrid) => {
            this.calendar.append(calendarGrid);
        });

        // table
        this.tableEvents = document.createElement('div');

        // schedule
        this.schedule = new ScheduleDetails('Teacher');

        this.container.append(this.calendar, this.schedule.render());
    }

    async createCalendarGrid(month) {
        const daysGridContainer = document.createElement('div');
        daysGridContainer.className = 'calendar-grid-container flex flex-col gap-6';

        // label
        const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const dayLabelsRow = document.createElement('div');
        dayLabelsRow.className = 'calendar-label-row calendar-grid';

        dayLabels.map((label) => {
            const labelCell = document.createElement('div');
            labelCell.className = 'day-label';
            labelCell.innerHTML = label;
            dayLabelsRow.append(labelCell);
        });

        daysGridContainer.append(dayLabelsRow);

        const date = new Date();
        const year = date.getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        const offset = firstDay === 0 ? 6 : firstDay - 1;

        const daysGrid = document.createElement('div');
        daysGrid.className = 'calendar-grid';

        const prevMonthDays = new Date(year, month, 0).getDate();

        // data events
        const data = await EventsRepository.getEvents();

        // Hàm lọc sự kiện theo ngày
        const filterEventsByDay = (day) => {
            return data.filter((event) => {
                const eventDate = new Date(event.day);
                return eventDate.getDate() === day;
            });
        };

        // add days in pre month
        for (let i = 0; i < offset; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day-cell empty';
            emptyCell.innerHTML = `<span>${prevMonthDays - (offset - 1 - i)}</span>`;
            daysGrid.append(emptyCell);
        }

        // add days in month
        for (let day = 1; day <= daysInMonth; day++) {
            // data
            const events = filterEventsByDay(day);

            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day-cell';
            dayCell.innerHTML = `<span>${day}</span>`;

            // events
            const dotEvents = document.createElement('div');
            dotEvents.className = 'dot-events flex items-center justify-center gap-3';

            if (events.length > 0) {
                const visibleEvents = events.slice(0, 3);

                visibleEvents.forEach((event) => {
                    const eventDot = document.createElement('div');
                    eventDot.className = `dot-events-item class-${event.class.slice(-1).toLowerCase()}`;
                    dotEvents.append(eventDot);
                });

                if (events.length > 3) {
                    dotEvents.className = 'dot-events flex items-center justify-center more';
                    const remainingCount = events.length - 3;
                    const moreIndicator = document.createElement('div');
                    moreIndicator.className = 'dot-events-item flex items-center justify-center more';
                    moreIndicator.innerHTML = `${remainingCount}+`;
                    dotEvents.append(moreIndicator);
                }
            }

            dayCell.append(dotEvents);
            daysGrid.append(dayCell);
        }

        const totalCells = offset + daysInMonth;
        const remainingCells = 7 - (totalCells % 7);

        // add days in next month
        if (remainingCells < 7) {
            for (let i = 1; i <= remainingCells; i++) {
                const nextMonthDayCell = document.createElement('div');
                nextMonthDayCell.className = 'calendar-day-cell empty';
                nextMonthDayCell.innerHTML = `<span>${i}</span>`;
                daysGrid.append(nextMonthDayCell);
            }
        }

        daysGridContainer.append(daysGrid);

        return daysGridContainer;
    }

    render() {
        return this.container;
    }
}
