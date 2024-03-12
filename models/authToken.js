const mongoose = require('mongoose');

const authschema = new mongoose.Schema({
    refId: { type: String, required: true },
    mail: { type: String, required: true },
    // otp: { type: String, required: true },
    expiresIn: Date
}, { timestamps: true })

const AuthToken = mongoose.model('authToken', authschema);
module.exports = AuthToken;
