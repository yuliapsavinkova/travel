import Image from 'next/image';
import React from 'react';

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '3/2' | '4/3' | '16/9' | '21/9' | '1/1';
  priority?: boolean;
}

/**
 * ArticleImage provides a standardized, optimized image block for use within long-form content.
 * It uses next/image for performance and handles the prose-specific styling.
 */
const ArticleImage = ({
  src,
  alt,
  caption,
  aspectRatio = '4/3', // Default to iPhone native ratio
  priority = false,
}: ArticleImageProps) => {
  return (
    <figure className="prose-image-block">
      <div
        className="media-viewport"
        style={{
          aspectRatio,
          position: 'relative',
          width: '100%',
          borderRadius: 'var(--r-md)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 720px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {caption && <figcaption className="prose-caption">{caption}</figcaption>}
    </figure>
  );
};

export default ArticleImage;
