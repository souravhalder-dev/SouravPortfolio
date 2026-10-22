import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Full Stack Software Developer",
    company: "Freelance & Open Source Projects",
    location: "Remote / Khulna, Bangladesh",
    period: "2023 - Present",
    type: "Contract / Project-Based",
    description:
      "Architecting and delivering full-stack web applications, multi-vendor marketplaces, and SaaS platforms with strict type-safety, modular architecture, and modern UX standards.",
    achievements: [
      "Engineered TradeSphere, an enterprise multi-vendor B2B/B2C marketplace featuring RFQ tender counteroffers, Trade Assurance escrow, and a balanced double-entry financial ledger.",
      "Developed Remontada Workspace, a precision catalog web app built on Next.js 16 and Tailwind CSS v4 featuring real-time multi-field search and Firebase Authentication.",
      "Built EventPulse, a global tech summit discovery and ticket reservation platform integrating MongoDB Atlas, JWT authentication, and interactive Recharts data visualization.",
      "Architected and maintained high-traffic CMS & MediaWiki knowledge engines including Justapedia, PlatyWiki, Soutar36, and NewsNut with custom caching and structured metadata schemas.",
    ],
    skills: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "MediaWiki",
      "WordPress",
      "Tailwind CSS",
    ],
  },
  {
    role: "Frontend Engineer & CMS Specialist",
    company: "Client & Web Solutions",
    location: "Remote / Khulna, Bangladesh",
    period: "2021 - 2023",
    type: "Freelance",
    description:
      "Crafted high-performance, mobile-first responsive web applications, interactive dashboards, and content management solutions with state management and API integrations.",
    achievements: [
      "Designed reusable UI component systems with Tailwind CSS, Lucide Icons, and accessible Radix UI primitives.",
      "Customized WordPress publishing workflows, Gutenberg blocks, and LiteSpeed server cache configurations for digital media outlets.",
      "Configured MediaWiki extensions, infobox templates, and category taxonomies for collaborative knowledge bases.",
      "Maintained 100% responsiveness and cross-browser consistency across mobile, tablet, and desktop devices.",
    ],
    skills: [
      "React",
      "JavaScript",
      "WordPress",
      "MediaWiki",
      "HTML5",
      "CSS3 / Tailwind",
      "REST APIs",
      "Git",
    ],
  },
  {
    role: "Web Developer & Interface Designer",
    company: "Independent Practice",
    location: "Khulna, Bangladesh",
    period: "2020 - 2021",
    type: "Self-Employed",
    description:
      "Started programming journey building bespoke websites, interactive portfolios, and digital business tools while mastering JavaScript, PHP, and backend fundamentals.",
    achievements: [
      "Built custom responsive landing pages and portals with fast load times and clean SEO practices.",
      "Adopted Git and GitHub collaborative workflows, code versioning, and CI/CD deployment on Vercel and Netlify.",
    ],
    skills: ["JavaScript", "PHP", "Responsive Design", "Git / GitHub", "UI/UX Basics"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container max-w-6xl mx-auto px-4 py-24 border-t border-border/50 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-4 mb-16 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Briefcase className="w-5 h-5" />
          <span>03. Experience</span>
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          Work & Project Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          A track record of engineering scalable applications, reliable APIs, intuitive user experiences, and high-impact knowledge platforms.
        </p>
      </div>

      {/* TIMELINE LIST */}
      <div className="relative border-l border-border/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 z-10">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform duration-300 shadow-sm shadow-primary" />

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md shadow-lg hover:border-primary/40 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1 bg-muted/40 px-2.5 py-1 rounded-md border border-border/40">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-muted/40 px-2.5 py-1 rounded-md border border-border/40">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                  Key Achievements & Responsibilities:
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                {exp.skills.map((skill, sIdx) => (
                  <Badge
                    key={sIdx}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
