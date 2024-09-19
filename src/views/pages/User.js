import { callIcon, emailIcon, locationIcon, masking1, placeholder } from '~/constants';
import { UserController } from '~/controllers';

export class User {
    constructor() {
        this.name = 'User Dashboard';

        this.container = document.createElement('div');
        this.container.className = 'user-dashboard-container flex flex-col gap-10';

        // get User
        this.user = UserController.getUser();
        console.log(this.user);

        // profile
        this.profile = document.createElement('div');
        this.profile.className = 'user-dashboard-profile';

        // image background
        this.image = document.createElement('div');
        this.image.className = 'user-dashboard-profile-image flex';
        this.image.innerHTML = `<img src=${masking1} alt='' />`;

        // info
        this.infoUser = document.createElement('div');
        this.infoUser.className = 'user-dashboard-profile-info flex items-center';

        // card
        this.infoCard = document.createElement('div');
        this.infoCard.className = 'info-card flex flex-col items-start';
        // name
        this.infoName = document.createElement('h3');
        this.infoName.className = 'info-card-name';
        this.infoName.innerText = `${this.user.lastName} ${this.user.firstName}`;
        // role
        this.infoRole = document.createElement('h3');
        this.infoRole.className = 'info-card-role';
        this.infoRole.innerText = 'Admin';
        // location
        this.location = document.createElement('div');
        this.location.className = 'info-card-location flex items-center gap-2';
        // icon
        this.locationIcon = document.createElement('div');
        this.locationIcon.className = 'info-card-location-icon';
        this.locationIcon.innerHTML = locationIcon;
        // location text
        this.locationText = document.createElement('div');
        this.locationText.className = 'info-card-location-text';
        this.locationText.innerText = `${this.user.address}`;
        this.location.append(this.locationIcon, this.locationText);
        this.infoCard.append(this.infoName, this.infoRole, this.location);

        // phone
        this.phone = document.createElement('div');
        this.phone.className = 'info-phone flex flex-col items-start gap-5';
        // title
        this.phoneTitle = document.createElement('p');
        this.phoneTitle.className = 'info-phone-title';
        this.phoneTitle.innerText = 'Phone';
        // icon
        this.phoneIcon = document.createElement('div');
        this.phoneIcon.className = 'info-phone-icon flex items-center justify-center';
        this.phoneIcon.innerHTML = callIcon;
        // text
        this.phoneText = document.createElement('p');
        this.phoneText.className = 'info-phone-text';
        this.phoneText.innerText = `+84 ${this.user.phone}`;
        // content
        this.phoneContent = document.createElement('p');
        this.phoneContent.className = 'info-phone-content flex items-center gap-4';
        this.phoneContent.append(this.phoneIcon, this.phoneText);
        this.phone.append(this.phoneTitle, this.phoneContent);

        // email
        this.email = document.createElement('div');
        this.email.className = 'info-email flex flex-col items-start gap-5';
        // title
        this.emailTitle = document.createElement('p');
        this.emailTitle.className = 'info-email-title';
        this.emailTitle.innerText = 'Email';
        // icon email
        this.emailIcon = document.createElement('div');
        this.emailIcon.className = 'info-email-icon flex items-center justify-center';
        this.emailIcon.innerHTML = emailIcon;
        // text
        this.emailText = document.createElement('p');
        this.emailText.className = 'info-email-text';
        this.emailText.innerText = `${this.user.email}`;
        // content
        this.emailContent = document.createElement('p');
        this.emailContent.className = 'info-email-content flex items-center gap-4';
        this.emailContent.append(this.emailIcon, this.emailText);
        this.email.append(this.emailTitle, this.emailContent);

        this.infoUser.append(this.infoCard, this.phone, this.email);

        // avatar
        this.avatar = document.createElement('div');
        this.avatar.className = 'user-dashboard-profile-avatar flex items-center justify-center';
        this.avatar.innerHTML = `<img src=${this.user.image ? this.user.image : placeholder} alt='' />`;

        this.profile.append(this.image, this.infoUser, this.avatar);

        // main-panel

        this.container.append(this.profile);
    }

    getClassName() {
        return this.name;
    }

    render() {
        return this.container;
    }
}
