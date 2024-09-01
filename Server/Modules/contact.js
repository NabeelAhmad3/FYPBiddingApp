const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, street, city, postCode, phoneNo, email, message,subject } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'carbiddingapp@gmail.com',
            pass: 'bjjj zgun cupi pozi'
        }
    });

    const mailOptions = {
        from: 'carbiddingapp@gmail.com',
        to: 'nabeelahmadkhan03@gmail.com',
        subject: 'New Contact Us Form Submission',
        text: `
      Name: ${name}
      Street: ${street}
      City: ${city}
      Post Code: ${postCode}
      Phone No: ${phoneNo}
      Email: ${email}
      Message: ${message}
      subject:${subject}
    `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;
