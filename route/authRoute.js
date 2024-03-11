const { login, signUp, verifyMail, resetPassword } = require('../auth');
const authRoute = require('express').Router();

authRoute.post('/login', login)
authRoute.post('/signUp', signUp);
authRoute.get('/verifyMail/:id', verifyMail);
authRoute.get('/resetPassword', resetPassword);
authRoute.get('/resetPassword/:id', resetPassword);

module.exports = authRoute; 