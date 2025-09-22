import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

// Optimized image URL builder with performance settings
export const urlForOptimized = (
  source: SanityImageSource,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "webp" | "jpg" | "png";
    fit?: "crop" | "fill" | "fillmax" | "max" | "scale" | "min";
    crop?:
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "center"
      | "focalpoint"
      | "entropy";
  },
) => {
  const {
    width,
    height,
    quality = 85,
    format = "webp",
    fit = "crop",
    crop = "center",
  } = options || {};

  let imageBuilder = builder.image(source);

  if (width) imageBuilder = imageBuilder.width(width);
  if (height) imageBuilder = imageBuilder.height(height);

  return imageBuilder
    .quality(quality)
    .format(format as any)
    .fit(fit)
    .crop(crop)
    .auto("format");
};
