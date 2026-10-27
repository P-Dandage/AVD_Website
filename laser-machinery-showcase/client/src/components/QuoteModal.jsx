import React, { useState, useEffect } from 'react';
import './QuoteModal.css';
import logo from '../assets/logo2.png';

export default function QuoteModal({ isOpen, onClose, initialRequirement = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    city: '',
    phone: '',
    requirement: ''
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset everything whenever the modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        city: '',
        phone: '',
        requirement: initialRequirement
      });
    }
  }, [isOpen, initialRequirement]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ==========================================
    // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
    // ==========================================
  //  pd URL 
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwb4GvNAOatFUCvXVWsSch_hBKKVdFEKwbbaL2OWK9YOdXvk5_qxwUM-ciBLntuH6As2w/exec";
    // const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyCGal4DyFJkpKLg-WkzDLFZ9_I3sJlwejYfH1o4DgHo7oL5tLtfuj64wx1L4unUAsLTQ/exec";
    const payload = {
      formType: "Request a Quote Modal",
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
        setIsSubmitted(true); // Switch to exact Success Modal structure
      })
      .catch((err) => {
        console.error("Error saving quote to sheet:", err);
        setLoading(false);
        setIsSubmitted(true); // Still show success so user isn't blocked
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-container ${isSubmitted ? 'success-container-override' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">&times;</button>
        
        {isSubmitted ? (
          /* --- EXACT SUCCESS MODAL STRUCTURE & THEME --- */
          <div className="success-modal-content">
            <div className="success-icon-box">✓</div>
            
            <h2>Thank You!</h2>
            <p className="success-subtitle">Request a Quote</p>
            <p className="success-desc">Fill out the details below and our team will get back to you shortly.</p>
            
            <div className="success-highlight-box">
              Your quote inquiry has been submitted successfully.
            </div>

            <button className="success-close-btn" onClick={onClose}>
              Close Window
            </button>
          </div>
        ) : (
          /* --- REGULAR QUOTE FORM --- */
          <>
            <div className="modal-header">
              <img src={logo} alt="AVD Machine Tools" className="modal-logo" />
              <h2>Request a Quote</h2>
              <p>Fill out the details below and our team will get back to you shortly.</p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" required placeholder="e.g. Rahul Sharma" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Company Name *</label>
                  <input type="text" name="company" required placeholder="e.g. Apex Industries" value={formData.company} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" name="city" required placeholder="e.g. Pune" value={formData.city} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row form-row-single">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" required placeholder="rahul@apex.com" value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row form-row-single">
                <div className="form-group">
                  <label>Requirement *</label>
                  <textarea name="requirement" required rows="3" placeholder="Describe the machine or service you need" value={formData.requirement} onChange={handleChange} />
                </div>
              </div>

              <button type="submit" className="modal-submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Now'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}