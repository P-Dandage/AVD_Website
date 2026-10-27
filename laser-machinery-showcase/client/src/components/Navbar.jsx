
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo2.png';

export default function Navbar({ onOpenQuoteModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getNavClass = (path) => {
    return location.pathname === path ? "nav-item active" : "nav-item";
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Structured product categories with sub-items
  const productCategories = [
    {
      name: "Fiber Laser Cutting Machine",
      category: "fiber-laser",
      subItems: [
        "Single Table Economical  Fiber Laser Cutting Machine",
        "Fiber Laser Cutting Machine with Autopilot changer",
        "Heavy duity Laser Cutting Machine ",
      
      ]
    },
     {
      name: "CNC Laser Tube Cutting Machine",
      category: "fiber-laser-tube",
      subItems: []
    },
    {
      name: "CNC Plasma Cutting Machine",
      category: "plasma",
      subItems: [
        "Gantry Type",
        "Table Type",
        "Portable Type"
      ]
    },
    {
      name: "CNC / NC Press Brake",
      category: "press-brake",
      subItems: [
        "CNC Press Brake",
        "NC Press Brake",
        "Tandem & Heavy Tonnage Press Brake Machine"
      ]
    },
    {
      name: "Shearing Machine",
      category: "shearing",
      subItems: []
    },
    {
      name: "Hydraulic Press",
      category: "hydraulic-press",
      subItems: []
    },
    {
      name: "Spares & Consumables",
      category: "spares",
      subItems: []
    }
  ];

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-wrapper">
          
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="AVD Machine Tools" />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="navbar-links">
            <Link to="/" className={getNavClass("/")}>Home</Link>
            <Link to="/about" className={getNavClass("/about")}>About Us</Link>
            
            {/* --- PRODUCTS WITH MULTI-LEVEL DROPDOWN --- */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => {
                setDropdownOpen(false);
                setActiveSubmenu(null);
              }}
            >
              <Link to="/products" className={`${getNavClass("/products")} dropdown-toggle-link`}>
                Products
                <svg 
                  className={`dropdown-arrow ${dropdownOpen ? 'rotate' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>

              {dropdownOpen && (
                <div className="nav-dropdown-menu">
                  {productCategories.map((cat, index) => (
                    <div 
                      key={index}
                      className="dropdown-item-container"
                      onMouseEnter={() => setActiveSubmenu(index)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link 
                        to={`/products?category=${cat.category}`} 
                        className="dropdown-item"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {cat.name}
                        {cat.subItems.length > 0 && <span className="submenu-arrow">&#9658;</span>}
                      </Link>

                      {/* Secondary Sub-Dropdown Menu */}
                      {cat.subItems.length > 0 && activeSubmenu === index && (
                        <div className="nav-sub-dropdown-menu">
                          {cat.subItems.map((sub, subIndex) => (
                            <Link 
                              key={subIndex}
                              to={`/products?category=${cat.category}&machine=${encodeURIComponent(sub)}`}
                              className="dropdown-sub-item"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/application" className={getNavClass("/application")}>Application</Link>
            <Link to="/gallery" className={getNavClass("/gallery")}>Gallery</Link>
            <Link to="/client" className={getNavClass("/client")}>Client</Link>
            <Link to="/contact" className={getNavClass("/contact")}>Contact Us</Link>
          </div>

          {/* Request A Quote Button Triggering Modal */}
          <div className="navbar-action">
            <button className="quote-btn" onClick={() => onOpenQuoteModal()}>
              REQUEST A QUOTE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Dropdown */}
        <div className={`mobile-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={getNavClass("/")} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className={getNavClass("/about")} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/products" className={getNavClass("/products")} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link to="/application" className={getNavClass("/application")} onClick={() => setIsMobileMenuOpen(false)}>Application</Link>
          <Link to="/gallery" className={getNavClass("/gallery")} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/client" className={getNavClass("/client")} onClick={() => setIsMobileMenuOpen(false)}>Clients</Link>
          <Link to="/contact" className={getNavClass("/contact")} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          <button className="quote-btn" onClick={() => { setIsMobileMenuOpen(false); onOpenQuoteModal(); }}>
            REQUEST A QUOTE
          </button>
        </div>
      </nav>

    </>
  );
}