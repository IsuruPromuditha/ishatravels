// server/test-mail.js
// Run from the server folder:  node test-mail.js
require('dotenv').config({ path: __dirname + '/.env' });
const nodemailer = require('nodemailer');

const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO'];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error('Missing in .env:', missing.join(', '));
  process.exit(1);
}

console.log('Using account:', process.env.SMTP_USER);
console.log('Password length:', process.env.SMTP_PASS.length, '(App Password should be 16)');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

// Fake booking, same shape the website sends
const testBooking = {
  fullName: 'Test Customer',
  email: process.env.MAIL_TO, // confirmation goes to you for the test
  phone: '+94 77 123 4567',
  pickupLocation: 'CMB Airport',
  dropLocation: 'Ella',
  startDate: '2026-12-01',
  daysCount: 7,
};

(async () => {
  try {
    await transporter.verify();
    console.log('1) Login OK');

    await transporter.sendMail({
      from: `"Website Bookings" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: testBooking.email,
      subject: `TEST tour inquiry: ${testBooking.fullName} (${testBooking.pickupLocation} → ${testBooking.dropLocation})`,
      html: `<h2>Test Tour Inquiry</h2><pre>${JSON.stringify(testBooking, null, 2)}</pre>`,
    });
    console.log('2) Test email sent to', process.env.MAIL_TO, '- check inbox (and spam)');
  } catch (err) {
    console.error('FAILED:', err.code, '-', err.message);
    process.exit(1);
  }
})();