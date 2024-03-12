const { Admin } = require("../models");
const { ApiError, identityTokenGenerator, mail } = require("../utils");

module.exports = async function generateVerificationToken(req, res, next) {
    const email = req.params.email;
    if (!email) return next(new ApiError("Please provide valid email!", 401))
    const isDataExist = await Admin.findOne({ email });
    if (!isDataExist) return next(new ApiError("Sign Up first", 401))
    const token = await identityTokenGenerator("MAILID");
    url = `${process.env.BASE_URL}verifyMail/${token}`;
    await mail({ to: isDataExist.email, url, TYPE: "SIGNUP" });
    return res.json({ success: true, message: "verification url send successfully to provided mail" });
}
