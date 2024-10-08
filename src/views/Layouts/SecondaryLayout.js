import { createContainer } from '~/utils';
import { NavSidebar, Header, headerActions, RightSidebar } from './Components';
import { PrimaryLayoutController } from '~/controllers/PrimaryLayout';
export class SecondaryLayout {
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
        this.admin = JSON.parse(localStorage.getItem('admin')) || JSON.parse(sessionStorage.getItem('admin'));
        this.email = this.admin.email;
        this.password = this.admin.password;

        // Header
        this.header = new Header();
        this.header.container.classList.add('secondary');
        this.header.headerActions.callData(PrimaryLayoutController.getDataProfile(this.email, this.password));

        // Navigation sidebar
        this.navSidebar = new NavSidebar();
        this.globalContainer.append(this.navSidebar.render());

        // Content container
        this.contentContainer = document.createElement('div');
        this.contentContainer.className = 'content-container flex-1';
        this.globalContainer.append(this.contentContainer);

        // SidebarRight
        this.headerActions = new headerActions();
        this.headerActions.callData(PrimaryLayoutController.getDataProfile(this.email, this.password));
        this.RightSidebar = new RightSidebar();
        this.childrenRightSidebar = document.createElement('div');
        this.childrenRightSidebar.className = 'right-sidebar-children-container';
        // Demo
        this.childrenRightSidebar.innerText = 'Demo children';
        this.globalContainer.append(this.RightSidebar.render(this.headerActions.render(), this.childrenRightSidebar));
    }

    render(childNode) {
        this.contentContainer.innerHTML = '';
        // Append childNode to global container
        typeof childNode.getClassName === 'function'
            ? this.contentContainer.append(this.header.render(childNode.getClassName()), childNode.render())
            : this.contentContainer.append(this.header.render(childNode.constructor.name), childNode.render());
        return this.globalContainer;
    }
}
