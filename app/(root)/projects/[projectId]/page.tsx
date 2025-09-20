import type { Metadata } from "next";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FadeInUp } from "@/components/AnimateOnScroll";
import ImageSlideshow from "@/components/projects/ImageSlideshow";
import ProjectAnimatedBg from "@/components/projects/ProjectAnimatedBg";
import ProjectHeader from "@/components/projects/ProjectHeader";
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

  return {
    title: `Ryan Bakker | ${project.title}`,
    description:
      project.brief ||
      `View ${project.title} project details, technologies used, and GitHub repository.`,
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
    <section className="relative -mt-17 overflow-hidden mb-5">
      <div className="relative">
        <div className="h-[250px] md:overflow-hidden pt-22">
          <ProjectAnimatedBg />
          <ProjectHeader project={project} />
        </div>
      </div>

      <div className="page-container mt-24 md:-mt-5 flex flex-col lg:flex-row justify-between gap-10">
        <FadeInUp delay={300}>
          <ImageSlideshow project={project} />
        </FadeInUp>

        <aside className="lg:max-w-[400px] h-full! flex flex-col gap-8">
          <FadeInUp delay={400}>
            <div className="bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700 shadow-lg p-8 rounded-xl border dark:border-neutral-700 from-neutral-200/80 via-neutral-100/80 to-neutral-300 border-neutral-300 flex flex-1 flex-col gap-8">
              <div>
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
