const mail = require('./mail');
const ApiError = require('./ApiError');
const errorHandler = require('./errorHandler');
const identityTokenGenerator = require('./identityTokenGenerator');
const { generateToken, authenticateToken } = require('./jwtToken');

module.exports = {
    mail,
    ApiError,
    errorHandler,
    identityTokenGenerator,
    authenticateToken,
    generateToken
}