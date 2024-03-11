const { Admin } = require("../models");
const { ApiError, identityTokenGenerator, mail } = require("../utils");

module.exports = async function ResetPassword(req, res, next) {
    if (req.params.id) {
        // change password
        const id = req.params.id;
        const { confirmPassword, password } = req.query;
        if (confirmPassword === password) return next(new ApiError("Please provide valid password!"))
        const isValid = await OTP.findOne({ refId: id });
        if (!isValid) return next(new ApiError("Link is not generated, Please try again!"))
        if (isValid.expiresIn < Date.now()) return next(new ApiError("Link is expired, try again!"))
        const updatePassword = await Admin.findOneAndUpdate({ email: isValid.mail }, { $set: { password } }, { new: true });
        if (updatePassword.password !== password) {
            return next(new ApiError("Password is not reset, Try Again!", 401));
        }
        return res.json({ status: true, message: "Reset password successfully!" })
    } else {
        // generate reset password url
        const email = req.query.email;
        if (!email) return next(new ApiError("Please provide valid email id", 401))
        const isUserExist = await Admin.findOne({ email });
        if (!isUserExist) return next(new ApiError("Sign up first!", 401));

        // const otp = await identityTokenGenerator("OTP");
        const id = await identityTokenGenerator("MAILID");
        url = `${BASE_URL}resetPassword/${id}`;
        await mail({ to: email, url, TYPE: "RESET" });
        await OTP.create({ refId: id, expiresIn: Date.now() + 15 * 1000 * 60 });
    }
}
