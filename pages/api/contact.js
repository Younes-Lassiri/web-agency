// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, budget, description } = req.body;

  if (!name || !email || !budget || !description) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use `host`, `port`, and `auth` if using another provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // where you want to receive the messages
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Budget: ${budget}
        Project Description:
        ${description}
      `,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Email sending error:', err);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
