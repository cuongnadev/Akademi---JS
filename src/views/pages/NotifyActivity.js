import { NotifyActivityController } from '~/controllers';
import { createContainer, formatDate } from '~/utils';

export class NotifyActivity {
    constructor() {
        this.name = 'Notification & Latest Activity';
        this.container = document.createElement('div');
        this.container.className = 'notify-activity';
    }

    getClassName() {
        return this.name;
    }

    // Hàm để kiểm tra xem thông báo thuộc ngày hôm nay, hôm qua, hay ngày cụ thể
    categorizeDate(date) {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const compareDate = new Date(date);

        if (compareDate.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (compareDate.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return formatDate(compareDate);
        }
    }

    renderTimeline(latestNotifications) {
        this.listItemContainer = document.createElement('div');
        this.listItemContainer.className = 'timeline-list  flex flex-col items-start';

        let currentGroup = '';

        latestNotifications.forEach((item) => {
            const itemContentContainer = document.createElement('div');
            itemContentContainer.className = 'timeline-item';

            const dateObject = new Date(item.date);
            const category = this.categorizeDate(dateObject);

            if (category !== currentGroup) {
                this.groupItemContainer = document.createElement('div');
                this.groupItemContainer.className = 'timeline-group  flex flex-col items-start gap-6';

                currentGroup = category;

                // Tạo tiêu đề cho nhóm mới
                const groupTitle = document.createElement('h3');
                groupTitle.className = 'timeline-title text-lg font-bold';
                groupTitle.innerText = currentGroup;

                this.groupItemContainer.append(groupTitle);

                this.listItemContainer.append(this.groupItemContainer);
            }

            const formattedDate = formatDate(dateObject);

            const dateElement = document.createElement('p');
            dateElement.className = 'timeline-date text-sm text-gray-500';
            dateElement.innerText = formattedDate;
            itemContentContainer.appendChild(dateElement);

            if (item.type === 'textNotify') {
                const textContent = document.createElement('p');
                textContent.className = 'timeline-text';
                textContent.innerHTML = `<span>${item.title}</span> ${item.content}`;
                itemContentContainer.appendChild(textContent);
            } else if (item.type === 'imagesNotify') {
                const textContent = document.createElement('p');
                textContent.className = 'timeline-text';
                textContent.innerHTML = `<span>${item.title}</span> ${item.contentText}`;

                const imageContainer = document.createElement('div');
                imageContainer.className = 'timeline-images flex items-center';

                item.contentImages.forEach((imageSrc) => {
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = 'Timeline Image';
                    img.className = 'timeline-image';
                    imageContainer.appendChild(img);
                });

                itemContentContainer.append(textContent, imageContainer);
            } else if (item.type === 'reminderNotify') {
                const textContent = document.createElement('p');
                textContent.className = 'timeline-text';
                textContent.innerHTML = `<span class="reminder">${item.title}</span> ${item.content}`;
                itemContentContainer.appendChild(textContent);
            }

            this.groupItemContainer.append(itemContentContainer);
        });

        this.container.appendChild(this.listItemContainer);
    }

    getLatestNotifications(data) {
        const latestNotifications = data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);
        this.renderTimeline(latestNotifications);
    }

    async handleData() {
        this.timelineData = await NotifyActivityController.getNotifyActivitys();
        this.getLatestNotifications(this.timelineData);
    }

    render() {
        this.handleData();
        return this.container;
    }
}
