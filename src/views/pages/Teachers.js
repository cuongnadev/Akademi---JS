import { Pagination, SearchActionsPanel, TeacherItem } from '../components';
import { TeachersController } from '~/controllers';
import config from '~/config';
import { TeachersRepository } from '~/models/repositories';

export class Teachers {
    constructor() {
        this.teachersPerPage = 12;
        this.currentPage = 1;

        this.container = document.createElement('div');
        this.container.className = 'teachers-container flex flex-col gap-10';

        // search actions panel
        this.searchActionsPanel = new SearchActionsPanel('New Teacher', config.routes.teacherAddNew);

        // student list
        this.teachersList = document.createElement('div');
        this.teachersList.className = 'teachers-list-container';

        // list
        this.list = document.createElement('div');
        this.list.className = 'list-teacher-items';

        // pagination
        this.pagination = new Pagination(this.handlePageChange.bind(this));

        this.teachersList.append(this.list, this.pagination.render());

        this.container.append(this.searchActionsPanel.render(), this.teachersList);

        this.handleListTeachers(TeachersRepository.getTeachers());
    }

    async handleListTeachers(data) {
        this.data = await data;
        this.updateTeachersList();
    }

    // Function called on page change
    handlePageChange(page) {
        this.currentPage = page;
        this.updateTeachersList();
    }

    // Update student list based on current page
    updateTeachersList() {
        const start = (this.currentPage - 1) * this.teachersPerPage;
        const end = start + this.teachersPerPage;
        const teachersToShow = this.data.slice(start, end);

        this.list.innerHTML = '';

        // Show
        teachersToShow.forEach((teacher) => {
            this.teacherItem = new TeacherItem(teacher).render();

            this.list.append(this.teacherItem);
        });
    }

    render() {
        return this.container;
    }
}
