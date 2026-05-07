import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Banner.css';

const banners = [
  {
    id: 1,
    bgColor: '#e53935',
    title: 'Power Tools From ₹999',
    subtitle: 'BOSCH, iBELL & more',
    badge: 'SASA LELE',
    tag: 'Starts on 6th May · Early Access',
    bank: '10% Instant Discount on SBI Card',
    img: 'https://rukminim2.flixcart.com/fk-p-flap/844/140/image/581f65fdfddce04e.jpg?q=50',
    fallbackBg: 'linear-gradient(135deg, #c62828 0%, #e53935 50%, #ef9a9a 100%)',
    emoji: '🔧',
  },
  {
    id: 2,
    bgColor: '#1565c0',
    title: 'vivo X300 FE',
    subtitle: 'Pre-book now',
    badge: 'Snapdragon 8 Gen 5',
    tag: '50MP ZEISS Telephoto Camera',
    bank: '10% Instant Discount on SBI Card',
    img: 'https://rukminim2.flixcart.com/fk-p-flap/844/140/image/9cc1e9588aca5e7b.jpg?q=50',
    fallbackBg: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #42a5f5 100%)',
    emoji: '📱',
  },
  {
    id: 3,
    bgColor: '#263238',
    title: 'Samsung Galaxy S25 FE',
    subtitle: 'Just ₹43,999',
    badge: 'SAMSUNG',
    tag: 'Shoot every night in clear detail',
    bank: '10% Instant Discount on SBI Card',
    img: 'https://rukminim2.flixcart.com/fk-p-flap/844/140/image/7b3f55e72ee87d5a.jpg?q=50',
    fallbackBg: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3f51b5 100%)',
    emoji: '📷',
  },
  {
    id: 4,
    bgColor: '#2e7d32',
    title: 'Big Savings on Laptops',
    subtitle: 'Up to 40% Off',
    badge: 'ELECTRONICS',
    tag: 'Dell, HP, Lenovo & More',
    bank: 'No Cost EMI Available',
    img: '',
    fallbackBg: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #66bb6a 100%)',
    emoji: '💻',
  },
  {
    id: 5,
    bgColor: '#6a1b9a',
    title: 'Fashion Sale',
    subtitle: 'Min 50% Off',
    badge: 'FASHION WEEK',
    tag: 'Top Brands & Styles',
    bank: 'Free Delivery on orders ₹499+',
    img: '',
    fallbackBg: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #ce93d8 100%)',
    emoji: '👗',
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const total = banners.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const b = banners[current];

  return (
    <div className="banner">
      <div className="banner__slider">
        <button className="banner__arrow banner__arrow--left" onClick={prev}>
          <FiChevronLeft size={28} />
        </button>

        <div
          className="banner__slide"
          style={{ background: b.fallbackBg }}
        >
          {/* Left Content */}
          <div className="banner__content">
            <div className="banner__badge">{b.badge}</div>
            <h2 className="banner__title">{b.title}</h2>
            <p className="banner__subtitle">{b.subtitle}</p>
            <p className="banner__tag">{b.tag}</p>
            <div className="banner__bank">
              <span className="bank__logo">SBI</span>
              <span>{b.bank}</span>
            </div>
          </div>

          {/* Center / Image */}
          <div className="banner__image-wrap">
            {b.img ? (
              <img
                src={b.img}
                alt={b.title}
                className="banner__img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div
              className="banner__emoji-fallback"
              style={{ display: b.img ? 'none' : 'flex' }}
            >
              <span className="banner__big-emoji">{b.emoji}</span>
            </div>
          </div>
        </div>

        <button className="banner__arrow banner__arrow--right" onClick={next}>
          <FiChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="banner__dots">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`banner__dot ${i === current ? 'banner__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
