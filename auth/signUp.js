const Admin = require("../models/admin");
const ApiError = require("../utils/ApiError");

module.exports = async function signUp(req, res, next) {
    const isExist = await Admin.findOne({ username: req.body.userName });
    if (!isExist) return next(new ApiError("username already exist!", 409));
    const createdAdmin = await Admin.create({ userName: "admin123", password: "123456789", firstName: "Tulsi", middleName: "Das", lastName: "Chaurasiya", phoneNumber: "9809767453", email: "tdc@gmail.com" });
    console.log("createdAdmin", createdAdmin);
    const admin = await Admin.find();
    return res.json(admin);
}
