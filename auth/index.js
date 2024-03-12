const login = require('./login');
const signUp = require('./signUp');
const verifyMail = require('./verifyMail');
const resetPassword = require('./resetPassword');
const generateVerificationToken = require('./generateVerificationToken');

module.exports = {
    login,
    signUp,
    verifyMail,
    resetPassword,
    generateVerificationToken
}