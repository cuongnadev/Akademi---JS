import { Pagination, SearchActionsPanel } from '../components';
import { TeachersController } from '~/controllers';
import config from '~/config';

export class Teachers {
    constructor() {
        this.data = [];
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
        this.pagination = new Pagination((currentPage) => TeachersController.handlePageChange(currentPage, this));

        this.teachersList.append(this.list, this.pagination.render());

        this.container.append(this.searchActionsPanel.render(), this.teachersList);

        TeachersController.handleListTeachers(this);
    }

    render() {
        return this.container;
    }
}
