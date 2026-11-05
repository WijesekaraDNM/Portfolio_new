const nodemailer = require('nodemailer');

function validateContactForm(formData = {}) {
  const name = String(formData.name || '').trim();
  const email = String(formData.email || '').trim();
  const message = String(formData.message || '').trim();

  if (!name) {
    return { ok: false, message: 'Name is required.' };
  }

  if (!email) {
    return { ok: false, message: 'Email is required.' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: 'Please enter a valid email address.' };
  }

  if (!message) {
    return { ok: false, message: 'Message is required.' };
  }

  return {
    ok: true,
    data: { name, email, message },
  };
}

async function sendContactEmail(formData, transporterOverride) {
  const validation = validateContactForm(formData);
  if (!validation.ok) {
    return validation;
  }

  const { name, email, message } = validation.data;

  const mailHost = process.env.MAIL_HOST;
  const mailPort = Number(process.env.MAIL_PORT || 587);
  const mailUser = process.env.MAIL_USER;
  const mailPass = process.env.MAIL_PASS;
  const mailTo = process.env.MAIL_TO || mailUser;

  const hasPlaceholderValue = (value) =>
    typeof value === 'string' && /your-|example|placeholder|test@|app-password/i.test(value);

  if (!transporterOverride && (!mailHost || !mailUser || !mailPass || !mailTo || hasPlaceholderValue(mailHost) || hasPlaceholderValue(mailUser) || hasPlaceholderValue(mailPass) || hasPlaceholderValue(mailTo))) {
    return {
      ok: false,
      message:
        'Email is not configured yet. Add real values for MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, and MAIL_TO in your .env.local file.',
    };
  }

  const transporter = transporterOverride
    ? (typeof transporterOverride.createTransport === 'function'
      ? transporterOverride.createTransport({
          host: mailHost,
          port: mailPort,
          secure: mailPort === 465,
          auth: {
            user: mailUser,
            pass: mailPass,
          },
        })
      : transporterOverride)
    : nodemailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: mailPort === 465,
        auth: {
          user: mailUser,
          pass: mailPass,
        },
      });

  const result = await transporter.sendMail({
    from: `"${name}" <${mailUser}>`,
    replyTo: email,
    to: mailTo,
    subject: `Portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });

  return {
    ok: true,
    messageId: result.messageId,
  };
}

module.exports = {
  validateContactForm,
  sendContactEmail,
};
