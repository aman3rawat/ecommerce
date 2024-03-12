const { Admin, AuthToken } = require("../models");
const { ApiError, mail, identityTokenGenerator } = require("../utils");

module.exports = async function signUp(req, res, next) {
    const data = { userName, password, firstName, lastName, phoneNumber, email } = req.body;
    console.log("data", data);
    const isExist = await Admin.findOne({ userName: data.userName });
    console.log("data", isExist);
    if (isExist) return next(new ApiError("username already exist!", 409));
    // const otp = await identityTokenGenerator("AuthToken");
    const token = await identityTokenGenerator("MAILID");
    await AuthToken.create({ refId: token, expiresIn: Date.now() + 15 * 1000 * 60, mail: data.email });
    url = `${process.env.BASE_URL}verifyMail/${token}`;
    await mail({ to: data.email, url, TYPE: "SIGNUP" });
    await Admin.create(data);
    return res.json({ success: true, message: "verification url send successfully to provided mail" });
}
