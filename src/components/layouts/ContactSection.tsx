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
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const emailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} via Portfolio`
    );
    const emailBody = encodeURIComponent(
      `Hi Sourav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    // Direct mailto link targeted to skhsouravhalder@gmail.com
    const mailtoUrl = `mailto:skhsouravhalder@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open mail client to send directly to skhsouravhalder@gmail.com
    window.location.href = mailtoUrl;

    toast.success(
      "Opening your email client to send message directly to skhsouravhalder@gmail.com!"
    );

    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="container max-w-7xl mx-auto py-24 px-4 border-t border-border/40 relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 relative z-10">
        <div className="flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
          <MessageSquare className="w-4 h-4" />
          <span>05. Direct Inquiries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Whether you are looking to hire a Full Stack Developer, discuss a
          high-impact project, or explore technical consulting, my inbox is
          always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* LEFT COLUMN: DIRECT CONTACT DETAILS */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="bg-card/70 backdrop-blur-md p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-all shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider font-mono">
                  Email Address
                </h3>
                <a
                  href="mailto:skhsouravhalder@gmail.com"
                  className="text-foreground hover:text-primary transition-colors text-base font-medium break-all block"
                >
                  skhsouravhalder@gmail.com
                </a>
                <p className="text-xs text-muted-foreground">
                  Direct inquiries dispatched to skhsouravhalder@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-card/70 backdrop-blur-md p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-all shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider font-mono">
                  Phone Number
                </h3>
                <a
                  href="tel:+8801519603043"
                  className="text-foreground hover:text-primary transition-colors text-base font-medium block"
                >
                  +880 15196 03043
                </a>
                <p className="text-xs text-muted-foreground">
                  Available Mon &ndash; Sat, 9:00 AM &ndash; 9:00 PM (GMT+6)
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-card/70 backdrop-blur-md p-6 rounded-2xl border border-border/50 hover:border-emerald-500/40 transition-all shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider font-mono">
                  WhatsApp Direct
                </h3>
                <a
                  href="https://wa.me/8801519603043"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-emerald-500 transition-colors text-base font-medium block"
                >
                  +880 15196 03043
                </a>
                <p className="text-xs text-muted-foreground">
                  Fastest response for project inquiries & chats
                </p>
              </div>
            </div>
          </div>

          {/* Location & Timezone info */}
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

        {/* RIGHT COLUMN: INTERACTIVE CONTACT FORM */}
        <div className="lg:col-span-7 bg-card/70 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-xl space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              Send a Direct Message
            </h3>
            <p className="text-sm text-muted-foreground">
              Fill in your details below and your message will be delivered directly to{" "}
              <strong className="text-foreground">skhsouravhalder@gmail.com</strong>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-muted-foreground">
                  Your Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-muted-foreground">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-muted-foreground">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Discussion / Job Inquiry"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-muted-foreground">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project, timeline, and goals..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto h-11 px-8 gap-2 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Dispatching..." : "Send to skhsouravhalder@gmail.com"}</span>
              </Button>

              <Button
                type="button"
                variant="outline"
                asChild
                className="w-full sm:w-auto h-11 px-6 gap-2 rounded-xl border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
              >
                <Link
                  href="https://wa.me/8801519603043"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
