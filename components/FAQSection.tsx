import React from 'react';
import Link from 'next/link';
import { FAQItem } from '../types';
import { ArrowUpRightIcon } from './Icons';

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subHeader?: string;
  showReadAll?: boolean;
}

const FAQSection = ({
  items,
  title = 'Frequently Asked Questions',
  subHeader = 'Common Queries',
  showReadAll = false,
}: FAQSectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="prose-faq" aria-label="Frequently Asked Questions">
      <div className="faq-header-wrap">
        <span className="sub-header">{subHeader}</span>
        <h2 className="faq-title">{title}</h2>
      </div>

      <div className="faq-list">
        {items.map((item) => (
          <article key={item.id} className="faq-card">
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
            {item.link && (
              <div className="faq-action-row">
                <Link
                  href={item.link.href}
                  className="faq-action-link"
                  aria-label={`Read guide: ${item.link.label}`}
                >
                  <span>{item.link.label}</span>
                  <ArrowUpRightIcon size={14} className="faq-action-icon" />
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>

      {showReadAll && (
        <div className="faq-footer">
          <Link href="/faq" className="faq-read-all-btn">
            <span>View All Common Questions</span>
            <ArrowUpRightIcon size={14} />
          </Link>
        </div>
      )}
    </section>
  );
};

export default FAQSection;
