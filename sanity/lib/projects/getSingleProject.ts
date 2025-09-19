import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export type Project = {
  _id: string;
  title: string;
  slug: string;
  coverImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  isUnderConstruction: boolean;
  isFeatured: boolean;
  githubUrl: string;
  description: string;
  brief: string;
  images: {
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
    "slug": slug.current,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    },
    isUnderConstruction,
    isFeatured,
    githubUrl,
    description,
    brief,
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    tools
  }`
);

export async function getSingleProject(slug: string) {
  const { data } = await sanityFetch({
    query: getSingleProjectQuery,
    params: { slug },
  });

  return data;
}
