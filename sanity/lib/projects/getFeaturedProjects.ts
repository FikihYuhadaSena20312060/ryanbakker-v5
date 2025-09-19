import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export type Project = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  images: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
};

const featuredProjectsQuery =
  defineQuery(`*[_type == "project" && isFeatured == true] {
    _id,
    title,
    description,
    "slug": slug.current,
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    }`);

export async function getFeaturedProjects() {
  const { data } = await sanityFetch({
    query: featuredProjectsQuery,
  });

  return data;
}
