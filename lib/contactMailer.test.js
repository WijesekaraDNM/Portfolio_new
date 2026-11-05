const test = require('node:test');
const assert = require('node:assert/strict');

const { sendContactEmail, validateContactForm } = require('./contactMailer.js');

test('validateContactForm rejects empty required fields', () => {
  const result = validateContactForm({
    name: '',
    email: 'test@example.com',
    message: 'Hello',
  });

  assert.equal(result.ok, false);
  assert.match(result.message, /name/i);
});

test('sendContactEmail returns success when payload is valid', async () => {
  const result = await sendContactEmail({
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hello from the test suite',
  }, {
    createTransport: () => ({
      sendMail: async (mailOptions) => ({
        messageId: 'test-id',
        info: mailOptions,
      }),
    }),
  });

  assert.equal(result.ok, true);
  assert.equal(result.messageId, 'test-id');
});
