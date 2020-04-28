class FormatError extends SyntaxError {
    constructor(message) {
        super();
        this.message = message;
        this.name = this.constructor.name;
    }
}