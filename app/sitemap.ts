import type { MetadataRoute } from "next";
import {
  getAllProjects,
  type Project,
} from "@/sanity/lib/projects/getAllProjects";

type ProjectWithUpdatedAt = Project & { _updatedAt?: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ryanbakker.site";

  // Get all projects from Sanity
  const projects = (await getAllProjects()) as ProjectWithUpdatedAt[];

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Dynamic project pages
  const projectPages = projects.map((project: ProjectWithUpdatedAt) => {
    const candidate = project._updatedAt
      ? new Date(project._updatedAt)
      : undefined;
    const isValid =
      candidate instanceof Date && !Number.isNaN(candidate.getTime());
    return {
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: isValid ? candidate! : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...staticPages, ...projectPages];
}
