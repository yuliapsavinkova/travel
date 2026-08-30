import type { MetadataRoute } from 'next';
import { BLOG_POSTS, TRAVEL_GUIDES, ALL_RESOURCES } from '../constants';

const SITE_URL = 'https://sitterjourney.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/travel`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/disclosure`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    let lastMod = currentDate;
    if (post.date) {
      const parsed = new Date(post.date);
      if (!isNaN(parsed.getTime())) {
        lastMod = parsed;
      }
    }
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    };
  });

  // Travel guides
  const travelPages: MetadataRoute.Sitemap = TRAVEL_GUIDES.map((guide) => {
    let lastMod = currentDate;
    if (guide.date) {
      const parsed = new Date(guide.date);
      if (!isNaN(parsed.getTime())) {
        lastMod = parsed;
      }
    }
    return {
      url: `${SITE_URL}/travel/${guide.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  // Resource items
  const resourcePages: MetadataRoute.Sitemap = ALL_RESOURCES.map((item) => {
    let lastMod = currentDate;
    if (item.date) {
      const parsed = new Date(item.date);
      if (!isNaN(parsed.getTime())) {
        lastMod = parsed;
      }
    }
    return {
      url: `${SITE_URL}/resources/${item.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.75,
    };
  });

  return [...staticPages, ...blogPages, ...travelPages, ...resourcePages];
}
