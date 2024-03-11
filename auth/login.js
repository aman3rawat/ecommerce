const { Admin } = require('../models');
const { ApiError, mail, generateToken } = require('../utils');

module.exports = async function login(req, res, next) {

    const { userName, password } = req.body;
    const isExist = await Admin.findOne({ userName, password });
    if (isExist) return next(new ApiError("Please signUp first!", 404))
    if (!isExist.emailVerified) {
        // Send the email
        const token = await identityTokenGenerator("VERIFY");
        await OTP.create({ refId: token, expiresIn: Date.now() + 15 * 1000 * 60, mail: email });
        url = `${BASE_URL}verifyMail/${token}`;
        await mail({ to: isExist.email, url, TYPE: "SIGNUP" });
        return next(new ApiError('Please check you mail for verification!', 404))
    }
    const jwtToken = await generateToken({ userName: isExist.userName, email: isExist.email });
    return res.json({ status: true, message: "login successfully", token: jwtToken });
}
