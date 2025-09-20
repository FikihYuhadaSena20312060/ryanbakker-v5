import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { FadeInLeft, FadeInUp } from "../AnimateOnScroll";
import LogoBar from "./LogoBar";

function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-sky-100 dark:from-black via-white dark:via-gray-950 to-sky-100 dark:to-black/90 pt-14"
    >
      <div>
        <div className="page-container flex flex-col md:flex-row md:gap-16">
          <div className="flex flex-col justify-center md:pb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl lg:text-5xl uppercase font-extrabold lg:font-bold  dark:text-white tracking-tight bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 dark:from-neutral-200/90 dark:via-white/70 dark:to-white/50 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
                About Me
              </h2>
            </FadeInUp>

            <FadeInUp delay={50} className="flex">
              <span className="h-0.5 w-4 bg-neutral-800 dark:bg-neutral-300 rounded-full my-4 -ml-2 relative" />
            </FadeInUp>

            <div>
              <FadeInUp delay={100}>
                <p className="opacity-70 max-w-[46rem]">
                  Welcome to the website of a generalist with just a sprinkle of
                  ADHD. I&apos;ve been coding since I was thirteen, starting out
                  with HTML and CSS in Notepad++. These days, I&apos;ve got two
                  development diplomas under my belt and I&apos;m currently
                  working toward a Bachelor&apos;s in Computer Science, with
                  intentions to major in data science so I can dive deeper into
                  algorithms and big data.
                  <br />
                  <br />
                  When I&apos;m not glued to a screen and running on a
                  concerning amount of caffeine, you&apos;ll probably find me
                  outdoors — camping, hiking, or mountain biking. (This is
                  starting to sound like a dating app bio, isn&apos;t it?) I
                  also enjoy photography, and drawing — badly. But hey,
                  it&apos;s a creative outlet. Thanks for reading the About
                  section of a potentially crazy person.
                </p>
              </FadeInUp>

              <FadeInUp delay={150}>
                <ul className="flex flex-row gap-5 mt-8">
                  <li>
                    <a href="mailto:ryanbakker@outlook.co.nz?subject=Website%20Enquiry">
                      <EnvelopeClosedIcon className="opacity-70 hover:opacity-100 transition-all h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ryan-bakker/">
                      <LinkedInLogoIcon className="opacity-70 hover:opacity-100 transition-all h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ryanbakker">
                      <GitHubLogoIcon className="opacity-70 hover:opacity-100 transition-all h-6 w-6" />
                    </a>
                  </li>
                </ul>
              </FadeInUp>
            </div>
          </div>

          <FadeInLeft delay={400}>
            <Image
              src="/about-cover.jpeg"
              alt="photo of me under lights"
              width={400}
              height={400}
              className="max-w-[100vw] md:max-h-[80vh] mx-auto md:w-[40vw] rounded-lg shadow-lg my-8 object-cover"
            />
          </FadeInLeft>
        </div>
      </div>

      <LogoBar />
    </section>
  );
}

export default About;
