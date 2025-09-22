import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export type Project = {
  _id: string;
  title: string;
  slug: string;
  _updatedAt?: string;
  coverImageDesktop: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  coverImageMobile: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
};

const allProjectsQuery =
  defineQuery(`*[_type == "project"] | order(_updatedAt desc) {
    _id,
    title,
    "slug": slug.current,
    _updatedAt,
    coverImageDesktop {
      asset->{
        _id,
        url
      },
      alt
    },
    coverImageMobile {
      asset->{
        _id,
        url
      },
      alt
    },
  }`);

const paginatedProjectsQuery =
  defineQuery(`*[_type == "project"] | order(_updatedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    _updatedAt,
    coverImageDesktop {
      asset->{
        _id,
        url
      },
      alt
    },
    coverImageMobile {
      asset->{
        _id,
        url
      },
      alt
    },
  }`);

const totalProjectsQuery = defineQuery(`count(*[_type == "project"])`);

export async function getAllProjects() {
  const { data } = await sanityFetch({
    query: allProjectsQuery,
  });

  return data;
}

export async function getPaginatedProjects(
  page: number = 1,
  limit: number = 6,
) {
  const start = (page - 1) * limit;
  const end = start + limit;

  const [projectsResult, totalResult] = await Promise.all([
    sanityFetch({
      query: paginatedProjectsQuery,
      params: { start, end },
    }),
    sanityFetch({
      query: totalProjectsQuery,
    }),
  ]);

  const totalProjects = totalResult.data;
  const totalPages = Math.ceil(totalProjects / limit);

  return {
    projects: projectsResult.data,
    pagination: {
      currentPage: page,
      totalPages,
      totalProjects,
      limit,
    },
  };
}
