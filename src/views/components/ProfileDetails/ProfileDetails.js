import { callIcon, emailIcon, locationIcon, masking2, userIcon } from '~/constants';
import { createContainer } from '~/utils';

export class ProfileDetails {
    constructor(role) {
        const CONTACT = [
            {
                label: 'Parents:',
                icon: userIcon,
                text: 'Justin Hope',
            },
            {
                label: 'Address:',
                icon: locationIcon,
                text: 'Jakarta, Indonesia',
            },
            {
                label: 'Phone:',
                icon: callIcon,
                text: 'Justin Hope',
            },
            {
                label: 'Email:',
                icon: emailIcon,
                text: 'cuongna@gmail.com',
            },
        ];

        this.container = document.createElement('div');
        this.container.className = 'profile-details';

        // image background
        this.image = document.createElement('div');
        this.image.className = 'profile-details-image flex';
        this.image.innerHTML = `<img src=${masking2} alt='' />`;
        // info details
        // name
        this.name = document.createElement('h3');
        this.name.className = 'profile-details-name';
        this.name.innerHTML = 'Java Boy';
        // role
        this.role = document.createElement('p');
        this.role.className = 'profile-details-role';
        this.role.innerHTML = role === 'Teacher' ? `IT Teacher` : `Student`;
        // contact
        this.contacts = document.createElement('div');
        this.contacts.className = 'profile-details-contacts flex items-center gap-10';
        // contact item
        CONTACT.map((item) => {
            // item
            // item label
            this.itemLabel = document.createElement('p');
            this.itemLabel.className = 'contact-item-label';
            this.itemLabel.innerHTML = item.label;
            // item content
            // icon
            this.itemIcon = document.createElement('div');
            this.itemIcon.className = 'contact-item-icon flex items-center justify-center';
            this.itemIcon.innerHTML = item.icon;
            // text
            this.itemText = document.createElement('p');
            this.itemText.className = 'contact-item-text';
            this.itemText.innerText = item.text;
            this.itemContent = createContainer(
                'contact-item-content flex items-center gap-4',
                this.itemIcon,
                this.itemText,
            );
            this.contactItem = createContainer(
                'contact-item flex flex-col items-start gap-2',
                role === 'Teacher' ? '' : this.itemLabel,
                this.itemContent,
            );
            if (role === 'Teacher' && item.label === 'Parents:') {
                return;
            }
            this.contacts.append(this.contactItem);
        });
        this.infoDetails = createContainer('profile-details-info', this.name, this.role, this.contacts);
        this.container.append(this.image, this.infoDetails);
    }

    render() {
        return this.container;
    }
}
