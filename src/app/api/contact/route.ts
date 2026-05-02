// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic in-memory rate limit (per IP)
const rateLimit = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    // 🌐 Rate limiting (simple)
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    if (rateLimit.has(ip) && now - rateLimit.get(ip)! < 10000) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }
    rateLimit.set(ip, now);

    // 📥 Parse body
    const body = await req.json();

    // ✅ Check if required fields exist (basic check only)
    if (!body.fullName || !body.workEmail) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const data = body;

    // ✉️ Transporter (secure)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 🧼 Escape helper (basic sanitization)
    const escape = (str: string = "") =>
      str.replace(/[&<>"']/g, (m) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[m]!));

    // 📧 Email Template (Premium & Responsive)
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Strategy Call Request</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f7f9;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          }
          .header {
            background: linear-gradient(135deg, #46396A 0%, #635293 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .header p {
            margin: 10px 0 0;
            opacity: 0.9;
            font-size: 16px;
          }
          .content {
            padding: 40px 30px;
          }
          .section {
            margin-bottom: 35px;
          }
          .section-title {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #46396A;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #f0f0f0;
          }
          .info-grid {
            width: 100%;
            border-collapse: collapse;
          }
          .info-grid td {
            padding: 12px 0;
            vertical-align: top;
          }
          .label {
            width: 140px;
            font-weight: 600;
            color: #666;
            font-size: 14px;
          }
          .value {
            color: #1a1a1a;
            font-size: 15px;
          }
          .badge {
            display: inline-block;
            padding: 4px 12px;
            background: #f0ecf9;
            color: #46396A;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
          }
          .cta-button {
            display: inline-block;
            padding: 14px 28px;
            background-color: #46396A;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            margin-top: 20px;
            transition: background 0.3s ease;
          }
          .footer {
            background-color: #fcfcfc;
            padding: 25px 30px;
            text-align: center;
            border-top: 1px solid #f0f0f0;
            color: #888;
            font-size: 13px;
          }
          @media only screen and (max-width: 600px) {
            .container {
              margin: 0;
              border-radius: 0;
            }
            .content {
              padding: 30px 20px;
            }
            .label {
              width: 100px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Strategy Call</h1>
            <p>You've received a new lead from the contact form</p>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-title">👤 Contact Information</div>
              <table class="info-grid">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value">${escape(data.fullName)}</td>
                </tr>
                <tr>
                  <td class="label">Work Email</td>
                  <td class="value"><a href="mailto:${escape(data.workEmail)}" style="color: #46396A; text-decoration: none; font-weight: 600;">${escape(data.workEmail)}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="value">${escape(data.phone) || '<span style="color: #ccc;">Not provided</span>'}</td>
                </tr>
              </table>
            </div>

            <div class="section">
              <div class="section-title">🏪 Store Details</div>
              <table class="info-grid">
                <tr>
                  <td class="label">Store Name</td>
                  <td class="value"><strong>${escape(data.storeName) || "Not provided"}</strong></td>
                </tr>
                <tr>
                  <td class="label">Website URL</td>
                  <td class="value">
                    ${data.storeUrl ? `<a href="${escape(data.storeUrl)}" style="color: #46396A; text-decoration: underline;">${escape(data.storeUrl)}</a>` : '<span style="color: #ccc;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td class="label">Niche/Category</td>
                  <td class="value">${escape(data.whatDoYouSell) || "Not provided"}</td>
                </tr>
              </table>
              ${data.storeUrl ? `
                <div style="text-align: center;">
                  <a href="${escape(data.storeUrl)}" class="cta-button">Visit Store ↗</a>
                </div>
              ` : ''}
            </div>

            <div class="section">
              <div class="section-title">🎯 Business Insights</div>
              <table class="info-grid">
                <tr>
                  <td class="label">Primary Goal</td>
                  <td class="value">${escape(data.achieve) || "Not provided"}</td>
                </tr>
                <tr>
                  <td class="label">Launch Timeline</td>
                  <td class="value"><span class="badge">${escape(data.launchSoon) || "Not provided"}</span></td>
                </tr>
                <tr>
                  <td class="label">Monthly Revenue</td>
                  <td class="value"><span class="badge" style="background: #e8f5e9; color: #2e7d32;">${escape(data.monthlyRevenue) || "Not provided"}</span></td>
                </tr>
                <tr>
                  <td class="label">Requested Features</td>
                  <td class="value" style="padding-top: 15px;">
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #46396A; font-style: italic;">
                      ${escape(data.features) || "No specific features mentioned."}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="footer">
            <p>This email was sent from the <strong>Veloc</strong> Shopify Store Contact Form.</p>
            <p style="margin-top: 10px; font-size: 11px; opacity: 0.8;">
              Submitted on ${new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    })} (IST)
            </p>
          </div>
        </div>
      </body>
      </html>
    `;


    // 📤 Send email
    await transporter.sendMail({
      from: `"CTA Form - Strategy Call" <${process.env.GMAIL_USER}>`,
      // to: "arvindkathare13@gmail.com",
      to: "admin@veloc.in",

      replyTo: data.workEmail, // User reply kar sake directly
      subject: `🚀 New Lead: ${data.fullName} - ${data.storeName || 'Store'}`,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully"
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to submit form. Please try again.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}