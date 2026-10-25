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
    { name: "Swapnil Electricals Private Limited Nashik", sector: "Control Panel and Solar System", logo:"Swapnil.png" },
    { name: "Shreenath Engineering Nashik", sector: "Heavy Sheet Metal Fabricator", logo:"Shreenath.png" },
    { name: "Sasa Enggetech Pune", sector: "Automobile", logo:"Sasa.png" },
    { name: "MB Electrical Pune", sector: "Electrica Control Panel", logo:"" },
    { name: "Saish Laser tech Pune", sector: "Laser Cutting Bending and Heavy Fabrication", logo:"" },
    { name: "Unique Laser Pune", sector: "Job Work in Laser Cutting and Bending", logo:"" },
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
          <span className="section-subtitle">Our Few Esteemed Clients</span>
          {/* <h2>Driven by Trust, Built on Long-Term Relationships</h2>
          <p>
            At AVD Machine Tools, our success is measured by the success and trust of our clients. From elite government aerospace sectors to major private manufacturing enterprises, our high-precision machinery and dedicated after-sales support empower nationwide industries to achieve peak operational excellence.
          </p> */}
        </Reveal>
      </section>

      {/* --- CLIENTS GRID SECTION --- */}
      <section className="client-grid-section">
        <div className="client-grid-container">
          {clientList.map((client, index) => (
            <Reveal key={index} delay={(index % 4) * 0.1}>
              <div className="client-card">
                <div className="client-logo-box">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="client-logo" style={{ width: '100%', height: '100%' }} />
                  ) : (
                    <span className="client-logo-text">{client.name}</span>
                  )}
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