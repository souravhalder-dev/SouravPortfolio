import React from "react";
import { Terminal, Sparkles, Clock, Heart, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container max-w-6xl mx-auto px-4 py-24 border-t border-border/50 relative overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-4 mb-16 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Terminal className="w-5 h-5" />
          <span>03. Biography</span>
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          A glimpse into my journey, philosophy, and what drives my passion for coding.
        </p>
      </div>

      {/* BIOGRAPHY CONTENT */}
      <div className="relative p-8 sm:p-12 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl shadow-lg overflow-hidden z-10">
        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 text-primary/20">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-6 right-6 text-primary/20 rotate-180">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="relative z-10 space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          <p className="text-xl text-foreground font-semibold tracking-tight flex items-center gap-3">
            <Heart className="w-6 h-6 text-primary animate-pulse" />
            My journey into programming began in 2020, driven by a profound curiosity to understand how software brings ideas to life.
          </p>

          <p>
            What started as late nights of self-study and experimentation has evolved into a robust skill set in both front-end and back-end development.
            I specialize in crafting elegant solutions, from intuitive user interfaces with modern JavaScript frameworks to robust server-side logic and database management.
          </p>

          <p>
            I thrive on overcoming technical challenges and continuously refining my craft to deliver high-quality, maintainable code.
            Beyond the code, I believe in continuous learning and the power of strategic thinking.
          </p>

          <p className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
            <span>
              My hobbies like chess and cricket not only offer a mental reset but also hone my problem-solving skills, patience, and team collaboration—qualities I integrate into every project I work on.
            </span>
          </p>

          {/* EDUCATION */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="bg-muted/30 p-4 rounded-xl border border-border/40">
              <p className="text-lg font-semibold text-foreground">
                Bachelor of Business Administration (BBA) in Management
              </p>
              <p className="text-muted-foreground">
                National University
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
