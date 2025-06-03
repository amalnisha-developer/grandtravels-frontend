// api/send-email.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Only POST requests allowed' });
        return;
    }

    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'amalnisha7705@gmail.com',  // replace with your email
            pass: 'tscm vmzs otdm xjbh'  // replace with your email password or use environment variables
        }
    });

    const mailOptions = {
        from: email,
        to: 'amalnisha7705@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent: ' + info.response });
    } catch (error) {
        res.status(500).json({ message: error.toString() });
    }
};
