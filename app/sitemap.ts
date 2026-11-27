import type { MetadataRoute } from 'next';
import { BLOG_POSTS, HOMEOWNER_POSTS, SITTER_POSTS } from '../data/house-sitting/house-sitting';
import { ALL_RESOURCES } from '../data/resources/resources';
import { TRAVEL_GUIDES } from '../data/travel/travel';
import { toAbsoluteUrl, toIsoDate } from '../utils/content';

const SITE_URL = 'https://sitterjourney.com';
const DEFAULT_DATE = new Date('2026-01-09T00:00:00Z');

function resolveLastModified(date?: string, fallback: Date = DEFAULT_DATE): Date {
  const iso = toIsoDate(date);
  return iso ? new Date(`${iso}T00:00:00Z`) : fallback;
}

function getLatestDate(
  items: Array<{ date?: string; updatedDate?: string }>,
  fallback: Date = DEFAULT_DATE
): Date {
  let latest = fallback;
  for (const item of items) {
    const candidate = resolveLastModified(item.updatedDate || item.date, fallback);
    if (candidate.getTime() > latest.getTime()) {
      latest = candidate;
    }
  }
  return latest;
}

function escapeXmlUrl(url: string): string {
  return url.replace(/&/g, '&amp;');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestSitterDate = getLatestDate(SITTER_POSTS);
  const latestHomeownerDate = getLatestDate(HOMEOWNER_POSTS);
  const latestResourceDate = getLatestDate(ALL_RESOURCES);
  const latestTravelDate = getLatestDate(TRAVEL_GUIDES);
  const latestSiteDate = new Date(
    Math.max(
      latestSitterDate.getTime(),
      latestHomeownerDate.getTime(),
      latestResourceDate.getTime(),
      latestTravelDate.getTime()
    )
  );

  // Core static & archive pages with deterministic lastModified dates
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: latestSiteDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [escapeXmlUrl(`${SITE_URL}/yulia-miami-beach.jpg`)],
    },
    {
      url: `${SITE_URL}/sitters-guides`,
      lastModified: latestSitterDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/homeowners-guides`,
      lastModified: latestHomeownerDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: latestResourceDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/travel`,
      lastModified: latestTravelDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: latestSiteDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date('2026-08-29T00:00:00Z'),
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [escapeXmlUrl(`${SITE_URL}/yulia-with-dog.jpg`)],
    },
    {
      url: `${SITE_URL}/disclosure`,
      lastModified: new Date('2026-01-09T00:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date('2026-01-09T00:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: resolveLastModified(post.updatedDate || post.date, latestSiteDate),
    changeFrequency: 'monthly',
    priority: 0.8,
    ...(post.imageUrl ? { images: [escapeXmlUrl(toAbsoluteUrl(post.imageUrl))] } : {}),
  }));

  const travelPages: MetadataRoute.Sitemap = TRAVEL_GUIDES.map((guide) => ({
    url: `${SITE_URL}/travel/${guide.slug}`,
    lastModified: resolveLastModified(guide.updatedDate || guide.date, latestTravelDate),
    changeFrequency: 'monthly',
    priority: 0.7,
    ...(guide.imageUrl ? { images: [escapeXmlUrl(toAbsoluteUrl(guide.imageUrl))] } : {}),
  }));

  const resourcePages: MetadataRoute.Sitemap = ALL_RESOURCES.map((item) => ({
    url: `${SITE_URL}/${item.slug}`,
    lastModified: resolveLastModified(item.updatedDate || item.date, latestResourceDate),
    changeFrequency: 'monthly',
    priority: 0.75,
    ...(item.imageUrl ? { images: [escapeXmlUrl(toAbsoluteUrl(item.imageUrl))] } : {}),
  }));

  return [...staticPages, ...blogPages, ...travelPages, ...resourcePages];
}
