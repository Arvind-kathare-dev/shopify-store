// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { formSchema } from "@/lib/validation";

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

    // 🔒 Validate
    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

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
      <div style="font-family: Inter, sans-serif; padding: 20px;">
        <h2 style="color:#46396A;">🚀 New Strategy Call Request</h2>

        <h3>👤 Personal Info</h3>
        <p><b>Name:</b> ${escape(data.fullName)}</p>
        <p><b>Email:</b> ${escape(data.workEmail)}</p>
        <p><b>Phone:</b> ${escape(data.phone)}</p>

        <hr/>

        <h3>🏪 Store Info</h3>
        <p><b>Store:</b> ${escape(data.storeName)}</p>
        <p><b>URL:</b> ${escape(data.storeUrl)}</p>
        <p><b>Category:</b> ${escape(data.whatDoYouSell)}</p>

        <hr/>

        <h3>🎯 Goals</h3>
        <p><b>Goal:</b> ${escape(data.achieve)}</p>
        <p><b>Launch:</b> ${escape(data.launchSoon)}</p>
        <p><b>Features:</b> ${escape(data.features)}</p>
        <p><b>Revenue:</b> ${escape(data.monthlyRevenue)}</p>
      </div>
    `;

    // 📤 Send email
    await transporter.sendMail({
      from: `"CTA Form" <${process.env.GMAIL_USER}>`,
      to: "arvindkathare13@gmail.com",
      // to: "admin@veloc.in",
      subject: "🚀 New Strategy Call Request",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}