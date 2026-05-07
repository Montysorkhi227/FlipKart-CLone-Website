import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiChevronDown, FiMapPin } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loginOpen, setLoginOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo Section */}
        <div className="header__logo">
          <div className="logo__main">
            <a href="/">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-52dff9.svg"
                alt="Flipkart"
                className="logo__img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo__fallback" style={{ display: 'none' }}>
                <span className="logo__text">
                  <span className="logo__f">f</span>lipkart
                </span>
                <span className="logo__tagline">
                  Explore <span className="logo__plus">Plus</span>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus_icon-86e1bdd.png"
                    alt="plus"
                    style={{ width: 10, marginLeft: 2 }}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </span>
              </div>
            </a>
          </div>
          <div className="logo__travel">
            <span className="travel__plane">✈</span>
            <span>Travel</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="header__search">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search__input"
          />
          <button className="search__btn">
            <FiSearch size={22} color="#2874f0" />
          </button>
        </div>

        {/* Right Section */}
        <div className="header__right">
          {/* Location */}
          <div className="header__location">
            <FiMapPin size={14} color="#fff" />
            <span className="location__text">
              <span className="location__label">Deliver to</span>
              <span className="location__link">Select Location</span>
            </span>
          </div>

          {/* Login */}
          <div className="header__login" onClick={() => setLoginOpen(!loginOpen)}>
            <button className="login__btn">
              <FaUser size={14} />
              <span>Login</span>
              <FiChevronDown size={14} />
            </button>
            {loginOpen && (
              <div className="login__dropdown">
                <div className="login__dropdown-top">
                  <span>New customer?</span>
                  <a href="#" className="login__signup">Sign Up</a>
                </div>
                <div className="login__dropdown-divider" />
                <ul className="login__dropdown-list">
                  <li><a href="#">My Profile</a></li>
                  <li><a href="#">Super Coins</a></li>
                  <li><a href="#">Flipkart Plus Zone</a></li>
                  <li><a href="#">Orders</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">My Chats</a></li>
                  <li><a href="#">Coupons</a></li>
                  <li><a href="#">Gift Cards</a></li>
                  <li><a href="#">Notifications</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* More */}
          <div className="header__more" onClick={() => setMoreOpen(!moreOpen)}>
            <span>More</span>
            <FiChevronDown size={14} />
            {moreOpen && (
              <div className="more__dropdown">
                <ul>
                  <li><a href="#">Notification Preferences</a></li>
                  <li><a href="#">Sell on Flipkart</a></li>
                  <li><a href="#">Advertise</a></li>
                  <li><a href="#">Download App</a></li>
                  <li><a href="#">Gift Cards</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
          <a href="#" className="header__cart">
            <FiShoppingCart size={20} />
            <span className="cart__text">Cart</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
