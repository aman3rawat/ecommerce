const { OTP, Admin } = require('../models');
const { ApiError, mail } = require('../utils');

module.exports = async function verifyMail(req, res, next) {
    const id = req.params.id;
    // const otp = req.query.otp;
    const data = await OTP.findOne({ refId: id });
    if (!data) return next(new ApiError("Link is not generated, Please try again!"))
    if (data.expiresIn < Date.now()) return next(new ApiError("Link is expired, try again!"))
    // const isExist = await Admin.findOne({ userName });
    // if (isExist) return next(new ApiError("Please signUp first!", 404))
    // Send the email
    const updateUser = await Admin.findOneAndUpdate({ email: data.mail }, { $set: { emailVerified: true } }, { new: true });
    if (!updateUser.emailVerified) {
        await Admin.findOneAndDelete({ email: data.mail });
        return next(new ApiError("Email Not Verified, Sign Up Again!", 401));
    }
    return res.json({ status: true, message: "Email Verified!" })
}
