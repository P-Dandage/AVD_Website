import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  const milestones = [
    { year: "2015", title: "Company Foundation", desc: "Established with the vision to provide high-precision, budget-friendly sheet metal solutions with dedicated service support." },
    { year: "2017", title: "Market Expansion", desc: "Achieved widespread market acceptance, expanding our technical sales & service networks across major industrial hubs." },
    { year: "2019", title: "Advanced Machinery Launch", desc: "Introduced high-performance CNC Press Brake and PEB machinery lines to cater to heavy manufacturing sectors." },
    { year: "2021", title: "Enterprise & Government Trust", desc: "Successfully completed installations for elite corporate enterprises and premier government research sectors." },
    { year: "2023", title: "Large-Scale Innovation", desc: "Delivered ultra-large bed size fiber laser cutting systems, crossing 550+ successful nationwide installations." },
    { year: "2026", title: "Next-Gen Engineering", desc: "Leading the industry with 800+ total installations, cutting-edge automation, and lifelong customer partnerships." }
  ];

  const supportServices = [
    { title: "Installation & Training", desc: "Experienced engineers ensure seamless setup while providing comprehensive training programs to maximize your team's operational productivity." },
    { title: "Ongoing Maintenance", desc: "Routine inspections, scheduled preventative servicing, and expert calibrations to keep your equipment running at peak performance without downtime." },
    { title: "Dedicated Technical Support", desc: "Prompt, knowledgeable troubleshooting assistance via phone and remote diagnostics to keep your plant operations running smoothly." },
    { title: "Genuine Spare Parts", desc: "A comprehensive inventory of genuine spares and consumables ready for quick turnaround dispatch to minimize workflow disruptions." }
  ];

  return (
    <div className="about-page">
      
      {/* --- PAGE HEADER BANNER --- */}
      <section className="about-header-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>About <span>AVD Machine Tools</span></h1>
          <p>Pioneering innovation in precision engineering to shape the future of manufacturing.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>About Us</span>
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE SECTION --- */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <div className="about-intro-text">
            <span className="section-subtitle">Who We Are</span>
            <h2>Excellence in Sheet Metal Solutions & Engineering</h2>
            <p className="lead-text">
              AVD MACHINE TOOLS is built on a foundation of long-term business relationships, standardized industry solutions, and uncompromising equipment reliability. 
            </p>
            <p>
              Founded with over 16 years of collective engineering expertise in the cutting and heavy machinery sector, we specialize in delivering cutting-edge solutions ranging from CNC Fiber Laser Cutting and Plasma Systems to Press Brakes and PEB Machineries. Our core philosophy centers on building value through trust, superior technical support, and user-friendly automated systems.
            </p>
            <div className="about-highlights-grid">
              <div className="highlight-box">
                <h3>800+</h3>
                <p>Successful Installations</p>
              </div>
              <div className="highlight-box">
                <h3>16+ Years</h3>
                <p>Engineering Expertise</p>
              </div>
              <div className="highlight-box">
                <h3>24/7</h3>
                <p>Dedicated Support</p>
              </div>
            </div>
          </div>
          <div className="about-intro-img-wrapper">
            <img src="/assets/Laser.png" alt="AVD Machine Tools Facility" className="about-main-img" />
            <div className="experience-badge">
              <span>Trusted</span>
              <strong>Industry Leader</strong>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR MISSION & VISION --- */}
      <section className="mission-vision-section">
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3>Our Mission</h3>
            <p>To deliver error-free, time-bound solutions and qualitative machinery that exceed customer expectations, driving maximum plant productivity and unmatched return on investment.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3>Our Vision</h3>
            <p>To be the premier trendsetter in industrial cutting and sheet metal solution design across India, recognized for lifelong after-sales support and authentic business relationships.</p>
          </div>
        </div>
      </section>

      {/* --- EXPEDITIONS TO SUCCESS (TIMELINE) --- */}
      <section className="timeline-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Our Journey</span>
          <h2 className="line-heading-text">Expeditions To Success</h2>
        </div>
        <div className="timeline-container">
          {milestones.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPREHENSIVE SUPPORT --- */}
      <section className="support-overview-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Lifecycle Care</span>
          <h2 className="line-heading-text">Comprehensive Customer Support</h2>
          <p className="support-desc-lead">Our relationship commitment extends far beyond the point of sale into lifelong after-sales operational support.</p>
        </div>
        <div className="support-grid">
          {supportServices.map((srv, index) => (
            <div key={index} className="support-card">
              <div className="support-number">0{index + 1}</div>
              <h4>{srv.title}</h4>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="about-cta-section">
        <div className="about-cta-content">
          <h2>Ready to Upgrade Your Manufacturing Capabilities?</h2>
          <p>Get in touch with our engineering experts today for tailored machinery recommendations and quotes.</p>
          <div className="about-cta-buttons">
            <Link to="/contact" className="card-btn solid-btn">Contact Us</Link>
            <Link to="/products" className="card-btn outline-btn-light">Explore Products</Link>
          </div>
        </div>
      </section>

    </div>
  );
}