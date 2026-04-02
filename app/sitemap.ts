import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.liambeeton.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.url === "/" ? 1 : 0.8,
  }));
}
