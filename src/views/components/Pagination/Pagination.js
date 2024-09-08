import { Button, buttonSizes, buttonVariants } from '../Button';
import { createContainer } from '~/utils';
import { dropdownIcon } from '~/constants';

export class Pagination {
    constructor() {
        this.containerPagination = document.createElement('div');
        this.containerPagination.className = 'pagination-container flex items-center justify-between';

        // title
        this.title = document.createElement('p');
        this.title.className = 'pagination-title';
        this.title.innerHTML = 'Showing <span>1-5</span> from <span>100</span> data';

        // actions
        this.actions = document.createElement('div');
        this.actions.className = 'pagination-actions flex items-center gap-4';
        // dropdown left
        this.dropdownLeft = new Button(
            null,
            dropdownIcon,
            null,
            buttonVariants.iconOnly,
            buttonSizes.iconOnly,
            'dropdown-left',
            () => {},
        );
        this.actions.append(this.dropdownLeft.render());

        for (let i = 0; i < 3; i++) {
            const pageButton = new Button(
                i + 1,
                null,
                null,
                buttonVariants.outlined,
                buttonSizes.iconOnly,
                'page-button',
                () => {},
            );
            this.actions.append(pageButton.render());
        }

        this.dropdownRight = new Button(
            null,
            null,
            dropdownIcon,
            buttonVariants.iconOnly,
            buttonSizes.iconOnly,
            'dropdown-right',
            () => {},
        );
        this.actions.append(this.dropdownRight.render());
        this.containerPagination.append(this.title, this.actions);
    }

    render() {
        return this.containerPagination;
    }
}
