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
        <div key={item.id} className="faq-item">
          <strong>{item.question}</strong>
          <p>{item.answer}</p>
          {item.link && (
            <Link href={item.link.href} className="faq-action-link">
              <span>{item.link.label}</span>
              <ArrowUpRightIcon size={14} />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
