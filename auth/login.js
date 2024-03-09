const Admin = require('../models/admin');
const ApiError = require('../utils/ApiError');
const mail = require('../utils/mail');
module.exports = async function login(req, res, next) {

    const isExist = await Admin.findOne({ userName });
    if (isExist) return next(new ApiError("Please signUp first!", 404))
    // Send the email
    const mailResponse = await mail({ to: isExist.email, OTP: "1234" });
    return res.json("login successfully");
}
