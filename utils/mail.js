const MAIL_SETTINGS = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
}

const nodemailer = require('nodemailer');
// Set up email transporter
const transporter = nodemailer.createTransport(MAIL_SETTINGS);

function getTemplate(TYPE) {
    if (TYPE === "RESET") {
        return `<div style="max-width: 90%; margin: auto; padding-top: 20px">
      <h2>RESET PASSWORD.</h2>
      <p style="margin-bottom: 30px;">Go Through The Below Link</p>
      <div style="margin-bottom: 30px; text-align: center;"><a href=${params.url}</a></div>
      </div>`;
    }
    return `<div style="max-width: 90%; margin: auto; padding-top: 20px">
    <h2>Welcome to the club.</h2>
    <h4>You are officially In ✔</h4>
    <p style="margin-bottom: 30px;">Please click on the link below the verify your mail</p>
    <div style="margin-bottom: 30px; border: 4px solid; text-align: center;"><a href=${params.url}>Verify Email</a></div>
    </div>`;
    // return `<div style="max-width: 90%; margin: auto; padding-top: 20px">
    // <h2>Welcome to the club.</h2>
    // <h4>You are officially In ✔</h4>
    // // <p style="margin-bottom: 30px;">Please enter the sign up OTP to get started</p>
    // // <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.OTP}</h1>
    // <p style="margin-bottom: 30px;">Please click on the link below the verify your mail</p>
    // <div style="margin-bottom: 30px; border: 4px solid; text-align: center;"><a href=${params.url}>Verify Email</a></div>
    // </div>`;
}

module.exports = async function sendMail(params) {
    try {
        let info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
            to: params.to,
            subject: params.TYPE === "SIGNUP" ? 'HELLO WELCOME ✔' : "RESET PASSWORD",
            html: getTemplate(params.TYPE)
        });
        return info;
    } catch (error) {
        console.log(error);
        return false;
    }
};
