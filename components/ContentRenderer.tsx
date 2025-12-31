import React from 'react';

interface ContentRendererProps {
  content?: string;
  className?: string;
}

/**
 * This component acts as a bridge for future MDX integration.
 * Currently it handles HTML strings, but is structured to 
 * eventually use MDXProvider and custom component mappings.
 */
const ContentRenderer: React.FC<ContentRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // This map is where you will define custom components to use inside MDX
  // e.g., <PetHighlight name="Luna" /> inside your markdown.
  const mdxComponents = {
    h2: (props: any) => <h2 className="prose-h2" {...props} />,
    h3: (props: any) => <h3 className="prose-h3" {...props} />,
    p: (props: any) => <p className="prose-p" {...props} />,
    // Add more custom components here later
  };

  return (
    <div className={`prose-content ${className}`}>
      {/* 
          FUTURE: Replace this with <MDXRemote {...source} components={mdxComponents} /> 
          when build-time MDX processing is added.
      */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ContentRenderer;