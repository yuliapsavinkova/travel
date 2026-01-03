interface ContentRendererProps {
  content?: string;
  className?: string;
}

const ContentRenderer = ({ content, className = '' }: ContentRendererProps) => {
  if (!content) return null;

  return (
    <div className={`prose-content ${className}`}>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted internal static content */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ContentRenderer;
