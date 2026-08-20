import type { MetadataRoute } from "next";
import { collectionImages, collectionPath, collections, productPath } from "@/lib/collection";

const siteUrl = "https://www.anurrakti.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/collection`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/house`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/ready-to-wear`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/gift-concierge`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  return [
    ...pages,
    ...collections.map((collection) => ({
      url: `${siteUrl}${collectionPath(collection)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...collectionImages.map((piece) => ({
      url: `${siteUrl}${productPath(piece)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
