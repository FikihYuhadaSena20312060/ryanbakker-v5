import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export type Project = {
  _id: string;
  title: string;
  lastUpdated: Date;
  slug: string;
  isUnderConstruction: boolean;
  isFeatured: boolean;
  githubUrl: string;
  description: string;
  brief: string;
  desktopImages: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
  mobileImages: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
  tools: string[];
};

export const getSingleProjectQuery = defineQuery(
  `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    lastUpdated,
    "slug": slug.current,
    isUnderConstruction,
    isFeatured,
    githubUrl,
    description,
    brief,
    desktopImages[] {
      asset->{
        _id,
        url
      },
      alt
    },
    mobileImages[] {
      asset->{
        _id,
        url
      },
      alt
    },
    tools
  }`,
);

export async function getSingleProject(slug: string) {
  const { data } = await sanityFetch({
    query: getSingleProjectQuery,
    params: { slug },
  });

  if (!data) return data;

  return {
    ...data,
    lastUpdated: new Date((data as { lastUpdated: string }).lastUpdated),
  } as Project;
}
