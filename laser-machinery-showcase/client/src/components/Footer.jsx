import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo2.png';
import { siteConfig } from '../siteConfig';

export default function Footer() {
  // Custom slow and smooth scroll animation
  const handleScrollTop = () => {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 1200; // Duration in milliseconds (higher = slower, smoother scroll)

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        
        {/* Column 1: Brand & Socials */}
        <div className="footer-brand">
          <div className="footer-logo-container">
            <img src={logo} alt="AVD Machine Tools" />
          </div>
          <p className="footer-about-text">
            Our goal is to offer broad capabilities, competitive pricing, exceptional quality and outstanding service to each and every customer.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-box" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="social-box" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="social-box" aria-label="X">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://youtu.be/TNCuH2On-Z4?si=xe2qc19H9QP7FiWb" className="social-box" aria-label="YouTube" target="_blank">
              <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links-col">
          <Link to="/about" className="footer-link" onClick={handleScrollTop}>About Us</Link>
          <Link to="/products" className="footer-link" onClick={handleScrollTop}>Our Products</Link>
          <Link to="/application" className="footer-link" onClick={handleScrollTop}>Application</Link>
          <Link to="/gallery" className="footer-link" onClick={handleScrollTop}>Gallery</Link>
          <Link to="/client" className="footer-link" onClick={handleScrollTop}>Clients</Link>
          <Link to="/contact" className="footer-link" onClick={handleScrollTop}>Contact Us</Link>
        </div>

        {/* Column 3: Products Category Links */}
        <div className="footer-links-col">
          <Link to="/products?category=fiber-laser" className="footer-link" onClick={handleScrollTop}>Fiber Laser Cutting Machine</Link>
          <Link to="/products?category=plasma" className="footer-link" onClick={handleScrollTop}>CNC Plasma Cutting Machine</Link>
          <Link to="/products?category=press-brake" className="footer-link" onClick={handleScrollTop}>CNC Press Brake</Link>
          <Link to="/products?category=shearing" className="footer-link" onClick={handleScrollTop}>Shearing Machine</Link>
          <Link to="/products?category=hydraulic-press" className="footer-link" onClick={handleScrollTop}>Hydraulic Press</Link>
          <Link to="/products?category=spares" className="footer-link" onClick={handleScrollTop}>Spares & Consumables</Link>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-contact-col">
          <div className="contact-row">
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div className="contact-text">
              <strong>Reg. Office:</strong>
              <span>Sector No. 16, Plot No. 35,</span>
              <span>Tulasi Aryan Apt. 202,</span>
              <span>Chinchwad, Pune - 411 019</span>
            </div>
          </div>
          
          <div className="contact-row">
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <div className="contact-text">
              <span>{siteConfig.phone}</span>
            </div>
          </div>

          <div className="contact-row">
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <div className="contact-text">
              <a href={siteConfig.emailHref}>{siteConfig.email}</a>
            </div>
          </div>
        </div>

      </div>

      {/* Branches Section */}
      <div className="footer-branches">
        <div className="branches-title">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Our Branches
        </div>
        <div className="branches-list">
           Main Branch: Pune  <div>Other Branches: Mumbai ,Nashik , Nagpur , Aurangabad , Bangalore </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-wrapper">
          <span>Copyright © 2026 AVD Machine Tools. All rights reserved.</span>
        </div>
        
        {/* Custom Slow Smooth Scroll to Top Button */}
        <button className="back-to-top" onClick={handleScrollTop} aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
}