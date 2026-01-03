'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { SITE_CONFIG } from '../constants';
import { CheckCircleIcon, XIcon } from './Icons';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.email}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="portal-success-content">
        <CheckCircleIcon size={72} className="portal-success-icon" />
        <h2 className="portal-success-title">
          <span className="serif-italic">Message</span> Sent.
        </h2>
        <p className="portal-success-body">
          Your inquiry has been received. I will contact you personally within 24 hours.
        </p>
        <button className="btn-gold" style={{ minWidth: '200px' }} onClick={onClose} type="button">
          Return
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="portal-header-group">
        <div>
          <div className="sub-header">Professional Connectivity</div>
          <h2 className="display-title display-title-md" style={{ marginBottom: 0 }}>
            The <span className="champagne-text">Inquiry.</span>
          </h2>
        </div>
        <button
          onClick={onClose}
          className="portal-close-btn"
          aria-label="Close modal"
          type="button"
        >
          <XIcon size={20} />
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-col flex-gap-md"
        style={{ marginTop: 'var(--s-4)' }}
      >
        <input type="hidden" name="_subject" value="New Inquiry from Sitter Journey Portfolio" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value={typeof window !== 'undefined' ? window.location.href : ''}
        />

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full Name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Jane Smith"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="jane@email.com"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Your Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me how I can help..."
            className="form-textarea"
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--s-4)' }}>
          <button
            type="submit"
            className={`btn-gold btn-center ${isSubmitting ? 'opacity-50' : ''}`}
            style={{ minWidth: '240px' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
