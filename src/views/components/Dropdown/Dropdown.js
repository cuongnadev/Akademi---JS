export class Dropdown {
    constructor() {
        this.open = false;
        this.dropdown = document.createElement('div');
        this.dropdown.className = 'dropdown-container';
    }
    init(triggerElement, dropdownLinks) {
        // Dropdown Trigger
        this.trigger = triggerElement;
        this.trigger.classList.add('dropdown-trigger');
        this.trigger.addEventListener('click', this.toggleOpen.bind(this));

        // Dropdown Content
        this.content = document.createElement('div');
        this.content.className = 'dropdown-content hidden';

        // Dropdown Link
        dropdownLinks.forEach((link) => {
            const dropdownLink = document.createElement('a');
            dropdownLink.href = link.href;
            dropdownLink.className = 'dropdown-link';
            dropdownLink.innerText = link.label;
            this.content.appendChild(dropdownLink);

            dropdownLink.addEventListener('click', (event) => {
                event.preventDefault();
                link.action();
            });
        });

        this.dropdown.appendChild(this.content);

        this.trigger.appendChild(this.dropdown);

        document.addEventListener('click', this.handleClickOutside.bind(this));
    }

    toggleOpen(event) {
        event.stopPropagation();
        this.open = !this.open;
        this.updateDropdownState();
    }

    updateDropdownState() {
        if (this.open) {
            this.content.classList.remove('hidden');
        } else {
            this.content.classList.add('hidden');
        }
    }

    handleClickOutside(event) {
        if (this.open && !this.dropdown.contains(event.target)) {
            this.open = false;
            this.updateDropdownState();
        }
    }
}
