import type { BlogPost, BlogPostSummary, BlogTrack } from '../types';

const SITE_URL = 'https://sitterjourney.com';

const MONTH_INDEX: Record<string, string> = {
  january: '01',
  jan: '01',
  february: '02',
  feb: '02',
  march: '03',
  mar: '03',
  april: '04',
  apr: '04',
  may: '05',
  june: '06',
  jun: '06',
  july: '07',
  jul: '07',
  august: '08',
  aug: '08',
  september: '09',
  sep: '09',
  sept: '09',
  october: '10',
  oct: '10',
  november: '11',
  nov: '11',
  december: '12',
  dec: '12',
};

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Format ISO dates ("2026-11-23") or clean display dates into human-readable text.
 */
const formatDisplayDate = (date?: string): string => {
  if (!date) return '';
  const clean = date.replace(/^Updated:\s*/i, '').trim();
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(clean);
  if (isoMatch) {
    const year = isoMatch[1];
    const monthIdx = Number.parseInt(isoMatch[2], 10) - 1;
    const day = Number.parseInt(isoMatch[3], 10);
    const monthName = MONTH_NAMES[monthIdx];
    if (monthName) {
      return `${monthName} ${day}, ${year}`;
    }
  }
  return clean;
};

/**
 * Format date for full article/detail view:
 * shows "Updated: <date>" when updatedDate is set, otherwise "Published: <date>".
 */
export const formatArticleDate = (date?: string, updatedDate?: string): string => {
  if (updatedDate) {
    return `Updated: ${formatDisplayDate(updatedDate)}`;
  }
  if (!date) return '';
  if (/^Updated:\s*/i.test(date)) {
    return `Updated: ${formatDisplayDate(date)}`;
  }
  return `Published: ${formatDisplayDate(date)}`;
};

/**
 * Format date for compact card/list view (uses updatedDate when available).
 */
export const formatCardDate = (date?: string, updatedDate?: string): string => {
  return formatDisplayDate(updatedDate || date);
};

/**
 * Convert display dates (e.g., "July 21, 2026", "January 2026") or ISO strings
 * into strict ISO 8601 YYYY-MM-DD strings for Schema.org, OpenGraph, and sitemap.
 */
export const toIsoDate = (date?: string): string | undefined => {
  if (!date) return undefined;
  const clean = date.replace(/^Updated:\s*/i, '').trim();

  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})/.exec(clean);
  if (isoMatch) {
    return `${isoMatch[1]}-${isoMatch[2]}-${isoMatch[3]}`;
  }

  const fullMatch = /^([a-zA-Z]+)\s+(\d{1,2}),?\s+(\d{4})$/.exec(clean);
  if (fullMatch) {
    const month = MONTH_INDEX[fullMatch[1].toLowerCase()];
    const day = fullMatch[2].padStart(2, '0');
    const year = fullMatch[3];
    if (month) return `${year}-${month}-${day}`;
  }

  const monthYearMatch = /^([a-zA-Z]+)\s+(\d{4})$/.exec(clean);
  if (monthYearMatch) {
    const month = MONTH_INDEX[monthYearMatch[1].toLowerCase()];
    const year = monthYearMatch[2];
    if (month) return `${year}-${month}-01`;
  }

  return undefined;
};

export const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200&h=630';
export const PUBLISHER_LOGO_URL = `${SITE_URL}/icon-512.png`;

/**
 * Normalize relative asset paths (e.g., "/fast-running-dog.jpg") into canonical absolute URLs
 * for OpenGraph, Twitter cards, and Schema.org structured data.
 */
export const toAbsoluteUrl = (url?: string): string => {
  if (!url) return PUBLISHER_LOGO_URL;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
};

const isHomeownerPost = (post: Pick<BlogPost, 'track' | 'audience'>): boolean => {
  if (post.track === 'homeowners') return true;
  if (post.track === 'sitters') return false;
  return Boolean(post.audience?.some((a) => /pet parent|homeowner/i.test(a)));
};

export const getPostTrack = (post: Pick<BlogPost, 'track' | 'audience'>): BlogTrack => {
  return isHomeownerPost(post) ? 'homeowners' : 'sitters';
};

export const getTrackPath = (track: BlogTrack): string => {
  return track === 'homeowners' ? '/homeowners' : '/sitters';
};

export const getTrackLabel = (track: BlogTrack): string => {
  return track === 'homeowners' ? 'For Homeowners' : 'For Sitters';
};

export const sortPostsByOrder = <T extends Pick<BlogPost, 'sortOrder'>>(posts: T[]): T[] => {
  return [...posts].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
};

export const toPostSummaries = (posts: BlogPost[]): BlogPostSummary[] => {
  return posts.map(({ body: _body, ...summary }) => summary);
};
