import type { MetadataRoute } from "next";
import { blogPath, blogPosts } from "@/lib/blog";
import { collectionImages, collectionPath, collections, productPath } from "@/lib/collection";

const siteUrl = "https://www.anurrakti.com";
const siteContentUpdatedAt = "2026-09-09";
const catalogueUpdatedAt = "2026-08-29";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestBlogUpdate = blogPosts.reduce(
    (latest, post) => post.updatedAt > latest ? post.updatedAt : latest,
    blogPosts[0]?.updatedAt ?? siteContentUpdatedAt,
  );
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: siteContentUpdatedAt, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/collection`, lastModified: siteContentUpdatedAt, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/blogs`, lastModified: latestBlogUpdate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/house`, lastModified: siteContentUpdatedAt, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/about`, lastModified: siteContentUpdatedAt, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/ready-to-wear`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  return [
    ...pages,
    ...collections.map((collection) => ({
      url: `${siteUrl}${collectionPath(collection)}`,
      lastModified: catalogueUpdatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: collection.pieces.map((piece) => `${siteUrl}${piece.src}`),
    })),
    ...collectionImages.map((piece) => ({
      url: `${siteUrl}${productPath(piece)}`,
      lastModified: catalogueUpdatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [piece.src, ...(piece.detailImageMetadata ?? []).map((image) => image.src)]
        .map((src) => `${siteUrl}${src}`),
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}${blogPath(post)}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${siteUrl}${post.hero.src}`],
    })),
  ];
}
