const express = require('express');
const app = express();
const routers = require('./route/index');
const { ApiError } = require('./utils');
const { errorHandler: globalErrorHandler } = require('./middleware');

app.use(express.json());

if (process.env.NODE_ENV === "DEVELOPMENT") {
    const morgan = require('morgan');
    app.use(morgan("combined"));
}

app.use("/api/v1", routers);

app.use("*", (req, res, next) => {
    return next(new ApiError("Route not found", 404, { url: req.baseUrl, method: req.method }));
});

app.use(globalErrorHandler);

module.exports = app;
