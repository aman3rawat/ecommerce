const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    emailVerified: { type: Boolean, default: false },
    numberVerified: { type: Boolean, default: false }
}, { timestamps: true })

const User = mongoose.model('user', userSchema);
const Admin = mongoose.model('admin', userSchema);

module.exports = { Admin, User };
