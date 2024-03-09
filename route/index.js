const app = require('express')();
const authRoute = require('./authRoute');

app.use("/auth", authRoute);

module.exports = app;
