import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { ChevronRight } from 'lucide-react';
import './FloatingContact.css';

export default function FloatingContact({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`floating-contact ${isOpen ? 'expanded' : ''}`}>

      {/* Toggle Arrow */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className={`fc-btn fc-toggle ${isOpen ? 'open' : ''}`}
        aria-label={isOpen ? 'Collapse contact menu' : 'Expand contact menu'}
        aria-expanded={isOpen}
      >
        <ChevronRight size={22} className="arrow-icon" />
      </button>

      {/* Contact Options */}
      <div className="fc-items-container">

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${siteConfig?.whatsapp || '919876543210'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fc-btn fc-item fc-wa"
          aria-label="Chat on WhatsApp"
        >
          <span className="fc-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.01 2.014a9.98 9.98 0 0 0-9.98 9.98c0 1.967.545 3.89 1.583 5.578l-1.5 5.485 5.618-1.472a9.986 9.986 0 0 0 4.28 1.055h.004a9.982 9.982 0 0 0 9.98-9.98 9.987 9.987 0 0 0-9.984-9.979v-.001C11.996 2.014 12.003 2.014 12.01 2.014zM12.01 20.354a8.312 8.312 0 0 1-4.24-1.155l-.304-.18-3.153.826.84-3.078-.198-.315A8.324 8.324 0 0 1 3.69 11.994c0-4.62 3.758-8.379 8.384-8.379 2.238 0 4.341.872 5.923 2.457 1.583 1.586 2.455 3.692 2.455 5.93 0 4.62-3.76 8.38-8.384 8.38l-.058-.028zm4.271-5.834c-.234-.117-1.385-.684-1.601-.762-.215-.078-.372-.117-.528.117-.156.234-.606.762-.743.918-.137.156-.274.175-.508.058-.234-.117-.988-.364-1.884-1.164-.696-.62-1.165-1.386-1.301-1.62-.137-.234-.015-.36.102-.477.105-.105.234-.273.351-.409.117-.137.156-.234.234-.391.078-.156.039-.292-.02-.409-.058-.117-.528-1.272-.722-1.742-.189-.459-.382-.397-.528-.405-.137-.007-.294-.007-.45-.007s-.41.058-.625.292c-.215.234-.82 .801-.82 1.953s.84 2.266.957 2.422c.117.156 1.652 2.523 4 3.476.559.227 1.002.363 1.345.465.565.178 1.079.152 1.485.092.454-.067 1.385-.566 1.581-1.113.195-.547.195-1.016.137-1.114-.059-.098-.215-.157-.45-.274z"/>
            </svg>
          </span>
          <span className="fc-label">WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${siteConfig?.email || 'sales@titanlaser.com'}`}
          className="fc-btn fc-item fc-email"
          aria-label="Email us"
        >
          <span className="fc-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/>
            </svg>
          </span>
          <span className="fc-label">Email Us</span>
        </a>

        {/* Catalogue
        <a
          href="/catalogue.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fc-btn fc-item fc-catalogue"
          aria-label="View catalogue"
        >
          <span className="fc-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2.021-.33.056-.436.101v1.071c.148.059.278.077.414.077.414 0 .633-.242.633-.615 0-.414-.242-.634-.611-.634zM14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.769.42-1.229.42-.206 0-.368-.016-.502-.04v1.396H6.626v-4.475c.343-.076.84-.135 1.348-.135.65 0 1.099.141 1.378.414.283.277.425.644.425 1.094 0 .544-.124.964-.279 1.326zm3.435.426c-.343.206-.816.32-1.277.32-.236 0-.42-.023-.556-.053v-2.871c.218-.083.561-.136.934-.136.633 0 1.053.136 1.324.415.284.283.425.673.425 1.141 0 .532-.142.923-.425 1.184h-.425zm3.649-1.921h-1.52v.733h1.348v.674h-1.348v1.277H14.15v-4.475h2.433v.674v1.117zM13.5 9V3.5L18.5 9h-5z"/>
            </svg>
          </span>
          <span className="fc-label">Catalogue</span>
        </a> */}

      </div>
    </div>
  );
}