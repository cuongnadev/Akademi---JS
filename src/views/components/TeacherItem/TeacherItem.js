import { callIcon, emailIcon, dotsIcon, placeholder } from '~/constants';
import { Button, buttonSizes, buttonVariants } from '../Button';
import { Router } from '~/routes';
import routes from '~/config/routes';

export class TeacherItem {
    constructor(teacher) {
        this.container = document.createElement('div');
        this.container.className = 'teacher-item-container flex flex-col items-center';

        this.container.addEventListener('click', () => {
            Router.pushState(routes.teacherDetail);
        });

        // avatar
        this.avatar = document.createElement('img');
        this.avatar.className = 'teacher-item-avatar';
        this.avatar.src = teacher.avatar ? teacher.avatar : placeholder;
        this.avatar.alt = '';

        // name
        this.teacherName = document.createElement('h3');
        this.teacherName.className = 'teacher-item-name';
        this.teacherName.innerText = teacher.name;

        // major
        this.major = document.createElement('p');
        this.major.className = 'teacher-item-major';
        this.major.innerText = teacher.major;

        // contact
        // contact
        // call
        this.call = new Button(
            null,
            callIcon,
            null,
            buttonVariants.iconOnly,
            buttonSizes.iconOnly,
            'teacher-item-call',
            () => {},
        );
        // mail
        this.mail = new Button(
            null,
            emailIcon,
            null,
            buttonVariants.iconOnly,
            buttonSizes.iconOnly,
            'teacher-item-mail',
            () => {},
        );
        this.contact = document.createElement('div');
        this.contact.className = 'teacher-item-contact flex items-center justify-center gap-4';
        this.contact.append(this.call.render(), this.mail.render());

        // action
        this.actions = new Button(
            null,
            dotsIcon,
            null,
            buttonVariants.iconOnly,
            buttonSizes.iconOnly,
            'teacher-item-actions',
            () => {},
        ).render();

        this.container.append(this.avatar, this.teacherName, this.major, this.contact, this.actions);
    }

    render() {
        return this.container;
    }
}
