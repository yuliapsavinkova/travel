
import React from 'react';
import { BLOG_POSTS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import { CalendarIcon, MapPinIcon } from '../../../components/Icons';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="container text-center section-margin">
        <h1 className="display-title">Post Not Found</h1>
        <CommonDetail onBack="/journal#archive" image="" title="Not Found">
          <div className="text-center">The requested journal entry could not be located.</div>
        </CommonDetail>
      </div>
    );
  }

  const metadata = [
    { icon: <CalendarIcon size={14} />, text: post.date },
    { icon: <MapPinIcon size={14} />, text: post.location }
  ];

  return (
    <div className="container">
      <CommonDetail
        onBack="/journal#archive"
        image={post.imageUrl}
        metadata={metadata}
        title={post.title}
        backLabel="Return to Archive"
      >
        <div className="flex-col flex-gap-lg">
          <ContentRenderer content={post.body} />
        </div>
      </CommonDetail>
    </div>
  );
}
