import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[ShopNext Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
              <td style="padding: 8px 0; color: #333;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #fff; border-radius: 4px; border: 1px solid #e5e5e5;">
            <p style="font-weight: bold; color: #555; margin-bottom: 5px;">Message:</p>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
            Sent from ShopNext Contact Form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
