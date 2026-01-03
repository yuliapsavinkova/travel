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
