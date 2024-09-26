import { callIcon, dotsIcon, emailIcon, locationIcon, masking2, placeholder, userIcon } from '~/constants';
import { createContainer } from '~/utils';
import { Button, buttonSizes, buttonVariants } from '../Button';

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
        const parentInfo = [
            {
                label: 'Email:',
                text: `cuongna@gmail.com`,
            },
            {
                label: 'Phone:',
                text: `84+ 931643274`,
            },
            {
                label: 'Address:',
                text: `Quảng Đông, Châu Đốc`,
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

        // About
        // label
        this.aboutLabel = document.createElement('h3');
        this.aboutLabel.className = 'profile-details-label';
        this.aboutLabel.innerHTML = 'About:';
        // content
        this.aboutContent = document.createElement('p');
        this.aboutContent.className = 'profile-details-text-content';
        this.aboutContent.innerHTML =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
        this.about = createContainer(
            'profile-details-about flex flex-col items-start gap-4',
            this.aboutLabel,
            this.aboutContent,
        );

        // Education or Parent detail
        // label
        this.eduOrParentLabel = document.createElement('h3');
        this.eduOrParentLabel.className = 'profile-details-label';
        this.eduOrParentLabel.innerHTML = role === 'Teacher' ? 'Education:' : 'Parent Details:';
        // content
        // edu
        this.eduName = document.createElement('p');
        this.eduName.className = 'profile-details-edu-name flex items-center';
        this.eduName.innerHTML = `<span> &#8226; </span>VKU`;
        // start date
        this.eduStart = document.createElement('p');
        this.eduStart.className = 'profile-details-edu-date';
        this.eduStart.innerHTML = `<span>Start Date:</span> 1 January 1999`;
        // end date
        this.eduEnd = document.createElement('p');
        this.eduEnd.className = 'profile-details-edu-date';
        this.eduEnd.innerHTML = `<span>End Date:</span> 1 January 1999`;
        this.eduContent = createContainer(
            'profile-details-edu-content flex flex-col items-start gap-2',
            this.eduName,
            this.eduStart,
            this.eduEnd,
        );
        // parent
        this.parentContent = document.createElement('div');
        this.parentContent.className = 'profile-details-parent-content flex flex-col items-start gap-2';
        parentInfo.map((item) => {
            this.parentContentItem = document.createElement('p');
            this.parentContentItem.className = 'profile-details-parent-content-item';
            this.parentContentItem.innerHTML = `<span>${item.label}</span> ${item.text}`;

            this.parentContent.append(this.parentContentItem);
        });
        this.eduOrParent = createContainer(
            'profile-details-edu-or-parent flex flex-col items-start gap-4',
            this.eduOrParentLabel,
            role === 'Teacher' ? this.eduContent : this.parentContent,
        );

        // Expertise or Class
        this.expertiseOrClassLabel = document.createElement('h3');
        this.expertiseOrClassLabel.className = 'profile-details-label';
        this.expertiseOrClassLabel.innerHTML = role === 'Teacher' ? 'Expertise:' : 'Class:';
        // content
        // expertise
        this.expertiseContent = document.createElement('p');
        this.expertiseContent.className = 'profile-details-text-content';
        this.expertiseContent.innerHTML = `IT`;
        // class
        this.classContent = document.createElement('p');
        this.classContent.className = 'profile-details-text-content';
        this.classContent.innerHTML = `VII B`;
        this.expertiseOrClass = createContainer(
            'profile-details-expertise-or-class flex flex-col gap-4',
            this.expertiseOrClassLabel,
            role === 'Teacher' ? this.expertiseContent : this.classContent,
        );

        // actions
        this.actions = new Button(
            null,
            null,
            dotsIcon,
            buttonVariants.iconOnly,
            buttonSizes.iconOnly,
            'profile-details-actions',
            () => {},
        );

        // avatar
        this.avatar = document.createElement('div');
        this.avatar.className = 'profile-details-avatar flex items-center justify-center';
        this.avatar.innerHTML = `<img src=${placeholder} alt='' />`;

        this.infoDetails = createContainer(
            'profile-details-info',
            this.name,
            this.role,
            this.contacts,
            this.about,
            this.eduOrParent,
            this.expertiseOrClass,
            this.actions.render(),
            this.avatar,
        );
        this.container.append(this.image, this.infoDetails);
    }

    render() {
        return this.container;
    }
}
