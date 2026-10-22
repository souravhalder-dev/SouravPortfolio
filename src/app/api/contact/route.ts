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

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipient = "skhsouravhalder@gmail.com";
    const formattedSubject = subject?.trim() || `New Portfolio Inquiry from ${name}`;

    // Dispatch directly to skhsouravhalder@gmail.com via FormSubmit
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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

    const data = await formSubmitResponse.json();

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
