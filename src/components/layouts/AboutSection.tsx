import React from "react";
import {
  Terminal,
  Clock,
  GraduationCap,
  Code,
  Compass,
  Trophy,
  BookOpen,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container max-w-6xl mx-auto px-4 py-24 border-t border-border/50 relative overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-4 mb-16 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Terminal className="w-5 h-5" />
          <span>04. Biography & Education</span>
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          A glimpse into my journey, philosophy, passions, and educational background.
        </p>
      </div>

      {/* BIOGRAPHY CONTENT */}
      <div className="relative p-8 sm:p-12 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl shadow-xl overflow-hidden z-10 space-y-10">
        {/* Narrative Blocks */}
        <div className="relative z-10 space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0 mt-1">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                My Programming Journey
              </h3>
              <p>
                My journey into software engineering began in <strong>2020</strong> in Khulna, Bangladesh. To ground my practical curiosity in rigorous software fundamentals, I joined <strong>Programming Hero</strong>, where I mastered full-stack web development, computer science concepts, algorithms, and modern frontend & backend architectures.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 shrink-0 mt-1">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                The Work I Enjoy
              </h3>
              <p>
                I thrive on architecting clean, responsive user interfaces paired with rock-solid server-side systems. Whether implementing double-entry financial ledgers, optimizing database queries with Prisma and PostgreSQL, customizing high-volume WordPress portals, or configuring MediaWiki knowledge architectures, I take immense pride in writing clean, maintainable, and type-safe code that delivers exceptional end-user value.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 shrink-0 mt-1">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Life & Hobbies Outside Code
              </h3>
              <p>
                Beyond coding, I believe in continuous self-improvement and balance. Playing <strong>chess</strong> sharpens my strategic anticipation, calculation, and tactical patience. On the field, <strong>cricket</strong> reinforces teamwork, agile reaction, and communication under pressure. I also enjoy outdoor photography and digital design, which constantly inform my eye for clean visual hierarchy and UI aesthetics.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATIONAL & ACADEMY QUALIFICATION SECTION */}
        <div className="mt-10 pt-8 border-t border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Education & Technical Academy
              </h3>
              <p className="text-sm text-muted-foreground">
                Higher academic degree and computer science training
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Programming Hero Academy */}
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-all space-y-2 group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md font-semibold">
                  Computer Science & Web Academy
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Alumnus
                </span>
              </div>
              <h4 className="text-lg font-bold text-foreground pt-1 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Programming Hero
              </h4>
              <p className="text-sm font-semibold text-primary">
                Complete Web Development & Computer Science Program
              </p>
              <p className="text-xs text-muted-foreground/90 pt-1 leading-relaxed">
                Intensive computer science training covering data structures, algorithms, object-oriented programming, modern JavaScript/TypeScript, React, Next.js, Node.js, Express, MongoDB, and production project deployment.
              </p>
            </div>

            {/* University Degree */}
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 hover:border-blue-500/40 transition-all space-y-2 group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-md font-semibold">
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Graduated
                </span>
              </div>
              <h4 className="text-lg font-bold text-foreground pt-1 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                Bachelor of Business Administration (BBA)
              </h4>
              <p className="text-sm font-semibold text-foreground/85">
                Major in Management &bull; National University, Bangladesh
              </p>
              <p className="text-xs text-muted-foreground/90 pt-1 leading-relaxed">
                Comprehensive academic education in organizational leadership, strategic decision-making, operations, and business management—bridging technology and business requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
