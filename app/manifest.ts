import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ryan Bakker | Full-Stack Developer & Designer",
    short_name: "Ryan Bakker",
    description:
      "Full-stack developer and designer creating modern web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/ryan-lightmode-favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/ryan-darkmode-favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    categories: ["portfolio", "developer", "designer"],
    lang: "en",
    scope: "/",
  };
}
