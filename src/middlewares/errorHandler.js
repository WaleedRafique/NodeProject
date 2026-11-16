// Centralized error handling: anything passed to next(err) lands here.
// AppError carries a statusCode; unexpected errors become 500.
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const status = err.statusCode || 500;
    res.status(status).json({
        status,
        message: err.statusCode ? err.message : "Something went wrong",
    });
};

export default errorHandler;
