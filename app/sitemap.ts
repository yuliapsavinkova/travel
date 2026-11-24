import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../data/house-sitting/house-sitting';
import { ALL_RESOURCES } from '../data/resources/resources';
import { TRAVEL_GUIDES } from '../data/travel/travel';
import { toIsoDate } from '../utils/content';

const SITE_URL = 'https://sitterjourney.com';

function resolveLastModified(date?: string, fallback: Date = new Date()): Date {
  const iso = toIsoDate(date);
  return iso ? new Date(`${iso}T00:00:00Z`) : fallback;
}

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
      url: `${SITE_URL}/sitters-guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/homeowners-guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
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

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: resolveLastModified(post.updatedDate || post.date, currentDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const travelPages: MetadataRoute.Sitemap = TRAVEL_GUIDES.map((guide) => ({
    url: `${SITE_URL}/travel/${guide.slug}`,
    lastModified: resolveLastModified(guide.updatedDate || guide.date, currentDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const resourcePages: MetadataRoute.Sitemap = ALL_RESOURCES.map((item) => ({
    url: `${SITE_URL}/${item.slug}`,
    lastModified: resolveLastModified(item.updatedDate || item.date, currentDate),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages, ...travelPages, ...resourcePages];
}
