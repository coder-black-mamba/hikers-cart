// eslint-disable-next-line import/no-extraneous-dependencies
import createHttpError from 'http-errors';
import nodemailer from 'nodemailer';

// nodemailer.createTestAccount((err, account) => {
//     if (err) {
//         console.log(`Failed to create a testing account. ${err.message}`);
//         return process.exit(1);
//     }
// });
// const transporter = nodemailer.createTransport({
//     host: 'sandbox.smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//         user: '822ec973b52d91',
//         pass: '25d73c4f20f8d7',
//     },
// });

const transporter = nodemailer.createTransport({
    host: 'live.smtp.mailtrap.io',
    port: 587,
    auth: {
        user: 'api',
        pass: 'ca6e6ab413eb42aa6d34adb4583edfbc',
    },
});
const sendEmail = async (to, subject, text, html) => {
    try {
        const mailOptions = {
            from: '<rhwhitteker@mailtrap.io>',
            to,
            subject,
            text,
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.log(error);
        return createHttpError(error);
    }
};

export default sendEmail;
