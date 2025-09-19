import { FadeInUp } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllProjects, Project } from "@/sanity/lib/projects/getAllProjects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

async function Projects() {
  const projects = await getAllProjects();

  return (
    <section className="bg-gradient-to-br from-sky-100 dark:from-black via-white dark:via-gray-950 to-sky-100 dark:to-black/90 -mt-16 pt-14 min-h-screen">
      <div className="page-container pt-14">
        <FadeInUp delay={0}>
          <Separator className="mb-8" />
        </FadeInUp>

        <div className="flex flex-col md:flex-row sm:items-end justify-between gap-6">
          <div>
            <FadeInUp delay={200}>
              <h1 className="text-4xl lg:text-5xl uppercase font-extrabold lg:font-bold  dark:text-white mb-3 tracking-tight bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 dark:from-neutral-200/90 dark:via-white/70 dark:to-white/50 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] pb-1.5">
                Projects
              </h1>
            </FadeInUp>
            <FadeInUp delay={300}>
              <p className="text-gray-900/80 dark:text-gray-400 max-w-2xl text-xs md:text-sm lg:text-base md:max-w-[550px] lg:max-w-[650px] flex-1 w-full">
                Check out some of the projects I have been working on. View a
                project summary and go to the GitHub repository, where you can
                see the tools and methods used.
              </p>
            </FadeInUp>
          </div>
          <FadeInUp delay={400}>
            <Button
              className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full md:w-auto"
              variant="glassPrimary"
            >
              <div>
                <div className="flex items-center gap-3">
                  <GitHubLogoIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  GitHub Profile
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </div>
            </Button>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
          {projects.map((project: Project, index: number) => (
            <FadeInUp
              key={project._id}
              delay={500 + index * 150}
              className="bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700/80 shadow-lg p-3 rounded-xl border dark:border-neutral-700 dark:hover:shadow-sky-950/60 hover:-translate-y-1 transition-all hover:shadow-sky-100/80 from-neutral-200/80 via-neutral-100/80 to-neutral-300/80 border-neutral-300"
            >
              <Link key={project._id} href={`/projects/${project.slug}`}>
                <Image
                  src={project.coverImage.asset.url}
                  alt={project.coverImage.alt}
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
                <h3 className="font-semibold pt-3 pb-1 text-lg text-wrap truncate">
                  {project.title}
                </h3>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
