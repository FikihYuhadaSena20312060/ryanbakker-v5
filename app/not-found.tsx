import type { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { House, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | 404",
  description:
    "The page you're looking for doesn't exist. Return to the homepage or explore my projects.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="bg-gradient-to-br from-sky-100 dark:from-black via-white dark:via-gray-950 to-sky-100 dark:to-black/90 min-h-screen flex items-center justify-center">
      <div className="page-container text-center">
        <FadeInUp delay={0}>
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 dark:from-neutral-200/90 dark:via-white/70 dark:to-white/50 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
              Sorry, the page you're looking for doesn't exist or has been
              moved. Let's get you back on track.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button
                className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300"
                variant="glassPrimary"
                size="lg"
              >
                <div className="flex items-center gap-3">
                  <House className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Go Home
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300"
                variant="outline"
                size="lg"
              >
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  View Projects
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
            </Link>
          </div>
        </FadeInUp>

        <FadeInUp delay={400}>
          <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            <p>If you believe this is an error, please contact me.</p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
