import React from 'react';
import { SITE_CONFIG } from '../constants';

export const privacyPolicyContent = (
  <>
    <p className="prose-lead">
      Your privacy is important to me. This policy explains how Sitter Journey collects, uses, and
      protects your information when you visit this site.
    </p>

    <h2>1. Information Collected</h2>
    <p>
      I collect information you voluntarily provide through the{' '}
      <strong>Contact Inquiry Form</strong>, which includes your name, email address, and any
      message content.
    </p>

    <h2>2. Cookies and Tracking</h2>
    <p>
      This site may use standard cookies to improve user experience. Additionally, third-party
      services like <strong>Google Analytics</strong> may collect anonymous data about your visit.
    </p>

    <h2>3. Resource and Affiliate Links</h2>
    <p>
      I use resource and affiliate links (e.g., TrustedHousesitters). If you click these links, the
      third-party provider may use cookies to track your purchase for the purpose of assigning a
      resource credit.
    </p>

    <div className="prose-accent-box">
      <h3>Contact</h3>
      <p>
        If you have questions regarding this policy, please reach out via the contact form or
        directly at <strong>{SITE_CONFIG.email}</strong>.
      </p>
    </div>
  </>
);
