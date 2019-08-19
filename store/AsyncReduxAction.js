export default class AsyncReduxAction {
    constructor(action){
        this.action = action;
    }

    get REQUEST() {
        return `${this.action}_REQUEST`;
    }

    get RESPONSE() {
        return `${this.action}_RESPONSE`;
    }

    get ACTION() {
        return this.action;
    }
}
