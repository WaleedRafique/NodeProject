// Standard success-response shape used by every controller.
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({ status, message, data });
};

export default handleResponse;
