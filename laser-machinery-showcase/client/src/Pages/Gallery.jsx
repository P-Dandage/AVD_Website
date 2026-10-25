import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import './Gallery.css';

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, y = 30, className, once = true }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <div className="gallery-page">
      
      {/* --- PAGE HEADER BANNER --- */}
      <section className="gallery-header-banner">
        <div className="banner-overlay"></div>
        <Reveal className="banner-content" y={20}>
          <h1>Company <span>Gallery & Videos</span></h1>
          <p>Explore our high-precision sheet metal machinery in action through our official showcase.</p>
        </Reveal>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="gallery-intro-section">
        <Reveal className="gallery-intro-container">
          <span className="section-subtitle">Visual Showcase</span>
          <h2>AVD Machinery In Action</h2>
          <p>
            Watch our comprehensive video overview showcasing our diverse range of CNC Press Brakes, Shearing Machines, Plasma Cutters, and advanced fabrication solutions engineered for industry leaders.
          </p>
        </Reveal>
      </section>

      {/* --- YOUTUBE VIDEO SECTION --- */}
      <section className="gallery-video-section">
        <div className="gallery-video-container">
          <Reveal className="video-wrapper" y={40}>
            <iframe 
              src="https://www.youtube.com/embed/TNCuH2On-Z4" 
              title="AVD Sheet Metal Machinery Showcase" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </Reveal>
          
          <Reveal className="video-info-box" delay={0.2} y={30}>
            <h3>AVD Sheet Metal Machinery Overview</h3>
            <p>Featuring our flagship CNC Synchro Press Brakes, hydraulic shearing systems, and heavy-duty industrial setup trusted across India.</p>
          </Reveal>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="app-cta-section">
        <Reveal className="app-cta-content" y={40}>
          <h2>Ready to Equip Your Plant?</h2>
          <p>Get in touch with our engineering team for tailored machinery solutions and instant quotes.</p>
          <div className="cta-buttons-group">
            <Link to="/contact" className="card-btn solid-btn">Get a Quote</Link>
            <Link to="/products" className="card-btn outline-btn-light">Explore Products</Link>
          </div>
        </Reveal>
      </section>

    </div>
  );
}