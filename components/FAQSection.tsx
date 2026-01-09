import React from 'react';
import Link from 'next/link';
import { FAQItem } from '../types';
import { ArrowUpRightIcon } from './Icons';

interface FAQSectionProps {
  items: FAQItem[];
}

const FAQSection = ({ items }: FAQSectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="prose-faq">
      <h2>F.A.Q.</h2>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.link?.href || '#'}
          className="faq-item-wrapper"
          aria-label={`Read more about: ${item.question}`}
        >
          <div className="faq-item">
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
            {item.link && (
              <div className="faq-action-row">
                <span>{item.link.label}</span>
                <ArrowUpRightIcon size={14} />
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FAQSection;
