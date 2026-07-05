import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="container max-w-7xl mx-auto py-20 px-4 border-t border-border/40 text-center"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Let's Build Something Together
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Whether you are looking to hire a full-stack developer, discuss a
          robust system design architecture, or just share a virtual cup of tea,
          drop me a message.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="gap-2">
            <Link href="mailto:skhsouravhalder@gmail.com">
              <Mail className="w-4 h-4" /> Get In Touch
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
