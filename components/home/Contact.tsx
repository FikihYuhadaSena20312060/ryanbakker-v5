import { EnvelopeOpenIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "../AnimateOnScroll";
import { Button } from "../ui/button";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-sky-100 dark:from-black via-white dark:via-gray-950 to-sky-100 dark:to-black/90 pt-16"
    >
      <div className="page-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center pb-6">
              <FadeInUp delay={0}>
                <h2 className="section-heading">Contact</h2>
                <p className="text-gray-700/80 dark:text-gray-400 text-sm md:text-base max-w-[400px]">
                  Feel free to connect or reach out if you're interested in
                  collaborating or discussing new ideas.
                </p>
              </FadeInUp>
            </div>

            <div className="flex flex-col gap-4 pt-2 pb-18">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Link href="mailto:ryanbakker@outlook.co.nz?subject=Website%20Enquiry">
                  <Button
                    className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full md:w-auto"
                    variant="glassPrimary"
                    size="lg"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <EnvelopeOpenIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send an Email</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </div>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ryan-bakker"
                  target="_blank"
                >
                  <Button
                    className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 transition-all duration-300 w-full md:w-auto cursor-pointer text-sm bg-white/60 hover:bg-white/70 text-neutral-900 dark:text-foreground/90 border border-neutral-300 hover:border-neutral-400 dark:border-white/20"
                    variant="glassSecondary"
                    size="lg"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedInLogoIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Message on Linkedin</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <Image
            src="/mbt-website-mockup.png"
            alt="Marten Bakker Timbers Mockup"
            width={600}
            height={270}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
