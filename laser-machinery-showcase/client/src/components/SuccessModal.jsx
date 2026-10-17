import React from 'react';
import './SuccessModal.css';

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="success-modal-overlay" onClick={onClose}>
      <div className="success-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="success-modal-close" onClick={onClose}>&times;</button>
        
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
    </div>
  );
}