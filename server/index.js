// server/index.js
// Install: npm i express cors nodemailer dotenv express-rate-limit
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));

// Max 5 booking requests per IP per 15 minutes
app.use('/api/booking', rateLimit({ windowMs: 15 * 60 * 1000, max: 5 }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

app.post('/api/booking', async (req, res) => {
  const { fullName, email, phone, pickupLocation, dropLocation, startDate, daysCount, website } = req.body;

  // Honeypot: bots fill hidden fields. Pretend success.
  if (website) return res.json({ ok: true });

  if (!fullName || !isEmail(email) || !pickupLocation || !dropLocation || !startDate) {
    return res.status(400).json({ ok: false, message: 'Please fill in all required fields correctly.' });
  }

  const rows = [
    ['Name', fullName],
    ['Email', email],
    ['Phone', phone || '-'],
    ['Pickup', pickupLocation],
    ['Drop', dropLocation],
    ['Start date', startDate],
    ['Duration', `${daysCount} day(s)`],
  ];

  const table = rows
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold">${k}</td><td style="padding:6px 12px">${esc(v)}</td></tr>`)
    .join('');

  try {
    // 1) Notify your team
    await transporter.sendMail({
      from: `"Website Bookings" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New tour inquiry: ${fullName} (${pickupLocation} → ${dropLocation})`,
      html: `<h2>New Tour Inquiry</h2><table>${table}</table>`,
    });

    // 2) Confirmation to the customer
    await transporter.sendMail({
      from: `"${process.env.COMPANY_NAME || 'Sri Lanka Tours'}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'We received your tour inquiry',
      html: `<p>Hi ${esc(fullName)},</p>
             <p>Thanks for your inquiry! Our local travel expert will contact you shortly.</p>
             <h3>Your details</h3><table>${table}</table>`,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({ ok: false, message: 'Could not send your inquiry. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Mail server running on port ${PORT}`));
