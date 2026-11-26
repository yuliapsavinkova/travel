import Link from 'next/link';
import React from 'react';
import type { FAQItem } from '../types';
import { ArrowUpRightIcon, ChevronDownIcon } from './Icons';

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subHeader?: string;
  linkHeading?: boolean;
}

const FAQSection = ({
  items,
  title = 'Common Questions',
  subHeader,
  linkHeading = false,
}: FAQSectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="prose-faq" aria-label="Common Questions">
      <div className="faq-header-wrap">
        {subHeader && <span className="sub-header">{subHeader}</span>}
        <h2 className="faq-title">
          {linkHeading ? (
            <Link href="/faq" className="faq-title-link">
              <span>{title}</span>
              <ArrowUpRightIcon size={18} className="faq-title-arrow" aria-hidden="true" />
            </Link>
          ) : (
            title
          )}
        </h2>
      </div>

      <div className="faq-list">
        {items.map((item) => (
          <details key={item.id} className="faq-row">
            <summary className="faq-question">
              <span>{item.question}</span>
              <ChevronDownIcon size={16} className="faq-chevron" aria-hidden="true" />
            </summary>
            <div className="faq-answer-wrap">
              <p className="faq-answer">{item.answer}</p>
              {item.link && (
                <Link
                  href={item.link.href}
                  className="faq-action-link"
                  aria-label={`Read guide: ${item.link.label}`}
                >
                  <span>{item.link.label}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
