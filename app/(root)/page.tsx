import Education from "@/components/education/Education";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import { getFeaturedProjects } from "@/sanity/lib/projects/getFeaturedProjects";

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
