import { ProfileDetails, ScheduleDetails } from '../components';

export class TeacherDetail {
    constructor() {
        this.name = 'Teacher Details';
        this.container = document.createElement('div');
        this.container.className = 'teacher-details-container flex';

        // profile detail
        this.profileDetails = new ProfileDetails('Teacher');

        // schedule details
        this.scheduleDetails = new ScheduleDetails('Teacher');

        this.container.append(this.profileDetails.render(), this.scheduleDetails.render());
    }

    getClassName() {
        return this.name;
    }

    render() {
        return this.container;
    }
}
