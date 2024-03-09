const { login, signUp } = require('../auth');

const authRoute = require('express').Router();

authRoute.get('/login', login)
authRoute.get('/signUp', signUp);

module.exports = authRoute;