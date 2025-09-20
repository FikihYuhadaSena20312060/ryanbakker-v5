import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Github,
  GraduationCap,
  House,
  Layers,
  Mail,
  Paintbrush,
  User,
} from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/#home",
    icon: House,
    external: false,
  },
  {
    label: "Projects",
    href: "/#projects-preview",
    icon: Layers,
    external: false,
  },
  {
    label: "About",
    href: "/#about",
    icon: User,
    external: false,
  },
  {
    label: "Education",
    href: "/#education",
    icon: GraduationCap,
    external: false,
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: Mail,
    external: false,
  },
];

export const FOOTER_LINKS = [
  {
    label: "Home",
    href: "/#home",
    external: false,
  },
  {
    label: "Projects",
    href: "/#projects-preview",
    external: false,
  },
  {
    label: "About",
    href: "/#about",
    external: false,
  },
  {
    label: "Contact",
    href: "/#contact",
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/ryanbakker",
    icon: GitHubLogoIcon,
    external: true,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/ryan-bakker/",
    icon: LinkedInLogoIcon,
    external: true,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/ryanbakker",
    icon: Paintbrush,
    external: true,
  },
];

export const LOGOS = [
  {
    alt: "Next.js",
    path: "/logos/logo-1.svg",
  },
  {
    alt: "Tailwind CSS",
    path: "/logos/logo-2.svg",
  },
  {
    alt: "React.js",
    path: "/logos/logo-3.svg",
  },
  {
    alt: "GitHub",
    path: "/logos/logo-4.svg",
  },
  {
    alt: "Monday",
    path: "/logos/logo-5.svg",
  },
  {
    alt: "Adobe CC",
    path: "/logos/logo-6.svg",
  },
  {
    alt: "WordPress",
    path: "/logos/logo-7.svg",
  },
  {
    alt: "Figma",
    path: "/logos/logo-8.svg",
  },
  {
    alt: "MongoDB",
    path: "/logos/logo-9.svg",
  },
];

export const eduCards = [
  {
    title: "Bachelor of Computer and Information Sciences",
    provider: "Auckland University of Technology",
    logoPath: "/logos/aut-logo.png",
    iconPath: "/logos/aut-icon.png",
    date: "2024 - Present",
    blurb:
      "Currently completing a comprehensive computer science degree focused on the principles of software engineering, data structures, and systems design. The program balances theoretical foundations with hands-on experience, preparing graduates for modern software development and IT roles.",
    highlights: [
      "Majoring in Software Development.",
      "Minoring in Artificial Intelligence.",
      "Minoring in Networks and Cybersecurity.",
      "Completing a Research and Development Project.",
    ],
  },
  {
    title: "Dip. in Web Design & Production",
    provider: "Yoobee College of Innovation",
    logoPath: "/logos/yoobee-logo.svg",
    iconPath: "/logos/yoobee-icon.png",
    date: "2021 - 2022",
    blurb:
      "An intensive program focused on front-end and full-stack web development, user interface design, and digital production workflows. Combined creative design principles with practical web development tools to create responsive and interactive digital experiences.",
    highlights: [
      "UX Analysis / Research, and Development.",
      "React Mobile and Desktop Development.",
      "WordPress Theme Development and SEO.",
      "Web and Graphic Design and Development.",
    ],
  },
  {
    title: "Dip. in Digital Media & Graphic Design",
    provider: "Yoobee College of Innovation",
    logoPath: "/logos/yoobee-logo.svg",
    iconPath: "/logos/yoobee-icon.png",
    date: "2020",
    blurb:
      "Introduced to the core concepts of visual communication and digital content creation. Explored a range of design disciplines while developing foundational skills in project planning, creative software, and user-centered design.",
    highlights: [
      "Foundations of Graphic and Digital Design.",
      "Web Design and Development.",
      "Project Management in a Group Project.",
      "Product Design and Development.",
    ],
  },
];
