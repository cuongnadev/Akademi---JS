import { Button, buttonSizes, buttonVariants } from '../Button';
import { Search } from '../Search';
import { PanelHeader } from './PanelHeader';

export class PanelBox {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'panel-box flex flex-col gap-8 justify-between';

        // header panel
        this.headerPanel = new PanelHeader();

        // search
        this.searchPanelBox = document.createElement('div');
        this.searchPanelBox.className = 'panel-box-search';
        this.search = new Search();
        this.searchPanelBox.append(this.search.render());

        // list item
        this.listItems = document.createElement('div');
        this.listItems.className = 'panel-box-list-items';

        // btn view more
        this.viewMoreBtn = new Button(
            'View More',
            null,
            null,
            buttonVariants.filled,
            buttonSizes.md,
            'panel-box-more-btn',
            () => {},
        );
    }

    render(title, subTitle, action, listItems) {
        this.container.append(
            this.headerPanel.render(title, subTitle, action),
            this.searchPanelBox,
            this.listItems,
            this.viewMoreBtn.render(),
        );
        return this.container;
    }
}
