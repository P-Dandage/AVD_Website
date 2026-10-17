import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../components/Products';

import './Home.css';

export default function Home() {
  // --- Simple Slideshow Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // Your machine images
  const slideImages = [
    "Laser.png",
    "Plasma.png",,
    "Press.png",
    "Shearing.png"
  ];

//Application Marquee Logic
  React.useEffect(() => {
    const container = document.getElementById('appMarqueeContainer');
    if (!container) return;

    let animationFrameId;
    const handleScrollFocus = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      const cards = container.querySelectorAll('.dynamic-focus-card');
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < 170) {
          card.classList.add('center-focus');
        } else {
          card.classList.remove('center-focus');
        }
      });
      animationFrameId = requestAnimationFrame(handleScrollFocus);
    };

    animationFrameId = requestAnimationFrame(handleScrollFocus);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Auto-play timer (changes image every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(timer);
  }, [slideImages.length]);

  // Manual Navigation Controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  return (
    <div className="home-container">
      
      {/* --- 1. HERO IMAGE SLIDESHOW --- */}
      <section className="hero-slider">
        {slideImages.map((imagePath, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            
            {/* The Full-Size Background Image (No text or dark overlay) */}
            <div 
              className="slide-bg" 
              style={{ backgroundImage: `url('${imagePath}')` }}
            ></div>

          </div>
        ))}

        {/* Small Navigation Arrows */}
        <button className="slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">
          &#10094;
        </button>
        <button className="slider-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">
          &#10095;
        </button>

        {/* Indicator Dots */}
        <div className="slider-dots">
          {slideImages.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="about-section">
    
        <div className="about-text">
          <span className="section-subtitle">Discover Our Company</span>
          <h2>Welcome to <span>AVD Machine Tools</span></h2>
          <p>
            AVD MACHINE TOOLS is a premier provider of cutting-edge machinery for the sheet metal industry. We stand at the forefront of innovation, delivering solutions focused on Precision, Performance, and Productivity.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              High-Precision Engineering
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Robust & Durable Build
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Expert Support Team
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Customized Solutions
            </div>
          </div>
          <Link to="/about" className="slide-btn" style={{ marginTop: '10px' }}>Read More</Link>
        </div>
        <div className="about-image-container">
          {/* Using the laser machine image as a placeholder for the about section */}
          <img src="Plasma.png" alt="AVD Machine Tools Facility" className="about-image" />
        </div>
      </section>

      {/* --- 3. OUR PRODUCTS (Infinite Ticker with Clickable Arrows) --- */}
      <section className="simple-products-section">
        <div className="section-title-wrapper">
          <div className="line-heading">
            <span className="heading-line"></span>
            <h2 className="line-heading-text">OUR PRODUCTS</h2>
            <span className="heading-line"></span>
          </div>
          <span className="section-subtitle" style={{ marginTop: '10px' }}>What We Offer</span>
        </div>
        
        <div className="product-carousel-wrapper">
          <button 
            className="carousel-arrow product-left-arrow" 
            onClick={() => {
              const container = document.getElementById('productTrack');
              if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
            }}
            aria-label="Scroll Left"
          >
            &#10094;
          </button>

          <div className="product-carousel-container" id="productTrack">
            <div className="product-carousel-track">
              {/* Triplicated array for seamless infinite right-to-left scrolling */}
              {[...productsData, ...productsData, ...productsData].map((product, index) => (
                <div 
                  key={`${product.id}-${index}`} 
                  className="full-img-card"
                  style={{ backgroundImage: `url('${product.image}')` }}
                >
                  <div className="card-overlay-gradient"></div>
                  
                  <div className="card-bottom-content">
                    <h3 className="full-card-title">{product.name}</h3>
                    
                    <div className="full-card-actions">
                      <Link to="/products" className="card-btn outline-btn-light">Read More</Link>
                      <Link to={`/contact?inquiry=${product.name}`} className="card-btn solid-btn">Get Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-arrow product-right-arrow" 
            onClick={() => {
              const container = document.getElementById('productTrack');
              if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            aria-label="Scroll Right"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US --- */}
      <section className="why-choose-section">
        <div className="section-title-wrapper">
          <div className="line-heading">
            <span className="heading-line"></span>
            <h2 className="line-heading-text">WHY <span>CHOOSE AVD</span></h2>
            <span className="heading-line"></span>
          </div>
          <p className="why-subtitle-desc">
            AVD Machine Tools provides sheet-metal machinery solutions focused on precision, performance and productivity.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h4>PRECISION</h4>
            <p>Accurate machine solutions engineered with micro-tolerance control to deliver flawless cuts, bends, and absolute repeatability.</p>
          </div>
          
          <div className="why-card">
            <div className="why-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h4>PERFORMANCE</h4>
            <p>Reliable production capability built to withstand heavy-duty, 24/7 industrial manufacturing cycles without compromising output.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h4>PRODUCTIVITY</h4>
            <p>Efficient manufacturing solutions designed to accelerate cycle times, minimize raw material waste, and maximize plant ROI.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h4>SUPPORT</h4>
            <p>Customer-focused service backed by expert technical engineers ready to assist with installation, training, and maintenance.</p>
          </div>
        </div>
      </section>

      {/* --- 5. APPLICATION SECTION (Auto-Scrolling Marquee) --- */}
      <section className="application-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Industries We Serve</span>
          <h2 className="section-title">Application Areas</h2>
        </div>
        
        <div className="marquee-container" id="appMarqueeContainer">
          <div className="marquee-track">
            {/* We duplicate the array to create a seamless infinite loop */}
            {[
              { name: "Sheet Metal Fabrication", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" },
              { name: "Pharma Industry", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80" },
              { name: "Space Industry", img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80" },
              { name: "Railway Project", img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80" },
              { name: "Automobile", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80" },
              { name: "Elevator", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
              { name: "Electrical Control Panel", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
              { name: "Earth Moving Equipment", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" },
              { name: "Mobile & Tower Manufacturing", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80" },
              // Duplicate set for seamless looping
              { name: "Sheet Metal Fabrication", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" },
              { name: "Pharma Industry", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80" },
              { name: "Space Industry", img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80" },
              { name: "Railway Project", img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80" },
              { name: "Automobile", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80" },
              { name: "Elevator", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
              { name: "Electrical Control Panel", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
              { name: "Earth Moving Equipment", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" },
              { name: "Mobile & Tower Manufacturing", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80" }
            ].map((app, index) => (
              <div 
                key={index} 
                className="app-card dynamic-focus-card"
                style={{ backgroundImage: `url('${app.img}')` }}
              >
                <div className="app-overlay"></div>
                <h4>{app.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}