const { restrictTo, authenticator } = require('./authentication');
const errorHandler = require('./globalErrorHandler');

module.exports = {
    authenticator,
    restrictTo,
    errorHandler
}
