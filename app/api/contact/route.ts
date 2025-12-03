import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Configure Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email recipients
    const recipients = [
      'aasimm.khan@ARKtechnologies.ltd',
      'deb.mukhuty@ARKtechnologies.ltd'
    ];

    // Email content
    const mailOptions = {
      from: `"ARK Technologies Website" <${process.env.GMAIL_USER}>`,
      to: recipients.join(', '),
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 5px;
                display: block;
              }
              .value {
                color: #4b5563;
                padding: 10px;
                background: white;
                border-radius: 4px;
                border: 1px solid #e5e7eb;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">From ARK Technologies Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field">
                  <span class="label">Company:</span>
                  <div class="value">${company}</div>
                </div>
                ${message ? `
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>This email was sent from the contact form on ARKtechnologies.ltd</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company}
${message ? `Message: ${message}` : ''}

---
This email was sent from the contact form on ARKtechnologies.ltd
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

