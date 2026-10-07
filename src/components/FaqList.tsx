'use client';

import { useState } from 'react';

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqList({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="k666-faq-list" role="list">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        const id = `k666-faq-${index}`;
        return (
          <div
            key={item.q}
            role="listitem"
            className={`k666-faq-item${isOpen ? ' is-open' : ''}`}
          >
            <button
              type="button"
              id={`${id}-btn`}
              className="k666-faq-trigger"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="k666-faq-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="k666-faq-q">{item.q}</span>
              <span className="k666-faq-toggle" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
            <div
              id={id}
              role="region"
              aria-labelledby={`${id}-btn`}
              className={`k666-faq-panel ${
                isOpen ? 'k666-faq-panel--open' : ''
              }`}
            >
              <div className="k666-faq-panel-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
