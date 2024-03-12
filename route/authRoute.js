const { login, signUp, verifyMail, resetPassword, generateVerificationToken } = require('../auth');
const authRoute = require('express').Router();

authRoute.post('/signUp', signUp);
authRoute.get('/verifyMail/:id', verifyMail);
authRoute.get('/generateVerifyMailToken/:email', generateVerificationToken);
authRoute.post('/login', login)
authRoute.get('/resetPassword', resetPassword);
authRoute.get('/resetPassword/:id', resetPassword);

module.exports = authRoute;
