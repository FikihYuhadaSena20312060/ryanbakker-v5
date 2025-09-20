"use client";

import { useEffect, useState } from "react";

interface UseImageLoadingOptions {
  images: string[];
  minLoadingTime?: number; // Minimum time to show loading state (ms)
}

export function useImageLoading({
  images,
  minLoadingTime = 500,
}: UseImageLoadingOptions) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (images.length === 0) {
      setIsLoading(false);
      return;
    }

    const imagePromises = images.map((src) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    });

    Promise.allSettled(imagePromises).then((results) => {
      const successful = results
        .filter((result) => result.status === "fulfilled")
        .map((result) => (result as PromiseFulfilledResult<string>).value);

      setLoadedImages(new Set(successful));

      // Ensure minimum loading time for better UX
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    });
  }, [images, minLoadingTime, startTime]);

  return {
    isLoading,
    loadedImages,
    allImagesLoaded: loadedImages.size === images.length,
  };
}
