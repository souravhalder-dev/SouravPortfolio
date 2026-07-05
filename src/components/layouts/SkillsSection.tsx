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
  Users,
  ChevronRight,
} from "lucide-react";

interface GroupVisualConfig {
  icon: React.ReactNode;
  gradient: string;
  glow: string;
}

interface Skill {
  name: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const visualConfigMap: Record<string, GroupVisualConfig> = {
  "Programming Languages": {
    icon: <Cpu className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245, 158, 11, 0.3)",
  },
  "Frontend Development": {
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-primary to-blue-500",
    glow: "rgba(99, 102, 241, 0.3)",
  },
  "Backend Development": {
    icon: <Server className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.3)",
  },
  "Database & ORM": {
    icon: <Database className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  "AI & Automation": {
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.3)",
  },
  "Cloud & DevOps": {
    icon: <Globe2 className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    glow: "rgba(249, 115, 22, 0.3)",
  },
  "Tools & Platforms": {
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6, 182, 212, 0.3)",
  },
  "Software Engineering": {
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500",
    glow: "rgba(236, 72, 153, 0.3)",
  },
  "Soft Skills": {
    icon: <Users className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    glow: "rgba(34, 197, 94, 0.3)",
  },
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "Next.js (App Router)" },
      { name: "Redux Toolkit" },
      { name: "TanStack Query" },
      { name: "TanStack Table" },
      { name: "Tailwind CSS" },
      { name: "Shadcn/UI" },
      { name: "Zod" },
      { name: "Axios" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "RESTful APIs" },
      { name: "Authentication & Authorization" },
      { name: "JWT" },
      { name: "Better Auth" },
      { name: "Firebase Authentication" },
      { name: "Server Actions" },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "PostgreSQL" },
      { name: "Prisma ORM" },
      { name: "MongoDB" },
      { name: "SQL Database Design" },
      { name: "Database Normalization" },
      { name: "ERD Design" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "OpenAI API Integration" },
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "Vector Embeddings" },
      { name: "Semantic Search" },
      { name: "LangChain" },
      { name: "AI Agents" },
      { name: "Prompt Engineering" },
      { name: "n8n Automation" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Nginx" },
      { name: "AWS (EC2, S3, IAM)" },
      { name: "GitHub Actions (CI/CD)" },
      { name: "Vercel" },
      { name: "Netlify" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Cloudinary" },
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "Clean Architecture" },
      { name: "Modular Design Pattern" },
      { name: "API Design" },
      { name: "Error Handling" },
      { name: "Performance Optimization" },
      { name: "Responsive Web Development" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving" },
      { name: "Adaptive Learning" },
      { name: "Critical Thinking" },
      { name: "Effective Communication" },
      { name: "Team Collaboration" },
      { name: "Attention to Detail" },
      { name: "Continuous Improvement" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="container max-w-7xl mx-auto px-4 py-24 border-t border-border/50 relative overflow-hidden"
    >
      {/* Ambient background decoration glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <div className="flex flex-col space-y-4 mb-20 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Terminal className="w-5 h-5" />
          <span>02. Technical Skills</span>
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          Technology Stack
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          A comprehensive showcase of my technical expertise across various domains and technologies.
        </p>
      </div>

      {/* CORE SKILLS MATRIX GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {SKILL_GROUPS.map((group, index) => {
          const visual = visualConfigMap[group.title] || {
            icon: <Layers className="w-6 h-6" />,
            gradient: "from-gray-500 to-gray-600",
            glow: "rgba(107, 114, 128, 0.3)",
          };

          return (
            <div
              key={group.title}
              className="group relative flex flex-col justify-between p-8 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl shadow-lg transition-all duration-700 hover:-translate-y-4 hover:border-transparent hover:shadow-2xl dark:hover:bg-muted/20"
              style={{
                animationDelay: `${index * 120}ms`,
                animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                opacity: 0,
              }}
            >
              {/* Gradient border overlay */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Glow effect */}
              <div 
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"
                style={{
                  background: visual.glow,
                }}
              />

              <div className="relative z-10 space-y-6">
                {/* Header Category Identity Wrap */}
                <div className="flex items-center gap-4">
                  <div
                    className="p-4 rounded-2xl bg-gradient-to-br shadow-lg shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${visual.glow}, transparent)`,
                    }}
                  >
                    <div className={`text-white bg-gradient-to-br ${visual.gradient} p-2 rounded-xl`}>
                      {visual.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-foreground tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-primary transition-all duration-500">
                    {group.title}
                  </h3>
                </div>

                {/* Badges Layout Wrap Flow Row */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={`${group.title}-${skill.name}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-border/60 bg-muted/40 text-muted-foreground transition-all duration-400 hover:border-transparent hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 hover:text-foreground cursor-default group/skill"
                      style={{
                        animationDelay: `${(index * group.skills.length + skillIndex) * 40}ms`,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" style={{
                        background: `linear-gradient(to right, ${visual.glow}, transparent)`,
                      }} />
                      <span>{skill.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/skill:opacity-100 group-hover/skill:translate-x-0.5 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Accent Bottom Anchor Line */}
              <div className="relative z-10 mt-8">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-border/50 to-transparent rounded-full" />
                <div className="w-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full absolute top-0 left-0 group-hover:w-full transition-all duration-1000" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
