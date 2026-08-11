import type { MetadataRoute } from "next";
import { blogArticles } from "./blog/articles";
import { absoluteUrl } from "./seo";
import { websiteProducts } from "./website/products";
import { miniAppTemplates } from "./zalo-mini-app/templates";

const siteUpdatedAt = new Date("2026-08-11T00:00:00+07:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/website"), lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/zalo-mini-app"), lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/mobile-app"), lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/web-app"), lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/education"), lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/studio"), lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },
  ];

  const websitePages: MetadataRoute.Sitemap = websiteProducts.map((product) => ({
    url: absoluteUrl(`/website/${product.slug}`),
    lastModified: siteUpdatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const miniAppPages: MetadataRoute.Sitemap = miniAppTemplates.map((template) => ({
    url: absoluteUrl(`/zalo-mini-app/${template.slug}`),
    lastModified: siteUpdatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: absoluteUrl(`/blog/${article.slug}`),
    lastModified: new Date(`${article.date}T00:00:00+07:00`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...websitePages, ...miniAppPages, ...articlePages];
}

