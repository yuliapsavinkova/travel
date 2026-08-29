/**
 * Simple helper to convert plain text with double-newlines into HTML paragraphs.
 * This removes the need to manually write <p> tags in data files.
 */
export const txt = (content: string): string => {
  if (!content) return '';
  return content
    .split('\n\n')
    .filter((paragraph) => paragraph.trim() !== '')
    .map((paragraph) => `<p>${paragraph.trim().replace(/\n/g, '<br />')}</p>`)
    .join('');
};

/**
 * Format date for full article/detail view (e.g., "Updated: July 21, 2026")
 */
export const formatArticleDate = (date?: string): string => {
  if (!date) return '';
  const clean = date.replace(/^Updated:\s*/i, '').trim();
  return `Updated: ${clean}`;
};

/**
 * Format date for compact card/list view (e.g., "July 21, 2026")
 */
export const formatCardDate = (date?: string): string => {
  if (!date) return '';
  return date.replace(/^Updated:\s*/i, '').trim();
};

