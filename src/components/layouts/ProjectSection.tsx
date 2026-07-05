import { Briefcase, Terminal } from "lucide-react";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const liveProjects = PROJECTS.filter((project) => !project.isDeleted);

  return (
    <section
      id="projects"
      className="container max-w-7xl mx-auto py-20 sm:py-28 px-4 border-t border-border/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-6 mb-16 sm:mb-20 text-center sm:text-left relative z-10">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-primary font-mono text-sm tracking-widest uppercase">
          <Briefcase className="w-5 h-5" />
          <span>Featured Projects</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
          My Recent Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto sm:mx-0 leading-relaxed">
          Explore a selection of projects I've built, from full-stack applications to interactive web experiences.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {liveProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
