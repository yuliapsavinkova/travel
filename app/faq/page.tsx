import type { Metadata } from 'next';
import FAQArchive from '../../components/FAQArchive';
import { HOMEOWNER_FAQS, MASTER_FAQS, SITTER_FAQS } from '../../data/faqs';
import { DEFAULT_OG_IMAGE } from '../../utils/content';

export const metadata: Metadata = {
  title: 'Common Questions: House Sitting for Sitters & Homeowners | Sitter Journey',
  description:
    'Answers to common questions about house sitting for sitters and homeowners: landing your first stay, memberships, prepping your home, and vetting sitters.',
  alternates: {
    canonical: 'https://sitterjourney.com/faq',
  },
  openGraph: {
    title: 'Common Questions: House Sitting for Sitters & Homeowners',
    description:
      'Answers to common questions about house sitting for sitters and homeowners: landing your first stay, memberships, prepping your home, and vetting sitters.',
    url: 'https://sitterjourney.com/faq',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey Common Questions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Common Questions: House Sitting for Sitters & Homeowners',
    description:
      'Answers to common questions about house sitting for sitters and homeowners: landing your first stay, memberships, prepping your home, and vetting sitters.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function FAQPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': 'https://sitterjourney.com/faq#faq',
        mainEntity: MASTER_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sitterjourney.com/faq#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://sitterjourney.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Common Questions',
            item: 'https://sitterjourney.com/faq',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container section-margin archive-page-container">
        <FAQArchive
          sitterFaqs={SITTER_FAQS}
          homeownerFaqs={HOMEOWNER_FAQS}
          initialTrack="sitters"
        />
      </div>
    </>
  );
}
