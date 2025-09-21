import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://ryanbakker.site"
  ),
  title: {
    default: "Ryan Bakker | Full-Stack Developer & Designer",
    template: "%s | Ryan Bakker",
  },
  description:
    "Full-stack developer and designer creating modern web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio and projects.",
  keywords: [
    "Ryan Bakker",
    "Full-stack developer",
    "Web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Frontend developer",
    "Backend developer",
    "Web designer",
    "UI/UX designer",
    "Portfolio",
    "Auckland University of Technology",
    "Yoobee College",
    "Software Engineer",
    "Web Development",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "Ryan Bakker" }],
  creator: "Ryan Bakker",
  publisher: "Ryan Bakker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ryan Bakker Portfolio",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://ryanbakker.site",
    title: "Ryan Bakker | Full-Stack Developer & Designer",
    description:
      "Full-stack developer and designer creating modern web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
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
      "Full-stack developer and designer creating modern web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/about-cover.jpeg"],
    creator: "@ryanbakker",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "https://ryanbakker.site",
  },
  icons: {
    icon: [
      {
        url: "/ryan-lightmode-favicon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ryan-darkmode-favicon.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/ryan-lightmode-favicon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ryan-darkmode-favicon.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ryanbakker.dev";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ryan Bakker",
    jobTitle: "Full-Stack Developer & Designer",
    description:
      "Full-stack developer and designer creating modern web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    url: baseUrl,
    image: `${baseUrl}/about-cover.jpeg`,
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
      "Web Development",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Auckland University of Technology",
        description: "Bachelor of Computer and Information Sciences",
      },
      {
        "@type": "EducationalOrganization",
        name: "Yoobee College of Innovation",
        description: "Diploma in Web Design & Production",
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      description:
        "Creating modern web experiences with React, Next.js, and TypeScript",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${notoSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
