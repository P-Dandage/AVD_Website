import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { catalogData } from '../components/productsCatalog';
import './Products.css';

export default function Products() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedCategory = searchParams.get('category');
  const selectedMachine = searchParams.get('machine');

  const [detailedProduct, setDetailedProduct] = useState(null);

  // Reset the detail view whenever the URL filters change
  useEffect(() => {
    setDetailedProduct(null);
  }, [selectedCategory, selectedMachine]);

  const activeMachineFromUrl = selectedMachine
    ? catalogData.find(
        (item) =>
          item.name.toLowerCase() === decodeURIComponent(selectedMachine).toLowerCase()
      )
    : null;

  const displayedProducts = selectedCategory
    ? catalogData.filter((item) => item.category === selectedCategory)
    : catalogData;

  const currentProductToShow = activeMachineFromUrl || detailedProduct;

  const categoryTitle = selectedCategory
    ? catalogData.find((c) => c.category === selectedCategory)?.categoryName
    : null;

  // Dynamically extract unique categories from catalogData for the filter pills
  const uniqueCategories = Array.from(new Set(catalogData.map(item => item.category)))
    .map(categoryKey => {
      const product = catalogData.find(item => item.category === categoryKey);
      return {
        id: categoryKey,
        name: product.categoryName
      };
    });

  // Open a product's detail view and bring it into view
  const openDetails = (product) => {
    setDetailedProduct(product);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Dynamic page title
  useEffect(() => {
    if (currentProductToShow) {
      document.title = `${currentProductToShow.name} | AVD Machine Tools`;
    } else if (selectedCategory) {
      document.title = `${categoryTitle || 'Products'} | AVD Machine Tools`;
    } else {
      document.title = 'Industrial Machinery Catalog | AVD Machine Tools';
    }
  }, [currentProductToShow, selectedCategory, categoryTitle]);

  return (
    <div className="products-page-container">
      {currentProductToShow ? (
        /* ---------- DETAIL VIEW ---------- */
        <div className="product-detail-view-wrapper">
          <button
            type="button"
            className="back-btn"
            onClick={() => {
              setDetailedProduct(null);
              // Keeps the category filter active if they go back
              navigate(selectedCategory ? `/products?category=${selectedCategory}` : '/products');
            }}
          >
            &larr; Back to Products
          </button>

          <div className="product-detail-grid">
            <div className="product-detail-img-box">
              <img
                src={currentProductToShow.image}
                alt={currentProductToShow.name}
                width="800"
                height="600"
              />
            </div>

            <div className="product-detail-info">
              <span className="product-detail-category">
                {currentProductToShow.categoryName}
              </span>
              <h1 className="product-detail-title">{currentProductToShow.name}</h1>
              <p className="product-detail-desc">{currentProductToShow.description}</p>

              <div className="product-specs-box">
                <h3>Technical Specifications:</h3>
                <p>{currentProductToShow.specifications}</p>
              </div>

              <Link
                to={`/contact?inquiry=${encodeURIComponent(currentProductToShow.name)}`}
                className="product-enquire-btn"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* ---------- CATALOG VIEW ---------- */
        <div className="products-catalog-wrapper">
          <div className="products-catalog-header">
            <h1>{categoryTitle || (selectedCategory ? 'Our Products' : 'All Products Catalog')}</h1>
            <p>
              Explore high-precision machinery engineered for superior industrial
              performance.
            </p>
          </div>

          {/* ---------- CATEGORY FILTER INDICATORS ---------- */}
          <div className="product-category-filters">
            <button
              type="button"
              className={`category-pill ${!selectedCategory ? 'active' : ''}`}
              onClick={() => navigate('/products')}
            >
              All Products
            </button>
            {uniqueCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => navigate(`/products?category=${cat.id}`)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {displayedProducts.map((product) => (
              <article key={product.id} className="product-card">
                {/* Big machine image (tap to open details) */}
                <button
                  type="button"
                  className="product-card-img-container"
                  onClick={() => openDetails(product)}
                  aria-label={`View details of ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                </button>

                {/* Details */}
                <div className="product-card-content">
                  <div className="product-card-text-group">
                    <span className="product-card-cat-label">{product.categoryName}</span>
                    <h3 className="product-card-title">{product.name}</h3>
                  </div>

                  <div className="product-card-actions">
                    <button
                      type="button"
                      onClick={() => openDetails(product)}
                      className="product-view-more-btn"
                    >
                      View More
                    </button>
                    <Link
                      to={`/contact?inquiry=${encodeURIComponent(product.name)}`}
                      className="product-inquiry-btn"
                    >
                      Inquiry
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}