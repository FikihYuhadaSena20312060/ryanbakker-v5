import { Calendar } from "lucide-react";
import Image from "next/image";
import { eduCards } from "@/constants";
import { FadeInLeft, FadeInRight } from "../AnimateOnScroll";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

function EducationInfo() {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-14 w-full px-4">
      {/* Mobile Variant */}
      <div className="md:space-y-22 block md:hidden">
        <FadeInRight delay={0}>
          <aside className="flex flex-1 flex-col gap-5 p-8 text-white">
            <h3 className="font-bold uppercase text-xl">{eduCards[0].title}</h3>
            <div className="flex flex-row items-center gap-2">
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                <Calendar size={15} />
                {eduCards[0].date}
              </Badge>
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                Ongoing
              </Badge>
            </div>
            <div>
              <span className="font-bold uppercase text-xs opacity-60">
                Key Points
              </span>
              <ul className="list-disc flex flex-col gap-1 pt-1">
                {eduCards[0].highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </aside>
        </FadeInRight>

        <FadeInRight delay={200}>
          <aside className="education-card">
            <h3 className="font-bold uppercase text-xs opacity-60">
              Description
            </h3>
            <p>{eduCards[0].blurb}</p>
          </aside>
        </FadeInRight>

        <Separator className="mt-14 mb-4" />

        <FadeInRight delay={400}>
          <aside className="flex flex-1 flex-col gap-5 p-8 text-white">
            <h3 className="font-bold uppercase text-xl">{eduCards[1].title}</h3>
            <div className="flex flex-row items-center gap-2">
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                <Calendar size={15} />
                {eduCards[1].date}
              </Badge>
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                Completed
              </Badge>
            </div>
            <div>
              <span className="font-bold uppercase text-xs opacity-60">
                Key Points
              </span>
              <ul className="list-disc flex flex-col gap-1 pt-1">
                {eduCards[1].highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </aside>
        </FadeInRight>
      </div>

      {/* Desktop Variant */}
      <div className="md:space-y-22 hidden md:flex flex-col items-start max-w-[500px]">
        <FadeInRight delay={0}>
          <aside className="flex flex-1 flex-col gap-5 p-4 text-white">
            <h3 className="font-bold uppercase text-xl md:text-2xl">
              {eduCards[0].title}
            </h3>
            <div className="flex flex-row items-center gap-2">
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                <Calendar size={15} />
                {eduCards[0].date}
              </Badge>
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                Ongoing
              </Badge>
            </div>
            <div>
              <span className="font-bold uppercase text-xs opacity-60">
                Key Points
              </span>
              <ul className="list-disc flex flex-col gap-1 pt-1">
                {eduCards[0].highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </aside>
        </FadeInRight>

        <FadeInRight delay={200}>
          <aside className="education-card">
            <div className="flex flex-row items-center justify-between">
              <h3 className="font-bold uppercase text-xs opacity-60">
                Description
              </h3>
              <h3 className="font-bold uppercase text-xs opacity-60">
                Yoobee Colleges
              </h3>
            </div>
            <p>{eduCards[1].blurb}</p>
          </aside>
        </FadeInRight>

        <FadeInRight delay={400}>
          <aside className="flex flex-1 flex-col gap-5 p-4 text-white">
            <h3 className="font-bold uppercase text-xl md:text-2xl">
              {eduCards[2].title}
            </h3>
            <div className="flex flex-row items-center gap-2">
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                <Calendar size={15} />
                {eduCards[2].date}
              </Badge>
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                Completed
              </Badge>
            </div>
            <div>
              <span className="font-bold uppercase text-xs opacity-60">
                Key Points
              </span>
              <ul className="list-disc flex flex-col gap-1 pt-1">
                {eduCards[2].highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </aside>
        </FadeInRight>
      </div>

      <div className="relative z-[150] hidden md:flex flex-col justify-between items-center w-[80px]">
        <Image
          src="/logos/aut-icon.png"
          alt="AUT"
          width={250}
          height={250}
          className="rounded-full z-[100]"
        />

        <div className="w-0.5 h-full bg-gradient-to-t from-sky-600 to-fuchsia-400 rounded-full" />

        <Image
          src="/logos/yoobee-icon.png"
          alt="AUT"
          width={250}
          height={250}
          className="rounded-full z-[100]"
        />

        <div className="w-0.5 h-full bg-gradient-to-t from-teal-700 to-sky-600 rounded-full" />

        <Image
          src="/logos/yoobee-icon.png"
          alt="AUT"
          width={250}
          height={250}
          className="rounded-full z-[100] pb-[10.5rem]"
        />
      </div>

      {/* Mobile Variant */}
      <div className="md:space-y-22 block md:hidden">
        <FadeInLeft delay={100}>
          <aside className="education-card">
            <h3 className="font-bold uppercase text-xs opacity-60">
              Description
            </h3>
            <p>{eduCards[1].blurb}</p>
          </aside>
        </FadeInLeft>

        <Separator className="mt-14" />

        <FadeInLeft delay={300}>
          <aside className="flex flex-1 flex-col gap-5 p-8 md:mb-22 pt-12 text-white">
            <h3 className="font-bold uppercase text-xl">{eduCards[2].title}</h3>
            <div className="flex flex-row items-center gap-2">
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                <Calendar size={15} />
                {eduCards[2].date}
              </Badge>
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                Completed
              </Badge>
            </div>
            <div>
              <span className="font-bold uppercase text-xs opacity-60">
                Key Points
              </span>
              <ul className="list-disc flex flex-col gap-1 pt-1">
                {eduCards[2].highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </aside>
        </FadeInLeft>

        <FadeInLeft delay={500}>
          <aside className="education-card">
            <h3 className="font-bold uppercase text-xs opacity-60">
              Description
            </h3>
            <p>{eduCards[2].blurb}</p>
          </aside>
        </FadeInLeft>
      </div>

      {/* Desktop Variant */}
      <div className="md:space-y-22 hidden mt-12 md:flex flex-col items-end max-w-[500px]">
        <FadeInLeft delay={100}>
          <aside className="education-card">
            <div className="flex flex-row items-center justify-between">
              <h3 className="font-bold uppercase text-xs opacity-60">
                Description
              </h3>
              <h3
                className="font-bold uppercase text-xs opacity-60"
                title="Auckland University of Technology"
              >
                AUT
              </h3>
            </div>
            <p>{eduCards[0].blurb}</p>
          </aside>
        </FadeInLeft>

        <FadeInLeft delay={300}>
          <aside className="flex flex-1 flex-col gap-5 p-4 md:mb-2 pt-3 text-white">
            <h3 className="font-bold uppercase text-xl md:text-2xl">
              {eduCards[1].title}
            </h3>
            <div className="flex flex-row items-center gap-2">
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                <Calendar size={15} />
                {eduCards[1].date}
              </Badge>
              <Badge
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-white bg-neutral-500/10"
                variant="outline"
              >
                Completed
              </Badge>
            </div>
            <div>
              <span className="font-bold uppercase text-xs opacity-60">
                Key Points
              </span>
              <ul className="list-disc flex flex-col gap-1 pt-1">
                {eduCards[1].highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </aside>
        </FadeInLeft>

        <FadeInLeft delay={500}>
          <aside className="education-card">
            <div className="flex flex-row items-center justify-between">
              <h3 className="font-bold uppercase text-xs opacity-60">
                Description
              </h3>
              <h3 className="font-bold uppercase text-xs opacity-60">
                Yoobee Colleges
              </h3>
            </div>
            <p>{eduCards[2].blurb}</p>
          </aside>
        </FadeInLeft>
      </div>
    </div>
  );
}

export default EducationInfo;
