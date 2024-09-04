import { createContainer } from '~/utils';
import { headerActions } from './HeaderActions';
import { Button, Input, buttonSizes, buttonVariants } from '~/views/components';
import { searchIcon } from '~/constants';

export class Header {
    // Header
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'header-container flex items-center';

        // header title
        this.title = document.createElement('h2');
        this.title.className = 'header-title';

        this.searchInput = new Input(
            {
                placeholder: 'Search here...',
                type: 'text',
                onchange: () => {},
            },
            'search-input',
        );
        this.searchIcon = new Button(
            null,
            searchIcon,
            null,
            buttonVariants.iconOnly,
            buttonSizes.iconOnly,
            'action-btn search-btn',
            () => {},
        );
        this.search = createContainer(
            'search-container flex items-center',
            this.searchIcon.render(),
            this.searchInput.render(),
        );

        this.headerActions = new headerActions();
        this.container.append(this.title, this.search, this.headerActions.render());
    }

    render(title) {
        this.title.innerText = title;
        return this.container;
    }
}
