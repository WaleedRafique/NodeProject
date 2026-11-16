// Custom error class that carries an HTTP status code.
// Services throw this; the error-handling middleware turns it into a response.
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export default AppError;
