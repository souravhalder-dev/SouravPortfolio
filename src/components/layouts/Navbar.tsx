"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/#intro", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto max-w-5xl mx-auto rounded-2xl transition-all duration-500 border ${
          scrolled
            ? "bg-background/90 backdrop-blur-2xl border-border/70 shadow-2xl shadow-primary/5 py-2.5 px-4 sm:px-6"
            : "bg-background/70 backdrop-blur-xl border-border/40 shadow-lg py-3 px-4 sm:px-6"
        } flex items-center justify-between`}
      >
        {/* BRAND IDENTITY WITH STYLIZED 'S' */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-primary to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-primary/30 border border-white/25 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
              S
            </div>
            <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-xs opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent group-hover:text-primary transition-colors">
            Sourav<span className="text-primary font-bold">.dev</span>
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/40 p-1.5 rounded-xl border border-border/40 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CONTROLS */}
        <div className="flex items-center gap-2.5">
          <ModeToggle />

          {/* Quick CTA on desktop */}
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-border/50 bg-muted/40 hover:bg-muted/70 transition-colors text-foreground cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMenuOpen && (
        <div className="md:hidden pointer-events-auto fixed inset-x-4 top-20 bg-background/95 backdrop-blur-2xl border border-border/70 rounded-3xl p-6 shadow-2xl space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between pb-3 border-b border-border/40">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Navigation Menu
            </span>
            <span className="text-xs text-primary font-mono">Khulna, BD</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-muted-foreground/60 font-mono">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-border/40">
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
