import React, { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Navbar.css';

const categories = [
  { name: 'For You', icon: '🏠', active: true },
  { name: 'Fashion', icon: '👗' },
  { name: 'Mobiles', icon: '📱' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Home', icon: '🛋️' },
  { name: 'Appliances', icon: '🏠' },
  { name: 'Toys', icon: '🧸' },
  { name: 'Food', icon: '🍔' },
  { name: 'Auto', icon: '🚗' },
  { name: '2 Wheelers', icon: '🏍️' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Books', icon: '📚' },
  { name: 'Furniture', icon: '🪑' },
  { name: 'Flights', icon: '✈️' },
  { name: 'Travel', icon: '🏨' },
];

const Navbar = () => {
  const [active, setActive] = useState('For You');
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += dir === 'left' ? -200 : 200;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <button className="navbar__arrow navbar__arrow--left" onClick={() => scroll('left')}>
          <FiChevronLeft size={20} />
        </button>

        <div className="navbar__items" ref={scrollRef}>
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`navbar__item ${active === cat.name ? 'navbar__item--active' : ''}`}
              onClick={() => setActive(cat.name)}
            >
              <div className="navbar__icon">
                <span className="navbar__emoji">{cat.icon}</span>
              </div>
              <span className="navbar__label">{cat.name}</span>
            </div>
          ))}
        </div>

        <button className="navbar__arrow navbar__arrow--right" onClick={() => scroll('right')}>
          <FiChevronRight size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
