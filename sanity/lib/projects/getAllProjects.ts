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
};

const allProjectsQuery = defineQuery(`*[_type == "project"] {
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
    }`);

export async function getAllProjects() {
  const { data } = await sanityFetch({
    query: allProjectsQuery,
  });

  return data;
}
