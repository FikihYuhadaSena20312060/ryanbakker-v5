import type { MetadataRoute } from "next";
import { getAllProjects } from "@/sanity/lib/projects/getAllProjects";

type ProjectWithUpdatedAt = {
  _id: string;
  title: string;
  slug: string;
  coverImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  _updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ryanbakker.dev";

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
  const projectPages = projects.map((project: ProjectWithUpdatedAt) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
