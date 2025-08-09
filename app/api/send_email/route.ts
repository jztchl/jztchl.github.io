import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const my_email =process.env.MY_EMAIL as string;
const from_email = process.env.FROM_EMAIL as string;
export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: from_email, 
      to: my_email,
      subject: subject,
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
