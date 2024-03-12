const jwt = require('jsonwebtoken');
const { ApiError } = require('../utils');

async function authenticator(req, res, next) {

    let { authToken } = req.headers['Authorization']

    if (!authToken || !authToken.startsWith('Bearer ')) return next(new ApiError('UnAuthenticated', 406))

    authToken = authToken.split(' ')[1]

    let decodedData

    try {
        decodedData = jwt.verify(authToken, process.env.JWT_SECRET)
    } catch (err) {
        return next(new ApiError('Authentication failed', 406))
    }

    if (!decodedData.id) return next(new ApiError('Authentication failed', 406))

    req.user = {
        id: decodedData.id,
        username: decodedData.username,
        role: decodedData.role
    }

    next()
}

function restrictTo(...roles) {
    return (req, res, next) => {
        if (!roles.includes(['ADMIN', 'USER'].valueOf(req.user.role))) return next(new ApiError("You Don't Have Permission to Access this Route.", 406))
        next()
    }
}

module.exports = {
    authenticator,
    restrictTo
}
