import { createContainer, formatDate } from '~/utils';
import { ScheduleItem } from './ScheduleItem';
import { StudentsController, TeachersController } from '~/controllers';

export class ScheduleDetails {
    constructor(role, id) {
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

        this.createScheduleItem(role, id);

        this.container.appendChild(this.scheduleList);
    }

    async createScheduleItem(role, id) {
        try {
            const data =
                role === 'Teacher'
                    ? await TeachersController.getTeacherSchedule(id.teacherId)
                    : await StudentsController.getStudentSchedule(id.studentId);

            if (Array.isArray(data) && data.length > 0) {
                data.map((course) => {
                    this.scheduleItem = new ScheduleItem(
                        role,
                        course.name,
                        `Class ${course.class}`,
                        course.major,
                        course.dow,
                        course.time,
                    );
                    this.scheduleList.append(this.scheduleItem.render());
                });
            } else {
                const noScheduleMessage = document.createElement('p');
                noScheduleMessage.className = 'schedule-details-not-schedule';
                noScheduleMessage.innerText = 'No Schedule';
                this.scheduleList.append(noScheduleMessage);
            }
        } catch (error) {
            const noScheduleMessage = document.createElement('p');
            noScheduleMessage.className = 'schedule-details-not-schedule';
            noScheduleMessage.innerText = 'No Schedule';
            this.scheduleList.append(noScheduleMessage);
        }
    }

    render() {
        return this.container;
    }
}
