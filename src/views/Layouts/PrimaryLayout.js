import { NavSidebar } from './Components/NavSideBar';
export class PrimaryLayout {
    // Demo to run login
    constructor() {
        // Global container
        this.globalContainer = document.createElement('div');
        this.globalContainer.className = 'global-container flex';

        // initializes content upon successful login
        window.addEventListener('logging', () => {
            this.initContent();
        });
    }
    initContent() {
        // Navigation sidebar
        this.navSidebar = new NavSidebar();
        this.globalContainer.append(this.navSidebar.render());

        // Content container
        this.contentContainer = document.createElement('div');
        this.contentContainer.className = 'content-container';
        this.globalContainer.append(this.contentContainer);
    }

    render(childNode) {
        // Append childNode to global container
        if (childNode instanceof HTMLElement) {
            this.contentContainer.appendChild(childNode);
        } else if (childNode && typeof childNode.render === 'function') {
            this.contentContainer.appendChild(childNode.render());
        }
        return this.globalContainer;
    }
}
