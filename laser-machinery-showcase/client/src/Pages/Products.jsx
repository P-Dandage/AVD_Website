import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { catalogData } from '../components/productsCatalog';
import './Products.css';

// Reusable animation configuration
const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, y = 30, className, once = true }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, amount: 0.1 }}
      transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Products({ onOpenQuoteModal }) {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <Reveal y={-10}>
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
          </Reveal>

          <div className="product-detail-grid">
            <Reveal className="product-detail-img-box" delay={0.1}>
              <img
                src={currentProductToShow.image}
                alt={currentProductToShow.name}
                width="800"
                height="600"
              />
            </Reveal>

            <Reveal className="product-detail-info" delay={0.2}>
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
            </Reveal>
          </div>
        </div>
      ) : (
        /* ---------- CATALOG VIEW ---------- */
        <div className="products-catalog-wrapper">
          <Reveal className="products-catalog-header" y={20}>
            <h1>{categoryTitle || (selectedCategory ? 'Our Products' : 'All Products Catalog')}</h1>
            <p>
              Explore high-precision machinery engineered for superior industrial
              performance.
            </p>
          </Reveal>

          {/* ---------- CATEGORY FILTER INDICATORS ---------- */}
          <Reveal className="product-category-filters" delay={0.1} y={15}>
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
          </Reveal>

          <div className="products-grid">
            {displayedProducts.map((product, index) => (
              /* Notice the delay calculation to stagger the cards row by row */
              <Reveal key={product.id} delay={(index % 4) * 0.1} y={30}>
                <article className="product-card">
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
                      <button
                        type="button"
                        onClick={() => onOpenQuoteModal(product.name)}
                        className="product-inquiry-btn"
                      >
                        Inquiry
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}