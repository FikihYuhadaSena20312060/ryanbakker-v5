import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Calendar, Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBg from "@/components/AnimatedBg";
import { FadeInUp } from "@/components/AnimateOnScroll";
import ImageSlideshow from "@/components/projects/ImageSlideshow";
import ProjectHeader from "@/components/projects/ProjectHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getSingleProject,
  type Project,
} from "@/sanity/lib/projects/getSingleProject";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project: Project = await getSingleProject(resolvedParams.projectId);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ryanbakker.site";

  return {
    title: project.title,
    description:
      project.brief ||
      `View ${project.title} project details, technologies used, and GitHub repository.`,
    keywords: [
      project.title,
      ...project.tools,
      "web development",
      "portfolio project",
      "Ryan Bakker",
      "React",
      "Next.js",
      "TypeScript",
    ],
    openGraph: {
      title: `${project.title} | Ryan Bakker`,
      description:
        project.brief ||
        `View ${project.title} project details, technologies used, and GitHub repository.`,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: project.desktopImages?.[0]?.asset.url || "",
          width: 1200,
          height: 630,
          alt: project.desktopImages?.[0]?.alt || project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ryan Bakker`,
      description:
        project.brief ||
        `View ${project.title} project details, technologies used, and GitHub repository.`,
      images: [project.desktopImages?.[0]?.asset.url || ""],
    },
    alternates: {
      canonical: `${baseUrl}/projects/${project.slug}`,
    },
  };
}

async function SingleProject({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const resolvedParams = await params;
  const project: Project = await getSingleProject(resolvedParams.projectId);

  return (
    <section className="relative -mt-18 overflow-hidden mb-5">
      <div className="relative overflow-hidden">
        <div className="h-[310px] md:overflow-hidden pt-16 md:pt-22">
          <ProjectHeader project={project} />
          <div className="h-[350px] w-full absolute left-0 top-0 bg-gradient-to-t from-neutral-500/30 to-transparent -z-[10]" />
          <AnimatedBg />
        </div>
      </div>

      <div className="page-container w-full! flex-1 flex flex-col lg:flex-row justify-between gap-8 ">
        <FadeInUp delay={300} className="w-full">
          <ImageSlideshow project={project} />
        </FadeInUp>

        <aside className="lg:max-w-[400px] h-full! flex flex-col gap-8">
          <FadeInUp delay={400}>
            <div className="bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700 shadow-lg p-8 rounded-xl border dark:border-neutral-700 from-neutral-200/80 via-neutral-100/80 to-neutral-300 border-neutral-300 flex flex-1 flex-col gap-8">
              <div>
                <div className="flex flex-col md:flex-row gap-1.5 pb-5">
                  <Badge
                    variant="outline"
                    className="text-neutral-700 dark:text-white bg-neutral-500/10"
                  >
                    <Info />
                    Under Construction
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-neutral-700 dark:text-white bg-neutral-500/10"
                  >
                    <Calendar />
                    Last Updated:{" "}
                    {project.lastUpdated.toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-accent-foreground">
                  Brief
                </h3>
                <p className="lg:text-sm">{project.brief}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent-foreground">
                  Tools
                </h3>
                <ul className="grid grid-cols-2">
                  {project.tools.map((tool) => (
                    <li key={tool} className="text-sm">
                      •&nbsp; {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={450}>
            <Link href={project.githubUrl} target="_blank">
              <Button
                className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full"
                variant="glassPrimary"
                size="lg"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <GitHubLogoIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    GitHub Repo
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </div>
              </Button>
            </Link>
          </FadeInUp>
        </aside>
      </div>
    </section>
  );
}

export default SingleProject;
