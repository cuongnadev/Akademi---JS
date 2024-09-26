import { createContainer, formatDate } from '~/utils';

export class ScheduleDetails {
    constructor(role) {
        this.container = document.createElement('div');
        this.container.className = 'schedule-details';

        // schedule list
        this.scheduleList = document.createElement('div');
        this.scheduleList.className = 'schedule-details-list flex flex-col gap-6';

        // header
        this.headerSchedule = document.createElement('div');
        this.headerSchedule.className = 'schedule-details-header flex flex-col items-start gap-2';
        // Title
        this.headerScheduleTitle = document.createElement('h3');
        this.headerScheduleTitle.className = 'schedule-details-header-title';
        this.headerScheduleTitle.innerHTML = 'Schedule Details';
        // subTitle
        this.headerScheduleSubTitle = document.createElement('p');
        this.headerScheduleSubTitle.className = 'schedule-details-header-sub-title';
        const currentDate = new Date();
        this.headerScheduleSubTitle.innerHTML = formatDate(currentDate);

        this.headerSchedule.append(this.headerScheduleTitle, this.headerScheduleSubTitle);

        this.scheduleList.append(this.headerSchedule);

        this.container.appendChild(this.scheduleList);
    }

    render() {
        return this.container;
    }
}
