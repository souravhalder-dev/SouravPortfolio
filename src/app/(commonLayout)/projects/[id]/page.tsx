import { PROJECTS } from "@/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  AlertCircle,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} | Case Study`;
  const description = project.description;
  const url = `https://sourav-halder-portfolio.vercel.app/projects/${project.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} - Case Study by Sourav Halder`,
      description,
      url,
      images: project.images.map((img) => ({
        url: img,
        alt: project.title,
      })),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Case Study by Sourav Halder`,
      description,
      images: project.images.slice(0, 1),
      creator: "@souravhdev",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Schema.org SoftwareApplication / CreativeWork JSON-LD
  const jsonLdProject = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: project.liveUrl,
    applicationCategory: "WebApplication",
    operatingSystem: "All",
    author: {
      "@type": "Person",
      name: "Sourav Halder",
      url: "https://sourav-halder-portfolio.vercel.app",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 py-20 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProject) }}
      />

      {/* Background glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 pt-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild className="gap-2 rounded-xl">
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Featured Case Study</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Direct Action Links (Live & GitHub Repository - Only Client) */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
          <Button
            size="lg"
            className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 rounded-xl"
            asChild
          >
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live Project Demo
            </Link>
          </Button>

          {/* GitHub repository link (only client) */}
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-border/60 hover:border-primary/40 rounded-xl"
            asChild
          >
            <Link href={project.frontendUrl} target="_blank" rel="noreferrer">
              <FaGithub className="w-4 h-4" />
              GitHub Repository (Client)
            </Link>
          </Button>
        </div>

        {/* Project Preview Image Showcase */}
        {project.images.length > 0 && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted/20">
            <img
              src={project.images[0]}
              alt={project.title}
              loading="eager"
              decoding="async"
              className="w-full h-auto max-h-[550px] object-cover"
            />
          </div>
        )}

        {/* Main Technology Stack Used */}
        <Card className="mb-8 border-border/50 bg-card/60 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2.5 text-lg sm:text-xl">
              <Layers className="w-5 h-5 text-primary" />
              Main Technology Stack Used
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies?.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center gap-2 bg-muted/40 hover:bg-muted/70 border border-border/50 px-3.5 py-1.5 rounded-xl transition-colors"
                >
                  {tech.technology?.icon && (
                    <img
                      src={tech.technology.icon}
                      alt={tech.technology.name}
                      className="w-4 h-4 object-contain"
                      loading="lazy"
                    />
                  )}
                  <span className="text-sm font-medium text-foreground">
                    {tech.technology?.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Brief Description & Overview */}
        <Card className="mb-8 border-border/50 bg-card/60 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Brief Description & Architecture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>{project.content}</p>

            {project.features && project.features.length > 0 && (
              <div className="pt-4 border-t border-border/30">
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-foreground font-semibold mb-3">
                  Core Implemented Features:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm bg-muted/20 p-2.5 rounded-lg border border-border/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Challenges Faced */}
        <Card className="mb-8 border-border/50 bg-card/60 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2.5 text-lg sm:text-xl">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              Challenges Faced While Developing the Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3.5">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Potential Improvements & Future Plans */}
        <Card className="border-border/50 bg-card/60 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2.5 text-lg sm:text-xl">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              Potential Improvements and Future Plans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3.5">
              {project.futurePlans.map((plan, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {plan}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
