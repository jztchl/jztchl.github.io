import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'kmvishnu625@gmail.com',
      subject,
      html: `
        <h3>New message from ${name} on Portfolio</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 });
  }
}
