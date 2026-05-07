import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart, FaStar } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/200x200/f0f0f0/999999?text=${encodeURIComponent(product.name)}`;
          }}
        />
        <button
          className={`product-card__wishlist ${wishlist ? 'product-card__wishlist--active' : ''}`}
          onClick={(e) => { e.preventDefault(); setWishlist(!wishlist); }}
        >
          {wishlist ? <FaHeart size={16} color="#ff4545" /> : <FiHeart size={16} />}
        </button>
        {discount > 0 && (
          <span className="product-card__discount">{discount}% off</span>
        )}
      </div>

      <div className="product-card__info">
        <p className="product-card__name">{product.name}</p>

        {product.rating && (
          <div className="product-card__rating">
            <span className="rating__badge">
              <FaStar size={10} />
              {product.rating}
            </span>
            <span className="rating__count">({product.ratingCount?.toLocaleString()})</span>
          </div>
        )}

        <div className="product-card__price">
          <span className="price__current">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="price__original">₹{product.originalPrice.toLocaleString()}</span>
          )}
          {discount > 0 && (
            <span className="price__discount">{discount}% off</span>
          )}
        </div>

        {product.offer && (
          <p className="product-card__offer">{product.offer}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
