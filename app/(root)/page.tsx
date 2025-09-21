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
    "Full-stack developer and designer creating modern web experiences. Explore my portfolio, projects, and get in touch. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Ryan Bakker | Full-Stack Developer & Designer",
    description:
      "Full-stack developer and designer creating modern web experiences. Explore my portfolio, projects, and get in touch.",
    images: [
      {
        url: "/about-cover.jpeg",
        width: 1200,
        height: 630,
        alt: "Ryan Bakker - Full-Stack Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Bakker | Full-Stack Developer & Designer",
    description:
      "Full-stack developer and designer creating modern web experiences. Explore my portfolio, projects, and get in touch.",
    images: ["/about-cover.jpeg"],
  },
};

export default async function Home() {
  const projects = await getFeaturedProjects();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ryan Bakker",
    jobTitle: "Full-Stack Developer & Designer",
    description:
      "Full-stack developer and designer creating modern web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://ryanbakker.site",
    sameAs: [
      "https://github.com/ryanbakker",
      "https://www.linkedin.com/in/ryan-bakker/",
      "https://www.behance.net/ryanbakker",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Web Development",
      "UI/UX Design",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Auckland University of Technology",
      },
      {
        "@type": "EducationalOrganization",
        name: "Yoobee College of Innovation",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <ProjectsPreview projects={projects} />
      <About />
      <Education />
      <Contact />
    </>
  );
}
