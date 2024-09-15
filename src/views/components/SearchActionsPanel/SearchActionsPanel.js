import { createContainer } from '~/utils';
import { Button, Input, buttonSizes, buttonVariants } from '~/views/components';
import { dropdownIcon, plusIcon, searchIcon } from '~/constants';

export class SearchActionsPanel {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'search-actions-panel-container flex items-center justify-between';

        // search
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

        // Action
        // button sort
        this.sortButton = new Button(
            'Newest',
            null,
            dropdownIcon,
            buttonVariants.outlined,
            buttonSizes.md,
            'sort-button',
            () => {},
        );
        // button create new
        this.newStudentButton = new Button(
            'New Student',
            plusIcon,
            null,
            buttonVariants.filled,
            buttonSizes.md,
            'new-student-button',
            () => {},
        );
        this.actionButtonContainer = createContainer(
            'actions-button-container flex items-center gap-6',
            this.sortButton.render(),
            this.newStudentButton.render(),
        );

        this.container.append(this.search, this.actionButtonContainer);
    }

    render() {
        return this.container;
    }
}
