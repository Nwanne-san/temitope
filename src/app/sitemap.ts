import type { MetadataRoute } from "next";

const SITE_URL = "https://www.temitoperuthjacob.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/speaking",
    "/books",
    "/programs",
    "/resources",
    "/contact",
    "/branding",
    "/privacy",
  ];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
