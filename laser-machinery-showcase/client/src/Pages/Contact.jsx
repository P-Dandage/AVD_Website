import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import SuccessModal from '../components/SuccessModal';
import './Contact.css';
import { siteConfig } from '../siteConfig';

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

export default function Contact() {
  const [searchParams] = useSearchParams();
  const inquiryProduct = searchParams.get('inquiry');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    city: '',
    phone: '',
    requirement: ''
  });

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inquiryProduct) {
      setFormData(prev => ({
        ...prev,
        requirement: `Inquiry regarding machine: ${decodeURIComponent(inquiryProduct)}`
      }));
    }
  }, [inquiryProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //Pd url// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwb4GvNAOatFUCvXVWsSch_hBKKVdFEKwbbaL2OWK9YOdXvk5_qxwUM-ciBLntuH6As2w/exec";
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyCGal4DyFJkpKLg-WkzDLFZ9_I3sJlwejYfH1o4DgHo7oL5tLtfuj64wx1L4unUAsLTQ/exec";

    const payload = {
      formType: "Contact Us Page",
      name: formData.name,
      company: formData.company,
      email: formData.email,
      city: formData.city,
      phone: formData.phone,
      requirement: formData.requirement
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(() => {
        setLoading(false);
        setIsSuccessOpen(true);
        setFormData({ name: '', company: '', email: '', city: '', phone: '', requirement: '' });
      })
      .catch((err) => {
        console.error("Error saving to sheet:", err);
        setLoading(false);
        alert(`Submission failed. Please try calling us directly at ${siteConfig.phone}.`);
      });
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* Hero Banner Section */}
      <div className="contact-hero-banner">
        <Reveal className="contact-hero-overlay" y={20}>
          <h1>Contact Us</h1>
          <p>Get in touch with our engineering team for industrial machinery, quotes, and support.</p>
        </Reveal>
      </div>

      <div className="contact-main-container">
        
        <div className="contact-grid-top">
          
          {/* Left Info Column */}
          <div className="contact-info-column">
            <Reveal className="contact-info-header">
              <h2>Get In Touch</h2>
              <p>Feel free to contact us via phone or email anytime if you have any questions or need help!</p>
            </Reveal>

            <Reveal className="contact-detail-block" delay={0.1}>
              <div className="contact-icon-box">📍</div>
              <div>
                <h3>Address</h3>
                <p>{siteConfig.address}</p>
              </div>
            </Reveal>

            {/* <Reveal className="contact-detail-block" delay={0.2}>
              <div className="contact-icon-box">🏭</div>
              <div>
                <h3>Factory Address</h3>
                <p>{siteConfig.factoryAddress}</p>
              </div>
            </Reveal> */}

            <Reveal className="contact-detail-block" delay={0.3}>
              <div className="contact-icon-box">📞</div>
              <div>
                <h3>Phone</h3>
                <p>{siteConfig.phone}</p>
              </div>
            </Reveal>

            <Reveal className="contact-detail-block" delay={0.4}>
              <div className="contact-icon-box">✉️</div>
              <div>
                <h3>Email</h3>
                <p>{siteConfig.email}</p>
              </div>
            </Reveal>

            <Reveal className="branches-tag-box" delay={0.5}>
              <strong>Our Branches:</strong>
              <span >Main Branch: Pune <div> Other Branches: Mumbai ,Nashik , Nagpur , Aurangabad , Bangalore </div></span>
            </Reveal>
          </div>

          {/* Right Form Column */}
          <Reveal className="contact-form-column" delay={0.2} y={40}>
            <h2 className="contact-form-title">Contact <span>Us</span></h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-field-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
              </div>

              <div className="form-field-group">
                <label htmlFor="company">Company Name *</label>
                <input type="text" id="company" name="company" placeholder="Enter company name" required value={formData.company} onChange={handleChange} />
              </div>

              <div className="form-field-group">
                <label htmlFor="email">E-Mail Address *</label>
                <input type="email" id="email" name="email" placeholder="Enter email address" required value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-field-group">
                <label htmlFor="city">City *</label>
                <input type="text" id="city" name="city" placeholder="Enter city" required value={formData.city} onChange={handleChange} />
              </div>

              <div className="form-field-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required value={formData.phone} onChange={handleChange} />
              </div>

              <div className="form-field-group">
                <label htmlFor="requirement">Requirement *</label>
                <textarea id="requirement" name="requirement" rows="3" placeholder="Specify your machine requirements..." required value={formData.requirement} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="contact-submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Now!'}
              </button>
            </form>
          </Reveal>

        </div>
      </div>

      {/* Render Animated Success Modal */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </div>
  );
}