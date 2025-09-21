"use client";

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { useRef } from "react";
import { FadeInLeft, FadeInUp } from "../AnimateOnScroll";
import LogoBar from "./LogoBar";

function About() {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -20; // Max 20 degrees tilt
    const rotateY = (mouseX / rect.width) * 20; // Max 20 degrees rotation

    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-sky-100 dark:from-black via-white dark:via-gray-950 to-sky-100 dark:to-black/90 pt-14"
    >
      <div>
        <div className="page-container flex flex-col md:flex-row md:gap-16">
          <div className="flex flex-col justify-center md:pb-16">
            <FadeInUp delay={0}>
              <h2 className="section-heading">About Me</h2>
            </FadeInUp>

            <FadeInUp delay={50} className="flex">
              <span className="h-0.5 w-4 bg-neutral-800 dark:bg-neutral-300 rounded-full mt-1.5 mb-4 -ml-2 relative" />
            </FadeInUp>

            <div>
              <FadeInUp delay={100}>
                <p className="opacity-70 max-w-[46rem]">
                  Tech enthusiast with an interest in integrating AI models with
                  front-end development. Learning to code since I was thirteen,
                  I began experimenting with HTML and CSS on Notepad++. Today I
                  now have two diplomas in web development and graphic design,
                  and I am currently studying for a Bachelor of Computer and
                  Information Sciences. In which I hope to gain a foundational
                  understanding of Data Science and Artificial Intelligence, and
                  to dive deeper into algorithms and big data.
                  <br />
                  <br />
                  When I&apos;m not glued to my screen and running on a
                  concerning amount of caffeine, you&apos;ll probably find me
                  outdoors in the sunshine and fresh air. That is, if I&apos;m
                  not at home enjoying the latest show I&apos;ve gotten hooked
                  on. Some other passions I like to indulge in also include
                  photography, cooking, and motorsport weekends. All of which
                  helps me get away from my devices while still exploring my
                  creative outlet.
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
                    <a
                      href="https://www.linkedin.com/in/ryan-bakker/"
                      target="_blank"
                    >
                      <LinkedInLogoIcon className="opacity-70 hover:opacity-100 transition-all h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ryanbakker" target="_blank">
                      <GitHubLogoIcon className="opacity-70 hover:opacity-100 transition-all h-6 w-6" />
                    </a>
                  </li>
                </ul>
              </FadeInUp>
            </div>
          </div>

          <FadeInLeft delay={400}>
            <Image
              ref={imageRef}
              src="/about-cover.jpeg"
              alt="photo of me under lights"
              width={380}
              height={400}
              className="max-w-[90vw] sm:max-w-[100vw] md:max-h-[80vh] mx-auto md:w-[40vw] rounded-2xl my-8 object-cover backdrop-blur-xl bg-white/20 dark:bg-white/15 border border-sky-200/30 dark:border-gray-600/25 shadow-[0_25px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_rgba(255,255,255,0.15)] hover:bg-white/30 dark:hover:bg-white/25 hover:border-sky-300/40 dark:hover:border-gray-500/35 hover:shadow-[0_35px_70px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_35px_70px_rgba(255,255,255,0.25)] glass-image-3d max-h-[60vh]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </FadeInLeft>
        </div>
      </div>

      <LogoBar />
    </section>
  );
}

export default About;
