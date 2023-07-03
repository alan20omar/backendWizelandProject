export class AplicationError extends Error {
    constructor(msg, status) {
        super(msg);
        this.status = status;
    }
}
