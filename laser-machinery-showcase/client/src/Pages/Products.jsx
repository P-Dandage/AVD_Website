import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { catalogData } from '../components/productsCatalog';
import './Products.css';

export default function Products() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const selectedMachine = searchParams.get('machine');

  const [detailedProduct, setDetailedProduct] = useState(null);

  useEffect(() => {
    setDetailedProduct(null);
  }, [selectedCategory, selectedMachine]);

  const activeMachineFromUrl = selectedMachine 
    ? catalogData.find(item => item.name.toLowerCase() === decodeURIComponent(selectedMachine).toLowerCase()) 
    : null;

  const displayedProducts = selectedCategory 
    ? catalogData.filter(item => item.category === selectedCategory) 
    : catalogData;

  const currentProductToShow = activeMachineFromUrl || detailedProduct;

  // Dynamic SEO Title Hardening
  useEffect(() => {
    if (currentProductToShow) {
      document.title = `${currentProductToShow.name} | AVD Machine Tools`;
    } else if (selectedCategory) {
      const cat = catalogData.find(c => c.category === selectedCategory);
      document.title = `${cat ? cat.categoryName : 'Products'} | AVD Machine Tools`;
    } else {
      document.title = 'Industrial Machinery Catalog | AVD Machine Tools';
    }
  }, [currentProductToShow, selectedCategory]);

  return (
    <div className="products-page-container">
      {currentProductToShow ? (
        <div className="product-detail-view-wrapper">
          <button className="back-btn" onClick={() => {
            setDetailedProduct(null);
            navigate('/products');
          }}>
            &larr; Back to Products
          </button>
          
          <div className="product-detail-grid">
            <div className="product-detail-img-box">
              <img src={currentProductToShow.image} alt={currentProductToShow.name} />
            </div>
            <div className="product-detail-info">
              <span className="product-detail-category">{currentProductToShow.categoryName}</span>
              <h1 className="product-detail-title">{currentProductToShow.name}</h1>
              <p className="product-detail-desc">{currentProductToShow.description}</p>
              
              <div className="product-specs-box">
                <h3>Technical Specifications:</h3>
                <p>{currentProductToShow.specifications}</p>
              </div>

              <Link to={`/contact?inquiry=${encodeURIComponent(currentProductToShow.name)}`} className="product-enquire-btn">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="products-catalog-wrapper">
          <div className="products-catalog-header">
            <h1>
              {selectedCategory 
                ? catalogData.find(c => c.category === selectedCategory)?.categoryName || 'Our Products' 
                : 'All Products Catalog'}
            </h1>
            <p>Explore high-precision machinery engineered for superior industrial performance.</p>
          </div>

          <div className="products-grid">
            {displayedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-img-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-card-content">
                  <div className="product-card-text-group">
                    <span className="product-card-cat-label">{product.categoryName}</span>
                    <h3 className="product-card-title">{product.name}</h3>
                  </div>
                  
                  <div className="product-card-actions">
                    <button onClick={() => setDetailedProduct(product)} className="product-view-more-btn">
                      View More
                    </button>
                    <Link to={`/contact?inquiry=${encodeURIComponent(product.name)}`} className="product-inquiry-btn">
                      Inquiry
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}