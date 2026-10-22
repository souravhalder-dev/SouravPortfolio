"use client";

import { useState } from "react";
import { Briefcase, Layers, Code, BookOpen, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";

type CategoryFilter = "featured" | "all" | "fullstack" | "cms";

export default function ProjectSection() {
  // Default to showing only 3 projects on the front: 2 Full-Stack + Justapedia
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("featured");

  const liveProjects = PROJECTS.filter((project) => !project.isDeleted);

  // Default 3 projects on front: Remontada (1), TradeSphere (2), Justapedia (4)
  const featuredIds = ["1", "2", "4"];

  const getFilteredProjects = () => {
    switch (activeFilter) {
      case "featured":
        return liveProjects.filter((p) => featuredIds.includes(p.id));
      case "fullstack":
        return liveProjects.filter((p) => ["1", "2", "3"].includes(p.id));
      case "cms":
        return liveProjects.filter((p) => ["4", "5", "6", "7"].includes(p.id));
      case "all":
      default:
        return liveProjects;
    }
  };

  const displayedProjects = getFilteredProjects();

  const fullstackCount = liveProjects.filter((p) =>
    ["1", "2", "3"].includes(p.id)
  ).length;

  const cmsCount = liveProjects.filter((p) =>
    ["4", "5", "6", "7"].includes(p.id)
  ).length;

  return (
    <section
      id="projects"
      className="container max-w-7xl mx-auto py-20 sm:py-28 px-4 border-t border-border/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-6 mb-12 sm:mb-16 text-center sm:text-left relative z-10">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-primary font-mono text-sm tracking-widest uppercase">
          <Briefcase className="w-5 h-5" />
          <span>01. Featured Work & Case Studies</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
          Featured Projects & Platforms
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Highlighting key production work in Full-Stack software engineering, custom enterprise platforms, and open-access MediaWiki knowledge engines.
        </p>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-4">
          {/* Featured Tab (Default - Only 3 projects) */}
          <button
            onClick={() => setActiveFilter("featured")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              activeFilter === "featured"
                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                : "bg-muted/30 text-muted-foreground border-border/40 hover:bg-muted/60 hover:text-foreground"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Featured Highlights</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === "featured"
                  ? "bg-white/20 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              3
            </span>
          </button>

          {/* All Projects Tab */}
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                : "bg-muted/30 text-muted-foreground border-border/40 hover:bg-muted/60 hover:text-foreground"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Projects</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === "all"
                  ? "bg-white/20 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {liveProjects.length}
            </span>
          </button>

          {/* Full-Stack Tab */}
          <button
            onClick={() => setActiveFilter("fullstack")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              activeFilter === "fullstack"
                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                : "bg-muted/30 text-muted-foreground border-border/40 hover:bg-muted/60 hover:text-foreground"
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Full-Stack Web Apps</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === "fullstack"
                  ? "bg-white/20 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {fullstackCount}
            </span>
          </button>

          {/* CMS & Knowledge Engines Tab */}
          <button
            onClick={() => setActiveFilter("cms")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              activeFilter === "cms"
                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                : "bg-muted/30 text-muted-foreground border-border/40 hover:bg-muted/60 hover:text-foreground"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>CMS & Knowledge Engines</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === "cms"
                  ? "bg-white/20 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cmsCount}
            </span>
          </button>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* SHOW ALL / COLLAPSE BUTTON */}
      <div className="mt-14 text-center relative z-10">
        {activeFilter === "featured" ? (
          <Button
            size="lg"
            variant="outline"
            onClick={() => setActiveFilter("all")}
            className="gap-2 px-8 h-12 rounded-2xl border-primary/40 bg-card/60 backdrop-blur-md hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all text-sm font-semibold cursor-pointer"
          >
            <span>View All Projects ({liveProjects.length})</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            size="lg"
            variant="ghost"
            onClick={() => setActiveFilter("featured")}
            className="gap-2 px-8 h-12 rounded-2xl text-muted-foreground hover:text-foreground border border-border/50 text-sm font-semibold cursor-pointer"
          >
            <span>Show Featured Highlights Only (3)</span>
            <ChevronUp className="w-4 h-4" />
          </Button>
        )}
      </div>
    </section>
  );
}
