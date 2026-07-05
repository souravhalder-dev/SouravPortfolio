import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="container max-w-7xl mx-auto py-20 px-4 border-t border-border/40 text-center"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Let's Build Something Together
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Whether you are looking to hire a full-stack developer, discuss a
          robust system design architecture, or just share a virtual cup of tea,
          drop me a message.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {/* Email */}
          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:skhsouravhalder@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              skhsouravhalder@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <a
              href="tel:+8801519603043"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +880 15196 03043
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-emerald-500/30 transition-all">
            <FaWhatsapp className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/8801519603043"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-emerald-500 transition-colors"
            >
              +880 15196 03043
            </a>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="gap-2">
            <Link href="mailto:skhsouravhalder@gmail.com">
              <Mail className="w-4 h-4" /> Email Me
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            <Link
              href="https://wa.me/8801519603043"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="w-4 h-4" /> Message on WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
