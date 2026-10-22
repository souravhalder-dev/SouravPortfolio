import { MetadataRoute } from "next";
import { PROJECTS } from "@/constants/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sourav-halder-portfolio.vercel.app";
  const now = new Date();

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.filter(
    (project) => !project.isDeleted
  ).map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
