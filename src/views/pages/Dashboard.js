import { studentIcon, teacherIcon, calendarIcon, foodIcon } from '~/constants';
import { OverviewItem } from '../components/OverviewItem';
import { schoolPerformance, schoolCalendar, schoolFinance } from '~/constants';
const OverviewItemTypes = [
    {
        title: 'Students',
        quantity: 500,
        icon: studentIcon,
    },
    {
        title: 'Teachers',
        quantity: 400,
        icon: teacherIcon,
    },
    {
        title: 'Events',
        quantity: 300,
        icon: calendarIcon,
    },
    {
        title: 'Food',
        quantity: 200,
        icon: foodIcon,
    },
];
export class Dashboard {
    // Demo to run login
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'dashboard-container flex flex-col justify-start items-center gap-10';

        this.overviews = document.createElement('div');
        this.overviews.className = 'overviews-container flex items-center';

        this.contentOverview = document.createElement('div');
        this.contentOverview.className = 'overviews-content flex items-center';

        this.overviews.append(this.contentOverview);

        OverviewItemTypes.map((item) => {
            this.contentOverview.append(
                new OverviewItem().render(item.title, item.quantity, item.icon, `${item.title.toLowerCase()}`),
            );
        });

        // School Performance
        this.schoolPerformance = document.createElement('div');
        this.schoolPerformance.className = 'school-performance-container';
        this.schoolPerformanceImg = document.createElement('img');
        this.schoolPerformanceImg.src = schoolPerformance;
        this.schoolPerformance.append(this.schoolPerformanceImg);

        // School Calendar
        this.schoolCalendar = document.createElement('div');
        this.schoolCalendar.className = 'school-calendar-container';
        this.schoolCalendarImg = document.createElement('img');
        this.schoolCalendarImg.src = schoolCalendar;
        this.schoolCalendar.append(this.schoolCalendarImg);

        this.schoolFinance = document.createElement('div');
        this.schoolFinance.className = 'school-finance-container';
        this.schoolFinanceImg = document.createElement('img');
        this.schoolFinanceImg.src = schoolFinance;
        this.schoolFinance.append(this.schoolFinanceImg);

        this.schoolOperations = document.createElement('div');
        this.schoolOperations.className = 'school-operations flex items-center gap-10';

        this.schoolOperations.append(this.schoolCalendar, this.schoolFinance);

        this.container.append(this.overviews, this.schoolPerformance, this.schoolOperations);
    }

    render() {
        return this.container;
    }
}
