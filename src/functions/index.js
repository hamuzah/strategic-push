// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
admin.initializeApp();
sgMail.setApiKey('YOUR_SENDGRID_API_KEY'); // Replace with your SendGrid API key

exports.sendContactEmail = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const msg = {
      to: 'your-email@example.com', // Replace with your email address
      from: 'noreply@yourdomain.com', // Replace with your verified SendGrid sender email
      subject: 'New Contact Form Submission',
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };
    try {
      await sgMail.send(msg);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });
