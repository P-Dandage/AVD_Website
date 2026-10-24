import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import './Client.css';

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

export default function Client() {
  const clientList = [
    { name: "ISRO (Indian Space Research Organisation)", sector: "Space & Aerospace", logoText: "ISRO" },
    { name: "L&T Heavy Engineering", sector: "Infrastructure & Defense", logoText: "L&T" },
    { name: "Tata Advanced Systems", sector: "Defense & Aerospace", logoText: "TATA" },
    { name: "Bharat Forge", sector: "Forging & Automotive", logoText: "BHARAT FORGE" },
    { name: "Mahindra & Mahindra", sector: "Automotive", logoText: "Mahindra" },
    { name: "Godrej & Boyce", sector: "Industrial Manufacturing", logoText: "Godrej" },
    { name: "Thermax Limited", sector: "Energy & Environment", logoText: "THERMAX" },
    { name: "Kirloskar Brothers", sector: "Pumps & Valves", logoText: "KIRLOSKAR" },
    { name: "BHEL (Bharat Heavy Electricals)", sector: "Power & Heavy Industry", logoText: "BHEL" },
    { name: "Jindal Steel & Power", sector: "Steel & Metallurgy", logoText: "JINDAL" },
    { name: "Tata Motors", sector: "Automobile & EV", logoText: "TATA MOTORS" },
    { name: "Schindler Elevators", sector: "Vertical Transportation", logoText: "Schindler" }
  ];

  return (
    <div className="client-page">
      
      {/* --- PAGE HEADER BANNER (Simple Black Background) --- */}
      <section className="client-header-banner">
        <Reveal className="banner-content" y={20}>
          <h1>Our Valued <span>Clients</span></h1>
          <p>Proudly partnering with industry leaders, government enterprises, and manufacturing pioneers across India.</p>
        </Reveal>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="client-intro-section">
        <Reveal className="client-intro-container">
          <span className="section-subtitle">Trusted Partnerships</span>
          <h2>Driven by Trust, Built on Long-Term Relationships</h2>
          <p>
            At AVD Machine Tools, our success is measured by the success and trust of our clients. From elite government aerospace sectors to major private manufacturing enterprises, our high-precision machinery and dedicated after-sales support empower nationwide industries to achieve peak operational excellence.
          </p>
        </Reveal>
      </section>

      {/* --- CLIENTS GRID SECTION --- */}
      <section className="client-grid-section">
        <div className="client-grid-container">
          {clientList.map((client, index) => (
            <Reveal key={index} delay={(index % 4) * 0.1}>
              <div className="client-card">
                <div className="client-logo-box">
                  <span className="client-logo-text">{client.logoText}</span>
                </div>
                <div className="client-info">
                  <h3>{client.name}</h3>
                  <span className="client-sector">{client.sector}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}