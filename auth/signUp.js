const { Admin, OTP } = require("../models");
const { identityTokenGenerator } = require("../services");
const { ApiError, mail } = require("../utils");

module.exports = async function signUp(req, res, next) {
    const data = { userName, password, firstName, lastName, phoneNumber, email } = req.body;
    console.log("data", data);
    const isExist = await Admin.findOne({ userName: data.userName });
    console.log("data", isExist);
    if (isExist) return next(new ApiError("username already exist!", 409));
    // const otp = await identityTokenGenerator("OTP");
    const token = await identityTokenGenerator("VERIFY");
    await OTP.create({ refId: token, expiresIn: Date.now() + 15 * 1000 * 60, mail: email });
    url = `${BASE_URL}verifyMail/${token}`;
    await mail({ to: email, url, TYPE: "SIGNUP" });
    await Admin.create(data);
    return res.json({ success: true, message: "otp send successfully to provided mail" });
}
