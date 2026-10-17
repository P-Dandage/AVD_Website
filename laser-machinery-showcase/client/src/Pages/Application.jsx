import React from 'react';
import { Link } from 'react-router-dom';
import './Application.css';

export default function Application() {
  const applicationData = [
    { name: "Sheet Metal Fabrication", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" },
    { name: "Pharmaceutical Industry", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80" },
    { name: "Space & Aerospace", img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80" },
    { name: "Railway Projects", img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80" },
    { name: "Automobile Manufacturing", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80" },
    { name: "Elevator & Escalator", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
    { name: "Electrical Control Panels", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
    { name: "Earth Moving Equipment", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" },
    { name: "Mobile & Tower Manufacturing", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="application-page">
      
      {/* --- PAGE HEADER BANNER --- */}
      <section className="app-header-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Industries We <span>Serve</span></h1>
          <p>Delivering high-performance sheet metal machinery solutions across diverse industrial sectors worldwide.</p>
          
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="app-intro-section">
        <div className="app-intro-container">
          <span className="section-subtitle">Our Core Markets</span>
          <h2>Trusted Solutions for Every Industry</h2>
        </div>
      </section>

      {/* --- APPLICATIONS GRID (Image & Name Only) --- */}
      <section className="app-grid-section">
        <div className="app-grid-container">
          {applicationData.map((app, index) => (
            <div 
              key={index} 
              className="industry-card-Clean"
            >
              {/* Background Image Container for Zoom/Focus Effect */}
              <div 
                className="industry-card-bg"
                style={{ backgroundImage: `url('${app.img}')` }}
              ></div>
              
              {/* Overlay that darkens on hover */}
              <div className="industry-overlay-Clean"></div>
              
              {/* Title positioned at the bottom */}
              <div className="industry-content-Clean">
                <h3>{app.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- UPDATED CTA SECTION --- */}
      <section className="app-cta-section">
        <div className="app-cta-content">
          <h2>Have a Specific Industrial Application?</h2>
          <p>Need a custom solution for your manufacturing process? Connect with our experts today for a consultation or a free quote.</p>
          <div className="cta-buttons-group">
            <Link to="/contact" className="card-btn solid-btn">Connect With Us</Link>
            
          </div>
        </div>
      </section>

    </div>
  );
}