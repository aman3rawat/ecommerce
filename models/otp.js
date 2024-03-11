const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    refId: { type: String, required: true },
    mail: { type: String, required: true },
    otp: { type: String, required: true },
    expiresIn: Date
}, { timestamps: true })

const OTP = mongoose.model('otp', otpSchema);
module.exports = OTP;
