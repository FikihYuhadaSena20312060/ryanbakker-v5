import { type NextRequest, NextResponse } from "next/server";
import { getPaginatedProjects } from "@/sanity/lib/projects/getAllProjects";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);

    const data = await getPaginatedProjects(page, limit);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching paginated projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
