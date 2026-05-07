import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSlider.css';

const ProductSlider = ({ title, products, viewAll, bgColor }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += dir === 'left' ? -600 : 600;
    }
  };

  return (
    <div className="product-slider" style={{ background: bgColor || '#fff' }}>
      <div className="product-slider__header">
        <h2 className="product-slider__title">{title}</h2>
        {viewAll && (
          <button className="product-slider__viewall">View All</button>
        )}
      </div>

      <div className="product-slider__wrapper">
        <button className="slider__arrow slider__arrow--left" onClick={() => scroll('left')}>
          <FiChevronLeft size={22} />
        </button>

        <div className="product-slider__track" ref={scrollRef}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="slider__arrow slider__arrow--right" onClick={() => scroll('right')}>
          <FiChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
