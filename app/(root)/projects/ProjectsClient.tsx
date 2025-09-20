"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/AnimateOnScroll";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { type Project } from "@/sanity/lib/projects/getAllProjects";

interface ProjectsClientProps {
  initialData: {
    projects: Project[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalProjects: number;
      limit: number;
    };
  };
}

export function ProjectsClient({ initialData }: ProjectsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const currentPage = parseInt(searchParams.get("page") || "1");

  const fetchProjects = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/projects?page=${page}&limit=6`);
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentPage !== data.pagination.currentPage) {
      fetchProjects(currentPage);
    }
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const renderPaginationItems = () => {
    const { currentPage, totalPages } = data.pagination;
    const items = [];

    // Always show first page
    items.push(
      <PaginationItem key={1}>
        <PaginationLink
          onClick={() => handlePageChange(1)}
          isActive={currentPage === 1}
          className="cursor-pointer"
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if there's a gap after first page
    if (currentPage > 4) {
      items.push(
        <PaginationItem key="ellipsis1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show pages around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    // Show ellipsis if there's a gap before last page
    if (currentPage < totalPages - 3) {
      items.push(
        <PaginationItem key="ellipsis2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            onClick={() => handlePageChange(totalPages)}
            isActive={currentPage === totalPages}
            className="cursor-pointer"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
        {data.projects.map((project: Project, index: number) => (
          <FadeInUp
            key={project._id}
            delay={500 + index * 150}
            className="bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700/80 shadow-lg p-3 rounded-xl border dark:border-neutral-700 dark:hover:shadow-sky-950/60 hover:-translate-y-1 transition-all hover:shadow-sky-100/80 from-neutral-200/80 via-neutral-100/80 to-neutral-300/80 border-neutral-300"
          >
            <Link key={project._id} href={`/projects/${project.slug}`}>
              <Image
                src={project.coverImage.asset.url}
                alt={project.coverImage.alt}
                width={600}
                height={600}
                className="rounded-lg"
              />
              <h3 className="font-semibold pt-3 pb-1 text-lg text-wrap truncate">
                {project.title}
              </h3>
            </Link>
          </FadeInUp>
        ))}
      </div>

      {data.pagination.totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    currentPage > 1 && handlePageChange(currentPage - 1)
                  }
                  className={
                    currentPage <= 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {renderPaginationItems()}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    currentPage < data.pagination.totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                  className={
                    currentPage >= data.pagination.totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {isLoading && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-900 dark:text-white">
                Loading projects...
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
