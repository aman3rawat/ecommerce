module.exports = function finalErroHandler(error, req, res, next) {
    const { message = "Internal server Error!", statusCode = 500, data, stack } = error;
    return res.json({ status: false, error: message, statusCode, data });
}
