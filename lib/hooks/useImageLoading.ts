"use client";

import { useCallback, useEffect, useState } from "react";

interface UseImageLoadingOptions {
  images: string[];
  minLoadingTime?: number; // Minimum time to show loading state (ms)
  priority?: boolean; // If true, load images immediately, otherwise lazy load
}

export function useImageLoading({
  images,
  minLoadingTime = 300,
  priority = false,
}: UseImageLoadingOptions) {
  const [isLoading, setIsLoading] = useState(priority);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [startTime] = useState(Date.now());

  const loadImage = useCallback((src: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(src);
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (images.length === 0) {
      setIsLoading(false);
      return;
    }

    // For non-priority images, start loading after a short delay
    const loadDelay = priority ? 0 : 100;

    const timeoutId = setTimeout(() => {
      const imagePromises = images.map(loadImage);

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
    }, loadDelay);

    return () => clearTimeout(timeoutId);
  }, [images, minLoadingTime, startTime, loadImage, priority]);

  return {
    isLoading,
    loadedImages,
    allImagesLoaded: loadedImages.size === images.length,
  };
}

// Hook for progressive image loading - loads critical images first
export function useProgressiveImageLoading({
  criticalImages,
  secondaryImages,
  minLoadingTime = 200,
}: {
  criticalImages: string[];
  secondaryImages: string[];
  minLoadingTime?: number;
}) {
  const [criticalLoaded, setCriticalLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const { isLoading: criticalLoading } = useImageLoading({
    images: criticalImages,
    minLoadingTime: 0,
    priority: true,
  });

  const { isLoading: secondaryLoading } = useImageLoading({
    images: secondaryImages,
    minLoadingTime,
    priority: false,
  });

  useEffect(() => {
    if (!criticalLoading) {
      setCriticalLoaded(true);
    }
  }, [criticalLoading]);

  useEffect(() => {
    if (!criticalLoading && !secondaryLoading) {
      setAllLoaded(true);
    }
  }, [criticalLoading, secondaryLoading]);

  return {
    criticalLoaded,
    allLoaded,
    isLoading: criticalLoading || secondaryLoading,
  };
}
