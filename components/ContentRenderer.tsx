import React, { ReactNode } from 'react';

interface ContentRendererProps {
  content?: string | ReactNode;
  className?: string;
}

const ContentRenderer = ({ content, className = '' }: ContentRendererProps) => {
  if (!content) return null;

  // If the content is already a React Node (JSX), render it directly inside the prose wrapper
  if (React.isValidElement(content) || typeof content !== 'string') {
    return <div className={`prose-content ${className}`}>{content as ReactNode}</div>;
  }

  // Fallback for existing legacy string-based HTML content
  return (
    <div className={`prose-content ${className}`}>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted internal static content */}
      <div dangerouslySetInnerHTML={{ __html: content as string }} />
    </div>
  );
};

export default ContentRenderer;
