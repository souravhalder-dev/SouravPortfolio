"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  User,
  Tag,
  Loader2,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

const QUICK_TOPICS = [
  "💼 Full-Time / Contract Role",
  "🚀 Full-Stack Web Project",
  "🌐 MediaWiki Knowledge Engine",
  "🛠️ WordPress Development",
  "💬 Technical Consultation",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("skhsouravhalder@gmail.com");
    setCopiedEmail(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSelectTopic = (topic: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: topic,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending message to skhsouravhalder@gmail.com...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message delivered successfully to skhsouravhalder@gmail.com!", {
          id: toastId,
        });
        setIsSubmitted(true);
      } else {
        // Fallback to mailto link if API fails
        const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `Hello Sourav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
        );
        window.location.href = `mailto:skhsouravhalder@gmail.com?subject=${subject}&body=${body}`;

        toast.info("Opening your mail client as fallback to send message.", {
          id: toastId,
        });
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hello Sourav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );
      window.location.href = `mailto:skhsouravhalder@gmail.com?subject=${subject}&body=${body}`;

      toast.info("Opening your mail client to send message.", { id: toastId });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="container max-w-7xl mx-auto py-24 sm:py-32 px-4 border-t border-border/40 relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 relative z-10">
        <div className="flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
          <MessageSquare className="w-4 h-4" />
          <span>05. Direct Connect</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
          Send a Direct Message
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Have an upcoming project, contract role, or technical collaboration? Send your message below and it will be delivered directly to{" "}
          <strong className="text-foreground font-semibold">skhsouravhalder@gmail.com</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 max-w-6xl mx-auto">
        {/* LEFT COLUMN: CONTACT CHANNELS & CREDENTIALS */}
        <div className="lg:col-span-5 space-y-4">
          {/* Status Badge */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">Available for Hire</p>
                <p className="text-[11px] text-muted-foreground">Contract & Full-Time Roles</p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md">
              ⚡ ~12h Response
            </span>
          </div>

          {/* Email Channel Card */}
          <div className="bg-card/70 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-all shadow-sm space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Direct Email</h3>
                  <p className="text-xs text-muted-foreground">Inbox monitored daily</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-muted/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors cursor-pointer border border-border/40"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href="mailto:skhsouravhalder@gmail.com"
              className="text-foreground hover:text-primary transition-colors text-sm sm:text-base font-medium break-all block pt-1"
            >
              skhsouravhalder@gmail.com
            </a>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="bg-card/70 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-border/50 hover:border-emerald-500/40 transition-all shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">WhatsApp Direct</h3>
                  <p className="text-xs text-muted-foreground">Fastest messaging & chat</p>
                </div>
              </div>

              <span className="text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                Online
              </span>
            </div>

            <a
              href="https://wa.me/8801519603043"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-emerald-500 transition-colors text-sm sm:text-base font-medium block pt-1"
            >
              +880 15196 03043
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-card/70 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-border/50 hover:border-blue-500/40 transition-all shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Phone Line</h3>
                <p className="text-xs text-muted-foreground">Mon &ndash; Sat &bull; 9 AM &ndash; 9 PM (BST)</p>
              </div>
            </div>

            <a
              href="tel:+8801519603043"
              className="text-foreground hover:text-primary transition-colors text-sm sm:text-base font-medium block pt-1"
            >
              +880 15196 03043
            </a>
          </div>

          {/* Location & Timezone Details */}
          <div className="bg-muted/20 p-4 rounded-xl border border-border/40 font-mono text-xs text-muted-foreground space-y-1.5">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Location: Khulna, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>Timezone: Bangladesh Standard Time (UTC+6)</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE HIGH-END CONTACT FORM */}
        <div className="lg:col-span-7 bg-card/80 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-border/60 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow in Card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

          {isSubmitted ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="py-12 px-4 text-center space-y-6 relative z-10 animate-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Message Delivered!</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-foreground">{formData.name}</strong>. Your message was dispatched directly to{" "}
                  <span className="text-primary font-medium">skhsouravhalder@gmail.com</span>. I will review and reply to your email shortly.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  variant="outline"
                  className="rounded-xl"
                >
                  Send Another Message
                </Button>

                <Button asChild className="rounded-xl gap-2 bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Link href="https://wa.me/8801519603043" target="_blank" rel="noreferrer">
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Quick Chat on WhatsApp</span>
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            /* ACTIVE CONTACT FORM */
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span>Send a Direct Message</span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Delivered straight to <span className="text-foreground font-mono font-medium">skhsouravhalder@gmail.com</span>
                </p>
              </div>

              {/* QUICK TOPIC SELECTOR */}
              <div className="space-y-1.5 pt-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Select Topic (Optional Quick Pick)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleSelectTopic(topic)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        formData.subject === topic
                          ? "bg-primary text-primary-foreground border-primary shadow-xs"
                          : "bg-muted/40 text-muted-foreground border-border/40 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* NAME & EMAIL INPUTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-muted-foreground flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span>Your Name</span>
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-muted-foreground flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span>Email Address</span>
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  />
                </div>
              </div>

              {/* SUBJECT INPUT */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-muted-foreground flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-primary" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Discussing a New Web Application"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              {/* MESSAGE TEXTAREA */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase text-muted-foreground flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-primary" />
                    <span>Your Message</span>
                    <span className="text-primary">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {formData.message.length} chars
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project scope, requirements, or opportunities..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                />
              </div>

              {/* SUBMIT BUTTON & CONTROLS */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-11 px-8 gap-2 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 font-semibold text-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to Inbox...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send to skhsouravhalder@gmail.com</span>
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto h-11 px-5 gap-2 rounded-xl border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 text-sm"
                >
                  <Link href="https://wa.me/8801519603043" target="_blank" rel="noreferrer">
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </Link>
                </Button>
              </div>

              {/* FOOTNOTE */}
              <p className="text-[11px] text-muted-foreground/75 font-mono pt-1 text-center sm:text-left">
                🔒 Privacy guaranteed. Submitted messages deliver directly to Sourav&apos;s verified inbox.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
