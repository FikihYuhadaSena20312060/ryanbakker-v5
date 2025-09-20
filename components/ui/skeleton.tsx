"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "text" | "card" | "image" | "button" | "circle";
  animation?: "pulse" | "wave" | "shimmer";
}

export function Skeleton({
  className,
  variant = "default",
  animation = "pulse",
  ...props
}: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700";

  const variantClasses = {
    default: "h-4 w-full rounded",
    text: "h-4 w-full rounded",
    card: "h-32 w-full rounded-lg",
    image: "aspect-video w-full rounded-lg",
    button: "h-10 w-24 rounded-md",
    circle: "h-12 w-12 rounded-full",
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-pulse",
    shimmer:
      "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className,
      )}
      {...props}
    />
  );
}

// Specific skeleton components for common use cases
export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? "w-3/4" : "w-full"}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <Skeleton variant="image" />
      <div className="space-y-2">
        <Skeleton variant="text" className="w-3/4" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

export function SkeletonProjectCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/5",
        className,
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-3">
        <Skeleton variant="circle" className="h-8 w-8" />
        <Skeleton variant="text" className="h-6 w-32" />
      </div>
      <SkeletonText lines={3} className="mb-4" />
      <div className="relative mb-4 h-32">
        <Skeleton variant="image" className="h-full" />
      </div>
      <Skeleton variant="button" className="w-full h-10" />
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="min-h-[90vh] overflow-hidden -mt-17">
      <div className="page-container pt-24! md:pt-32!">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-start flex-1">
            <div className="space-y-4 mb-6">
              <Skeleton variant="text" className="h-16 w-full max-w-2xl" />
              <Skeleton variant="text" className="h-16 w-3/4 max-w-xl" />
            </div>
            <div className="space-y-3 mb-8">
              <Skeleton variant="text" className="h-4 w-96" />
              <Skeleton variant="text" className="h-4 w-80" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-16">
              <Skeleton variant="button" className="h-12 w-32" />
              <Skeleton variant="button" className="h-12 w-36" />
            </div>
          </div>
          <div className="flex items-center justify-center text-center z-10 max-w-[600px]">
            <div className="grid grid-cols-5 gap-4 scale-[0.85] xl:scale-[0.9]">
              <Skeleton variant="image" className="col-span-4 w-full" />
              <Skeleton variant="image" className="col-span-1 h-full" />
              <Skeleton variant="image" className="col-span-1 h-full" />
              <Skeleton variant="image" className="col-span-4 w-[477px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
