import { SearchActionsPanel } from '../components';

export class Students {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'students-container';

        this.searchActionsPanel = new SearchActionsPanel();
        this.container.append(this.searchActionsPanel.render());
    }

    render() {
        return this.container;
    }
}
