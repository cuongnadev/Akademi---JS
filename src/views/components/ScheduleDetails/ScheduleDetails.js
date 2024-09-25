export class ScheduleDetails {
    constructor(role) {
        this.container = document.createElement('div');
        this.container.className = 'schedule-details';
    }

    render() {
        return this.container;
    }
}
