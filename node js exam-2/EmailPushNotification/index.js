const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

let userCart = {
    userId: 'user123',
    items: ['item1', 'item2'],
    checkoutStarted: false,
    email: 'user@example.com',
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const sendEmail = (email, discount) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Limited-Time Offer!',
        text: `Hurry! You get a ${discount}% discount if you checkout within the next 15 minutes!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
app.post('/user-checkout', (req, res) => {
    if (userCart.items.length && !userCart.checkoutStarted) {
        userCart.checkoutStarted = true;
        sendEmail(userCart.email, 10); 
        return res.json({ message: 'Discount offer sent!' });
    }
    res.status(400).json({ message: 'Checkout already started or cart is empty.' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
