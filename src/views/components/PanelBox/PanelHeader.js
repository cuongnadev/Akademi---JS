export class PanelHeader {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'panel-header flex items-center justify-between';

        // title
        this.title = document.createElement('div');
        this.title.className = 'panel-header-title flex flex-col items-start gap-1';
        // main title
        this.mainTitle = document.createElement('h3');
        this.mainTitle.className = 'panel-header-main-title';
    }

    render(title, subTitle, action) {
        this.mainTitle.innerHTML = title;

        this.title.append(this.mainTitle);

        if (subTitle) {
            // sub title
            this.subTitle = document.createElement('p');
            this.subTitle.className = 'panel-header-sub-title';
            this.subTitle.innerHTML = subTitle;
            this.title.append(this.subTitle);
        }

        this.container.append(this.title);

        if (action) {
            // action
            this.action = action;
            this.container.append(this.action);
        }
        return this.container;
    }
}
