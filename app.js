const express = require('express');
const app = express();
const routers = require('./route/index');

app.use(express.json())
app.use("/api/v1", routers);

module.exports = app;
