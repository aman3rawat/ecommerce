class ApiError extends Error {
    constructor(message, statusCode, data, stack) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        this.stack = stack;
    }
}

module.exports = ApiError;