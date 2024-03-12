const mail = require('./mail');
const ApiError = require('./ApiError');
const identityTokenGenerator = require('./identityTokenGenerator');
const { generateToken, authenticateToken } = require('./jwtToken');

module.exports = {
    mail,
    ApiError,
    identityTokenGenerator,
    authenticateToken,
    generateToken
}