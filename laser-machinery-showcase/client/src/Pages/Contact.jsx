import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SuccessModal from '../components/SuccessModal';
import './Contact.css';
import { siteConfig } from '../siteConfig';

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

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwb4GvNAOatFUCvXVWsSch_hBKKVdFEKwbbaL2OWK9YOdXvk5_qxwUM-ciBLntuH6As2w/exec";

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
        // Clear form fields after successful submit
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
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>Get in touch with our engineering team for industrial machinery, quotes, and support.</p>
        </div>
      </div>

      <div className="contact-main-container">
        
        <div className="contact-grid-top">
          
          {/* Left Info Column */}
          <div className="contact-info-column">
            <div className="contact-info-header">
              <h2>Get In Touch</h2>
              <p>Feel free to contact us via phone or email anytime if you have any questions or need help!</p>
            </div>

            <div className="contact-detail-block">
              <div className="contact-icon-box">📍</div>
              <div>
                <h3>Address</h3>
                <p>{siteConfig.address}</p>
              </div>
            </div>

            <div className="contact-detail-block">
              <div className="contact-icon-box">🏭</div>
              <div>
                <h3>Factory Address</h3>
                <p>{siteConfig.factoryAddress}</p>
              </div>
            </div>

            <div className="contact-detail-block">
              <div className="contact-icon-box">📞</div>
              <div>
                <h3>Phone</h3>
                <p>{siteConfig.phone}</p>
              </div>
            </div>

            <div className="contact-detail-block">
              <div className="contact-icon-box">✉️</div>
              <div>
                <h3>Email</h3>
                <p>{siteConfig.email}</p>
              </div>
            </div>

            <div className="branches-tag-box">
              <strong>Our Branches:</strong>
              <span>Pune </span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-column">
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
          </div>

        </div>

        {/* Bottom Departments Grid */}
        {/* <div className="contact-departments-grid">
          <div className="dept-card">
            <h4>For Inquiry</h4>
            <div className="dept-info-row"><span>📞</span> {siteConfig.phone}</div>
            <div className="dept-info-row"><span>✉️</span> {siteConfig.email}</div>
          </div>
          <div className="dept-card">
            <h4>For Service</h4>
            <div className="dept-info-row"><span>📞</span> {siteConfig.phone}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.servicePhones[1]}</div>
            <div className="dept-info-row"><span>✉️</span> {siteConfig.serviceEmail}</div>
          </div>
          <div className="dept-card">
            <h4>For Spares</h4>
            <div className="dept-info-row"><span>📞</span> {siteConfig.sparesPhone}</div>
            <div className="dept-info-row"><span>✉️</span> spares.adk@gmail.com</div>
          </div>
        </div> */}

      </div>

      {/* Render Animated Success Modal */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </div>
  );
}