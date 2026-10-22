import React from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Terminal,
  FileText,
  Download,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { TypingEffect } from "./TypingEffect";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function HeroSection() {
  const RESUME_VIEW_URL =
    "https://docs.google.com/document/d/1DZOXXybXawoGVuzB-R4VwRE13ZEexbbOMMFI8n6RXjA/edit?pli=1&tab=t.0";
  const RESUME_DOWNLOAD_PATH = "/Sourav_Halder_Resume.pdf";

  return (
    <section
      id="intro"
      className="container max-w-7xl mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24 min-h-[90vh] flex items-center relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider uppercase w-fit bg-muted/40 text-foreground border border-border/60 backdrop-blur-md shadow-xs overflow-hidden group select-none transition-all duration-300 hover:border-primary/30"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-primary/5 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Available for New Roles & Contracts
              </span>
            </Badge>

            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text drop-shadow-lg">
                  Sourav Halder
                </span>
              </h1>

              {/* Dynamic Animated Subtitle typing line */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground min-h-10 flex flex-wrap items-center gap-2">
                <span>Professional</span>
                <span className="text-primary underline decoration-primary/40 underline-offset-4">
                  <TypingEffect
                    words={[
                      "Full Stack Developer",
                      "Frontend Engineer",
                      "CMS & Knowledge Architect",
                      "React & Next.js Specialist",
                      "Node.js Backend Developer",
                      "WordPress & MediaWiki Specialist",
                    ]}
                    typingSpeed={70}
                    deletingSpeed={35}
                    pauseDuration={2000}
                  />
                </span>
              </h2>
            </div>

            {/* Minimal Terminal Sub-badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/90 bg-muted/40 w-fit px-3 py-1.5 rounded-lg border border-border/40">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span>
                const passion = &quot;Engineering Scalable Web & Knowledge
                Systems&quot;;
              </span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl pt-2">
              Passionate developer specializing in building high-performance,
              accessible web applications with <strong>Next.js</strong>,{" "}
              <strong>React 19</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>Tailwind CSS</strong>, alongside enterprise{" "}
              <strong>WordPress</strong> and <strong>MediaWiki</strong>{" "}
              knowledge architectures.
            </p>
          </div>

          {/* Contact Details & Direct Connect */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs sm:text-sm text-muted-foreground bg-muted/20 border border-border/40 p-4 rounded-xl backdrop-blur-xs">
              <div className="flex items-center gap-2.5">
                <CiMail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">Email:</span>
                <a
                  href="mailto:skhsouravhalder@gmail.com"
                  className="text-foreground hover:text-primary transition-colors font-medium truncate"
                >
                  skhsouravhalder@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">Phone:</span>
                <a
                  href="tel:+8801519603043"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  +880 15196 03043
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-muted-foreground">WhatsApp:</span>
                <a
                  href="https://wa.me/8801519603043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-emerald-500 transition-colors font-medium"
                >
                  +880 15196 03043
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="text-muted-foreground">Location:</span>
                <span className="text-foreground font-medium">
                  Khulna, Bangladesh
                </span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2">
                Connect:
              </span>
              {/* GitHub */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 rounded-lg border-border/60 hover:border-primary/40 hover:bg-primary/5"
              >
                <Link
                  href="https://github.com/souravhalder-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4 text-foreground" />
                  <span className="text-xs">GitHub</span>
                </Link>
              </Button>

              {/* LinkedIn */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 rounded-lg border-border/60 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5"
              >
                <Link
                  href="https://www.linkedin.com/in/sourav-halder-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-xs">LinkedIn</span>
                </Link>
              </Button>

              {/* Twitter / X */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 rounded-lg border-border/60 hover:border-foreground/30 hover:bg-foreground/5"
              >
                <Link
                  href="https://x.com/souravhdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Profile"
                >
                  <FaXTwitter className="w-4 h-4 text-foreground" />
                  <span className="text-xs">X (Twitter)</span>
                </Link>
              </Button>
            </div>

            {/* Resume Buttons (View & Download) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Primary Call to Action: View Resume */}
              <Button
                asChild
                variant="default"
                className="cursor-pointer font-medium tracking-tight shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 group h-11 px-5 rounded-xl gap-2"
              >
                <Link
                  href={RESUME_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>View Resume</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </Link>
              </Button>

              {/* Single-Click Resume Download Button */}
              <Button
                asChild
                variant="outline"
                className="cursor-pointer font-medium tracking-tight h-11 px-5 rounded-xl border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5 group gap-2"
              >
                <Link
                  href={RESUME_DOWNLOAD_PATH}
                  download="Sourav_Halder_Resume.pdf"
                >
                  <Download className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span className="text-foreground">Download Resume (PDF)</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROFESSIONAL PHOTO & DEVELOPER IDENTITY CARD */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full">
          {/* Ambient decorative glow around photo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-primary/30 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Portrait Container */}
          <div className="relative group w-full max-w-sm">
            {/* Border glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />

            <div className="relative rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl p-5 shadow-2xl overflow-hidden space-y-4">
              {/* Photo Frame */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border/50 shadow-inner bg-muted/40">
                <img
                  src="/profile.jpg"
                  alt="Sourav Halder - Professional Full Stack Developer"
                  width={400}
                  height={400}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Online Indicator Badge */}
                <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/40 flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-foreground">
                    Full Stack & CMS Engineer
                  </span>
                </div>
              </div>

              {/* Developer Metadata / Quick Highlights */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      Sourav Halder
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground">
                      @souravhalder-dev
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary text-xs"
                  >
                    Verified Dev
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 text-center border-t border-border/40">
                  <div className="p-2 rounded-lg bg-muted/30">
                    <p className="text-lg font-bold text-primary">7+</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">
                      Live Platforms
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-muted/30">
                    <p className="text-lg font-bold text-blue-500">100%</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">
                      Dedication
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-muted/30">
                    <p className="text-lg font-bold text-purple-500">Khulna</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
