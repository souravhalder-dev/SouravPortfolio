import { Project } from "@/types";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers,
  CheckCircle2,
  Eye,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden border-border/40 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
      <div className="relative">
        {/* Project Image with Overlay */}
        {project.images.length > 0 && (
          <div className="relative h-56 overflow-hidden bg-muted/40">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}

        <CardHeader className="space-y-4 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
              {project.title}
            </CardTitle>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
              aria-label={`Open live site for ${project.title}`}
            >
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pb-4">
          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Key Highlights</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.slice(0, 4).map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs text-foreground/85 bg-muted/30 px-3 py-2 rounded-lg border border-border/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="truncate">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
              <Layers className="w-4 h-4 text-primary" />
              <span>Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies?.map((tech) => (
                <Badge
                  key={tech.id}
                  variant="secondary"
                  className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech.technology?.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </div>

      <CardFooter className="flex flex-col gap-3 pt-2 pb-6 mt-auto">
        {/* View More / Details Button */}
        <Button
          variant="default"
          className="w-full h-11 gap-2 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all rounded-xl"
          asChild
        >
          <Link href={`/projects/${project.id}`}>
            <Eye className="w-5 h-5" />
            <span>View More / Details</span>
          </Link>
        </Button>

        {/* Quick Links: Client Code & Live Demo */}
        <div className="grid grid-cols-2 gap-2.5 w-full">
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-1.5 text-xs font-medium border-border/40 hover:border-primary/40 hover:bg-primary/5 rounded-lg"
            asChild
          >
            <Link href={project.frontendUrl} target="_blank" rel="noreferrer">
              <Code2 className="w-3.5 h-3.5" />
              <span>Client Code</span>
            </Link>
          </Button>

          <Button
            variant="secondary"
            size="sm"
            className="h-9 gap-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg"
            asChild
          >
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Site</span>
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
