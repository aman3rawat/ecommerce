const jwt = require('jsonwebtoken');

async function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "12h" });
}

async function authenticateToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    generateToken, authenticateToken
}
