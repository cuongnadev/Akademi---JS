import { createContainer } from '~/utils';

export class LoginLayout {
    /**
     *
     * @param {LoginForm | RegisterForm} form
     */
    constructor(form) {
        // login_layout

        // global container
        this.container = createContainer('login_layout-container');
        // form
        this.form = form;

        // add elements to global container
        this.container.append(this.form.render());
    }

    render() {
        return this.container;
    }
}
