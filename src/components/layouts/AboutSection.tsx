import React from "react";
import {
  Terminal,
  Sparkles,
  Clock,
  Heart,
  GraduationCap,
  Code,
  Compass,
  Trophy,
  Coffee,
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
        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 text-primary/20">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-6 right-6 text-primary/20 rotate-180">
          <Sparkles className="w-8 h-8" />
        </div>

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
                My journey into programming began in <strong>2020</strong>, driven by deep curiosity to understand how software brings complex ideas to life. What started as late-night experimentation with algorithms and frontend layouts quickly evolved into building full-fledged, scalable web applications with modern technology stacks like <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>.
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
                I thrive on architecting clean, responsive user interfaces and pair them with rock-solid server-side systems. Whether implementing double-entry financial ledgers, optimizing database queries with Prisma and PostgreSQL, or building zero-friction authenticated flows, I take immense pride in writing clean, maintainable, and type-safe code that delivers exceptional end-user value.
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

        {/* EDUCATIONAL QUALIFICATION SECTION */}
        <div className="mt-10 pt-8 border-t border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Educational Qualification
              </h3>
              <p className="text-sm text-muted-foreground">
                Higher academic background and management discipline
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Graduated
                </span>
              </div>
              <h4 className="text-lg font-bold text-foreground pt-1">
                Bachelor of Business Administration (BBA)
              </h4>
              <p className="text-sm font-medium text-foreground/80">
                Major in Management
              </p>
              <p className="text-sm text-muted-foreground">
                National University, Bangladesh
              </p>
              <p className="text-xs text-muted-foreground/90 pt-2 leading-relaxed">
                Comprehensive study in organizational leadership, strategic decision-making, operations, and business management—bridging technology and business requirements.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-md">
                  Continuous Professional Learning
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Ongoing
                </span>
              </div>
              <h4 className="text-lg font-bold text-foreground pt-1">
                Full Stack & Software Engineering Specialization
              </h4>
              <p className="text-sm font-medium text-foreground/80">
                Modern Web Architectures & Systems
              </p>
              <p className="text-sm text-muted-foreground">
                Self-Taught & Advanced Technical Programs
              </p>
              <p className="text-xs text-muted-foreground/90 pt-2 leading-relaxed">
                Hands-on mastery of Next.js App Router, TypeScript, React 19, Node.js, Express, PostgreSQL, Prisma ORM, MongoDB, Docker, and RESTful API architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
