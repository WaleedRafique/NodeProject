// Middleware layer: validates req.body against a Joi schema
// BEFORE the request reaches the controller.
const validate = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({
            status: 400,
            message: "Validation failed",
            errors: error.details.map((d) => d.message),
        });
    }
    req.body = value; // sanitized values (trimmed, coerced, etc.)
    next();
};

export default validate;
