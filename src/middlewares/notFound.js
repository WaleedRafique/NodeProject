import AppError from "../utils/appError.js";

// Runs when no route matched the request -> forwards a 404
// to the error handler, so the response stays standard JSON.
const notFound = (req, res, next) => {
    next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404));
};

export default notFound;
