import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background relative overflow-hidden">
      {/* Subtle bottom decorative accent glow line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* LOGO / BRAND MARK WITH 'S' */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-primary to-purple-600 flex items-center justify-center text-white font-black text-base shadow-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
            S
          </div>
          <div className="font-mono text-sm tracking-tight text-foreground/90">
            <span className="font-bold">Sourav</span>
            <span className="text-primary font-semibold">.dev</span>
          </div>
        </Link>

        {/* COPYRIGHT & METRICS */}
        <p className="text-xs font-mono text-muted-foreground text-center md:text-left order-last md:order-none">
          &copy; {currentYear} Sourav Halder &bull; Khulna, Bangladesh &bull; Built with Next.js & Tailwind CSS.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-2.5">
          <Link
            href="https://github.com/souravhalder-dev"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-border/60 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/50 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sourav-halder-dev/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-border/60 bg-muted/20 text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </Link>
          <Link
            href="https://x.com/souravhdev"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-border/60 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/50 transition-all duration-200"
            aria-label="X Profile"
          >
            <FaXTwitter className="w-4 h-4" />
          </Link>
          <Link
            href="https://wa.me/8801519603043"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-border/60 bg-muted/20 text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-200"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:skhsouravhalder@gmail.com"
            className="p-2 rounded-lg border border-border/60 bg-muted/20 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
            aria-label="Email Contact"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
