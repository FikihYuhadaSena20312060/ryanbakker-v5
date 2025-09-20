import type { Metadata } from "next";
import Education from "@/components/education/Education";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import { getFeaturedProjects } from "@/sanity/lib/projects/getFeaturedProjects";

export const metadata: Metadata = {
  title: "Ryan Bakker | Home",
  description:
    "Full-stack developer and designer creating modern web experiences. Explore my portfolio, projects, and get in touch.",
};

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <Hero />
      <ProjectsPreview projects={projects} />
      <About />
      <Education />
      <Contact />
    </>
  );
}
