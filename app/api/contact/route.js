import { sendContactEmail } from '../../../lib/contactMailer.js';

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await sendContactEmail(body);

    if (!result.ok) {
      return Response.json(
        { ok: false, message: result.message },
        { status: 400 }
      );
    }

    return Response.json({
      ok: true,
      message: 'Message sent successfully.',
      messageId: result.messageId,
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);

    return Response.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : 'Something went wrong while sending your message.',
      },
      { status: 500 }
    );
  }
}
