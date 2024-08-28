export class PrimaryLayout {
    // Demo to run login
    constructor() {
        // Global container
        this.globalContainer = document.createElement('div');
        this.globalContainer.className = 'global-container';
    }

    render(childNode) {
        // In ra childNode để kiểm tra
        console.log('Child Node:', childNode);

        // Append childNode to global container
        if (childNode instanceof HTMLElement) {
            this.globalContainer.appendChild(childNode);
        } else if (childNode && typeof childNode.render === 'function') {
            this.globalContainer.appendChild(childNode.render());
        }
        return this.globalContainer;
    }
}
