import { MoveRight } from "lucide-react";
import Link from "next/link";
import { FadeInUp } from "../AnimateOnScroll";
import { Button } from "../ui/button";
import EducationInfo from "./EducationInfo";

function Education() {
  return (
    <section
      id="education"
      className="pt-20 bg-gradient-to-tl from-sky-900 dark:from-gray-900 via-sky-800 dark:via-gray-800 to-blue-900 dark:to-blue-950/20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-400/30 to-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-2 md:mb-16 gap-8 md:gap-0 px-4">
          <div className="flex flex-col">
            <FadeInUp delay={0}>
              <div>
                <h2 className="section-heading from-neutral-100/90! via-white/90! to-white/70!">
                  Education
                </h2>
                <p className="text-gray-200/80 dark:text-gray-400 max-w-2xl text-sm md:text-base">
                  Summary of my prior and current education. <br />
                  For additional details check out my Linkedin profile.
                </p>
              </div>
            </FadeInUp>
          </div>

          <div className="md:flex">
            <Link href="https://www.linkedin.com/in/ryanbakker" target="_blank">
              <Button
                className="group overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full md:w-auto"
                variant="glassPrimary"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span>Linkedin</span>
                    <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </div>
              </Button>
            </Link>
          </div>
        </div>

        <EducationInfo />
      </div>
    </section>
  );
}

export default Education;
