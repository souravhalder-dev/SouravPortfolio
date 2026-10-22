import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipient = "skhsouravhalder@gmail.com";
    const formattedSubject = subject?.trim() || `New Portfolio Inquiry from ${name}`;

    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Referer: "https://sourav-halder-portfolio.vercel.app",
        Origin: "https://sourav-halder-portfolio.vercel.app",
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        subject: formattedSubject,
        message,
        _subject: `[Portfolio Message] ${formattedSubject}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const responseText = await formSubmitResponse.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: responseText };
    }

    return NextResponse.json({
      success: true,
      message: "Your message was sent successfully to skhsouravhalder@gmail.com!",
      data,
    });
  } catch (error: any) {
    console.error("Contact API dispatch error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send message via gateway. Please send directly to skhsouravhalder@gmail.com.",
      },
      { status: 500 }
    );
  }
}
