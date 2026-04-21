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

    // 📧 Email Template (clean + readable)
    const html = `
      <div style="font-family: Inter, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; background: #f9f9f9;">
        <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #46396A; margin-bottom: 20px; border-bottom: 3px solid #46396A; padding-bottom: 10px;">
            🚀 New Strategy Call Request
          </h2>

          <div style="margin-bottom: 25px;">
            <h3 style="color: #46396A; margin-bottom: 15px;">👤 Personal Info</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px 0;">${escape(data.fullName)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0;">${escape(data.workEmail)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0;">${escape(data.phone) || "Not provided"}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 25px;">
            <h3 style="color: #46396A; margin-bottom: 15px;">🏪 Store Info</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; width: 120px;">Store Name:</td>
                <td style="padding: 10px 0;">${escape(data.storeName) || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Store URL:</td>
                <td style="padding: 10px 0;">
                  <a href="${escape(data.storeUrl)}" style="color: #46396A; text-decoration: none;">
                    ${escape(data.storeUrl) || "Not provided"}
                  </a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Category:</td>
                <td style="padding: 10px 0;">${escape(data.whatDoYouSell) || "Not provided"}</td>
              </tr>
            </table>
          </div>

          <div>
            <h3 style="color: #46396A; margin-bottom: 15px;">🎯 Goals</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; width: 120px;">Goal:</td>
                <td style="padding: 10px 0;">${escape(data.achieve) || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Launch:</td>
                <td style="padding: 10px 0;">${escape(data.launchSoon) || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Features:</td>
                <td style="padding: 10px 0;">${escape(data.features) || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Revenue:</td>
                <td style="padding: 10px 0;">${escape(data.monthlyRevenue) || "Not provided"}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #46396A; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 12px;">
              Submitted at: ${new Date().toLocaleString('en-US', { 
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full',
                timeStyle: 'long'
              })}
            </p>
          </div>
        </div>
      </div>
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