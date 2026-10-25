import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import './About.css';

const reasons = [
  { icon: 'check', title: 'Conception To Finalization', desc: 'We recommend the machine your material and volume need, not the most expensive model.' },
  { icon: 'award', title: 'Customised Solutions', desc: 'Reliable equipment chosen for the shop floor, tailored to your exact manufacturing needs.' },
  { icon: 'zap', title: 'Advanced Technology', desc: 'Cutting-edge automation and user-friendly controls so your operators are productive quickly.' },
  { icon: 'tool', title: 'One-stop Shop', desc: 'From commissioning and hands-on training to genuine spares, we handle everything.' }
];

const steps = [
  { title: 'Understand Your Job', desc: 'We study your materials, thickness, volumes, and budget before suggesting anything.' },
  { title: 'Get Instant Quote', desc: 'A clear, transparent recommendation and quote with the right machine for the work.' },
  { title: 'Install & Train', desc: 'Our engineers commission the machine and train your operators on site.' },
  { title: 'Support For Life', desc: 'Scheduled maintenance, remote help, and genuine spares for as long as you run it.' }
];

const industries = [
  'Automotive Components', 'Construction & PEB', 'Elevators & Lifts', 
  'Kitchen Equipment', 'HVAC & Ducting', 'Electrical Panels', 
  'Agricultural Equipment', 'General Fabrication'
];

const supportServices = [
  { title: "Installation & Training", desc: "Experienced engineers ensure seamless setup while providing comprehensive training." },
  { title: "Ongoing Maintenance", desc: "Routine inspections and calibrations to keep equipment running at peak performance." },
  { title: "Dedicated Tech Support", desc: "Prompt troubleshooting via phone and remote diagnostics, 24/7." },
  { title: "Genuine Spare Parts", desc: "A comprehensive inventory of genuine spares ready for quick dispatch." }
];

const ease = [0.22, 1, 0.36, 1];

const iconPaths = {
  check: (<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></>),
  award: (<><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></>),
  zap: (<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />),
  tool: (<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />),
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

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

export default function About() {
  return (
    <div className="about-page">
      
      {/* 1. DARK IMAGE BACKGROUND HEADER BANNER */}
      <section className="about-hero-banner">
        <div className="hero-overlay"></div>
        <Reveal className="hero-content" y={20}>
          <h1>About Us</h1>
        </Reveal>
      </section>

      {/* 2. COMPANY PROFILE */}
      <section className="clean-intro-section">
        <div className="clean-intro-container">
          
          <Reveal className="clean-intro-header">
            <span className="red-subtitle">Company Profile</span>
            <h2><span>World Class Machinery</span> For Sheet Metal Industry</h2>
          </Reveal>
          
          <Reveal className="clean-intro-body" delay={0.2}>
            <p className="lead-text">
              AVD MACHINE TOOLS is built on a foundation of providing superior customer support and service for over years.
            </p>
            <p className="secondary-text">
We have been serving the country with world-class sheet metal machinery and solutions, delivering high quality and performance. The sectors we serve include automobiles, electrical panel manufacturers, heavy sheet metal fabricators, earth-moving equipment, and the defence industry, etc. We will continue to support the industry and the community to build a New India with quick after-sales and service support.            </p>
            
            <div className="clean-stats-row">
              <div className="stat-item">
                {/* <h3>800+</h3>
                <span>Installations</span>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <span>Years Exp.</span> */}
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <span>Assurance</span>
              </div>
            </div>
          </Reveal>
          
        </div>
      </section>

      {/* 3. WHY US? */}
      <section className="abt-section abt-soft">
        <div className="abt-container">
          <Reveal className="abt-head">
            <h2 className="abt-h2">Why Us?</h2>
            <p>Reliable infrastructure. Quality reports with each consignment. On-time delivery.</p>
          </Reveal>

          <div className="abt-why-grid">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) * 0.1}>
                <article className="abt-why">
                  <span className="abt-icon"><Icon name={r.icon} /></span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS / HOW WE WORK */}
      <section className="abt-section">
        <div className="abt-container">
          <Reveal className="abt-head">
            <h2 className="abt-h2">Ramp-Up Your Production Today</h2>
            <p>A simple, streamlined process to get your factory floor moving.</p>
          </Reveal>

          <ol className="abt-steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.1}>
                  <div className="abt-step">
                    <span className="abt-step-no">{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. FOUNDER'S DESK (COMPACT & TOP ALIGNED) */}
      {/* <section className="founder-fade-section">
        <div className="founder-fade-container">
          
          <motion.div 
            className="founder-img-wrapper"
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: ease }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
              alt="Ravi Dandage - Founder" 
              className="founder-fade-img" 
            />
            <div className="founder-simple-badge">
              <h4>Ravi Dandage</h4>
              <p>Founder & MD</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="founder-fade-text"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: ease }}
          >
            <span className="red-subtitle">Leadership</span>
            <h2>Forging Partnerships That Drive Industrial Growth</h2>
            <div className="founder-clean-quote">
              "We don't measure our success by the machines we sell, but by the operational downtime we prevent and the production efficiency we boost for our clients."
            </div>
            <p>
              When AVD Machine Tools was established, the vision was simple yet ambitious: to bridge the gap between high-end industrial automation and accessibility for local manufacturers. 
            </p>
            <p>
              Our foundation for success has been providing superior customer support and service. This level of service makes AVD a world-class organization and keeps customers coming back again and again.
            </p>
          </motion.div>

        </div>
      </section> */}

      {/* 6. CAPABILITIES */}
      {/* <section className="abt-section abt-soft">
        <div className="abt-container">
          <Reveal className="abt-head">
            <span className="red-subtitle">Capabilities</span>
            <h2 className="abt-h2">Comprehensive Service Support</h2>
            <p>We stand by our machinery with lifelong operational backing.</p>
          </Reveal>

          <div className="capabilities-grid">
            {supportServices.map((srv, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="capability-card">
                <div className="cap-icon-header">
                  <span className="cap-dot"></span>
                  <h4>{srv.title}</h4>
                </div>
                <p>{srv.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* 7. INDUSTRIES */}
      <section className="abt-section">
        <div className="abt-container">
          <Reveal className="abt-head">
            <span className="red-subtitle">Our Reach</span>
            <h2 className="abt-h2">Industries We Serve</h2>
            <p>Our automated systems work wherever precision sheet metal is required.</p>
          </Reveal>
          
          <div className="industries-pill-container">
            {industries.map((name, idx) => (
              <Reveal key={name} delay={idx * 0.05} y={15}>
                <div className="industry-pill">
                  {name}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DARK INDUSTRIAL CTA SECTION */}
      <section className="app-cta-section">
        <Reveal className="app-cta-content" y={40}>
          <h2>Ready to Scale Up Your Production?</h2>
          <p>Get your instant quote and let us help you from prototyping to mass production.</p>
          <div className="cta-buttons-group">
            <Link to="/contact" className="card-btn solid-btn">
              Get a Quote
            </Link>
            <Link to="/contact" className="card-btn outline-btn-light">
              Connect With Us
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}