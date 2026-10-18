import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { Mail, Phone, MessageSquare, ChevronRight, FileText } from 'lucide-react';
import './FloatingContact.css';

export default function FloatingContact({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`floating-contact ${isOpen ? 'expanded' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Toggle Button with Arrow */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fc-btn fc-toggle ${isOpen ? 'open' : ''}`}
        aria-label="Toggle contact menu"
      >
        <ChevronRight size={22} className="arrow-icon" />
      </button>

      {/* Expandable Options Container */}
      <div className="fc-items-container">
        
        {/* 1. Send Inquiry (Opens Quote Modal) */}
        <button 
          onClick={onOpenQuoteModal}
          className="fc-btn fc-inquiry"
          aria-label="Send Inquiry"
        >
          <span className="fc-icon-box">✉️</span>
          <span className="fc-label">Send Inquiry</span>
        </button>

        {/* 2. Email Option */}
        <a 
          href={`mailto:${siteConfig?.email || 'sales@titanlaser.com'}`} 
          className="fc-btn fc-email" 
          aria-label="Email us"
        >
          <span className="fc-icon-box">📧</span>
          <span className="fc-label">Email Us</span>
        </a>

        {/* 3. Phone Call Option */}
        <a 
          href={siteConfig?.phoneHref || 'tel:+919876543210'} 
          className="fc-btn fc-phone" 
          aria-label="Call us"
        >
          <span className="fc-icon-box">📞</span>
          <span className="fc-label">Call Us</span>
        </a>

        {/* 4. WhatsApp Option */}
        <a 
          href={`https://wa.me/${siteConfig?.whatsapp || '919876543210'}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fc-btn fc-wa" 
          aria-label="Chat on WhatsApp"
        >
          <span className="fc-icon-box">💬</span>
          <span className="fc-label">WhatsApp</span>
        </a>

      </div>
    </div>
  );
}