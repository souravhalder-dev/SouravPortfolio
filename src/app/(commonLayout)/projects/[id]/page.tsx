import { PROJECTS } from "@/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  Server,
  Layers,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 py-16 px-4">
      <div className="container max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        {project.images.length > 0 && (
          <div className="mb-12 rounded-xl overflow-hidden border border-border/40">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Main Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Button asChild>
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={project.frontendUrl} target="_blank" rel="noreferrer">
              <Code2 className="w-4 h-4 mr-2" />
              Client Code
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={project.backendUrl} target="_blank" rel="noreferrer">
              <Server className="w-4 h-4 mr-2" />
              Server Code
            </Link>
          </Button>
        </div>

        {/* Technology Stack */}
        <Card className="mb-8 border-border/40 bg-card/40 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <Badge
                  key={tech.id}
                  variant="outline"
                  className="bg-muted/30 px-3 py-1"
                >
                  {tech.technology?.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Description */}
        <Card className="mb-8 border-border/40 bg-card/40 backdrop-blur-md">
          <CardHeader>
            <CardTitle>About the Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{project.content}</p>
          </CardContent>
        </Card>

        {/* Challenges Faced */}
        <Card className="mb-8 border-border/40 bg-card/40 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Challenges Faced
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Future Plans */}
        <Card className="border-border/40 bg-card/40 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Future Plans & Improvements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.futurePlans.map((plan, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 shrink-0" />
                  <span className="text-muted-foreground">{plan}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
