export class Dashboard {
    // Demo to run login
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'dashboard-container';

        this.container.innerText = 'Hello Demo';
    }

    render() {
        return this.container;
    }
}
