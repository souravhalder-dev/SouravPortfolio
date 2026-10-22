import React from "react";
import {
  Layers,
  Terminal,
  Cpu,
  Code2,
  Server,
  Database,
  Globe2,
  Wrench,
  Brain,
  BookOpen,
} from "lucide-react";

interface SkillCategory {
  title: string;
  tagline: string;
  icon: React.ReactNode;
  gradient: string;
  borderHover: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    tagline: "Modern UI, Component Systems & Client State",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-blue-500 to-indigo-600",
    borderHover: "hover:border-blue-500/50",
    skills: [
      "React 19",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "TanStack Query",
      "Shadcn/UI",
      "Zod Validation",
      "HTML5 & Modern CSS",
      "Axios Interceptors",
    ],
  },
  {
    title: "Backend & Systems",
    tagline: "Scalable APIs, Auth & Server Architectures",
    icon: <Server className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-600",
    borderHover: "hover:border-emerald-500/50",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "JWT Authentication",
      "Firebase Auth",
      "Next.js Server Actions",
      "Microservices Basics",
      "Role-Based Access (RBAC)",
      "Bcrypt & Security",
    ],
  },
  {
    title: "CMS & Knowledge Engines",
    tagline: "Encyclopedic Wiki Systems & Digital Publishing",
    icon: <BookOpen className="w-5 h-5" />,
    gradient: "from-cyan-500 to-blue-600",
    borderHover: "hover:border-cyan-500/50",
    skills: [
      "WordPress",
      "MediaWiki Engine",
      "Wiki Markup & Syntax",
      "Semantic MediaWiki",
      "Content Architecture",
      "Custom Theme Styling",
      "LiteSpeed Caching",
      "SEO & Schema Optimization",
    ],
  },
  {
    title: "Databases & ORM",
    tagline: "Relational Modeling & Document Datastores",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-violet-500 to-purple-600",
    borderHover: "hover:border-violet-500/50",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB Atlas",
      "Mongoose",
      "MySQL / MariaDB",
      "Schema Normalization",
      "Indexing & Query Optimization",
      "ACID Transactions",
    ],
  },
  {
    title: "Programming Languages",
    tagline: "Core Computational Syntax & Types",
    icon: <Cpu className="w-5 h-5" />,
    gradient: "from-amber-500 to-orange-600",
    borderHover: "hover:border-amber-500/50",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript (Strict)",
      "PHP",
      "SQL (PostgreSQL/MySQL)",
      "HTML5 / Semantic Markup",
      "JSON / YAML",
    ],
  },
  {
    title: "DevOps & Cloud Hosting",
    tagline: "Deployment Pipelines, Containers & Infrastructure",
    icon: <Globe2 className="w-5 h-5" />,
    gradient: "from-sky-500 to-cyan-600",
    borderHover: "hover:border-sky-500/50",
    skills: [
      "Docker & Compose",
      "GitHub Actions CI/CD",
      "Vercel Deployment",
      "Netlify",
      "Nginx Basics",
      "Linux Server Administration",
      "Cloudinary Media CDN",
    ],
  },
  {
    title: "AI & Automation",
    tagline: "Vector Search, LLM Integration & Workflow Tools",
    icon: <Brain className="w-5 h-5" />,
    gradient: "from-fuchsia-500 to-pink-600",
    borderHover: "hover:border-fuchsia-500/50",
    skills: [
      "OpenAI API Integration",
      "RAG Architecture Basics",
      "Vector Embeddings",
      "Prompt Engineering",
      "n8n Workflow Automation",
      "Semantic Discovery",
    ],
  },
  {
    title: "Developer Tools & Practices",
    tagline: "Engineering Rigor, Testing & Collaboration",
    icon: <Wrench className="w-5 h-5" />,
    gradient: "from-rose-500 to-red-600",
    borderHover: "hover:border-rose-500/50",
    skills: [
      "Git & GitHub Workflows",
      "VS Code Setup",
      "Postman API Testing",
      "Vitest Testing",
      "Clean Modular Code",
      "Agile Collaboration",
      "Responsive UI Design",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="container max-w-7xl mx-auto px-4 py-24 sm:py-28 border-t border-border/40 relative overflow-hidden"
    >
      {/* Background Subtle Ambiance */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-4 mb-16 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
          <Terminal className="w-4 h-4" />
          <span>02. Technical Competencies</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/75 bg-clip-text text-transparent">
          Technology Stack
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          A structured matrix of my software engineering capabilities across modern web architectures, enterprise CMS platforms, and databases.
        </p>
      </div>

      {/* REFINED PROFESSIONAL CATEGORY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {CATEGORIES.map((cat, idx) => (
          <div
            key={cat.title}
            className={`group relative flex flex-col justify-between p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${cat.borderHover}`}
          >
            <div className="space-y-4">
              {/* Category Header */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-md shadow-black/10`}
                >
                  {cat.icon}
                </div>
                <span className="text-[11px] font-mono text-muted-foreground/80 bg-muted/40 px-2 py-0.5 rounded-md border border-border/40">
                  {cat.skills.length} skills
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  {cat.tagline}
                </p>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center text-xs px-2.5 py-1 rounded-lg font-medium bg-muted/40 text-foreground/85 border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom subtle accent line */}
            <div className="pt-4 mt-4 border-t border-border/20">
              <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
