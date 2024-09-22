export class PanelItem {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'panel-item-container';
    }

    render() {
        return this.container;
    }
}
