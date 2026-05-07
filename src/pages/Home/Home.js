import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Banner from '../../components/Banner/Banner';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import DealCard from '../../components/DealCard/DealCard';
import Footer from '../../components/Footer/Footer';
import {
  inDemandProducts,
  topMobiles,
  electronics,
  fashionProducts,
  homeAppliances,
  dealsOfDay,
} from '../../data/products';
import './Home.css';

const Home = () => {
  const dealRef = useRef(null);

  const scrollDeals = (dir) => {
    if (dealRef.current) {
      dealRef.current.scrollLeft += dir === 'left' ? -300 : 300;
    }
  };

  return (
    <main className="home">
      <div className="home__container">
        {/* Banner Carousel */}
        <Banner />

        {/* Deals of the Day */}
        <section className="home__section deals-section">
          <div className="deals-section__header">
            <div className="deals-section__title-wrap">
              <h2 className="deals-section__title">Deals of the Day</h2>
              <span className="deals-section__timer">
                <span className="timer__icon">⏰</span>
                <span className="timer__text">Ends in 10:23:45</span>
              </span>
            </div>
            <button className="deals-section__viewall">View All</button>
          </div>
          <div className="deals-section__wrapper">
            <button className="deals__arrow deals__arrow--left" onClick={() => scrollDeals('left')}>
              <FiChevronLeft size={20} />
            </button>
            <div className="deals-section__track" ref={dealRef}>
              {dealsOfDay.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
            <button className="deals__arrow deals__arrow--right" onClick={() => scrollDeals('right')}>
              <FiChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* In Demand */}
        <section className="home__section">
          <ProductSlider
            title="In Demand 🔥"
            products={inDemandProducts}
            viewAll={true}
            bgColor="#fff"
          />
        </section>

        {/* Ad Banner */}
        <div className="home__ad-banner">
          <div className="ad-banner__left" style={{ background: 'linear-gradient(135deg,#1565c0,#2196f3)' }}>
            <span className="ad-banner__tag">ELECTRONICS MEGA SALE</span>
            <h3>Up to 80% Off on Laptops</h3>
            <p>Top brands: Dell, HP, Lenovo</p>
            <button className="ad-banner__btn">Shop Now</button>
          </div>
          <div className="ad-banner__right" style={{ background: 'linear-gradient(135deg,#6a1b9a,#ab47bc)' }}>
            <span className="ad-banner__tag">FASHION WEEK</span>
            <h3>Min 50% Off on Clothing</h3>
            <p>Nike, Adidas, Puma & More</p>
            <button className="ad-banner__btn">Explore</button>
          </div>
        </div>

        {/* Top Mobiles */}
        <section className="home__section">
          <ProductSlider
            title="Best Selling Mobiles 📱"
            products={topMobiles}
            viewAll={true}
            bgColor="#fff"
          />
        </section>

        {/* Category Grid */}
        <section className="home__section category-grid-section">
          <h2 className="category-grid__title">Shop by Category</h2>
          <div className="category-grid">
            {[
              { name: 'Mobiles & Accessories', emoji: '📱', bg: '#e3f2fd', color: '#1565c0' },
              { name: 'Fashion & Lifestyle', emoji: '👗', bg: '#fce4ec', color: '#c62828' },
              { name: 'Electronics & Gadgets', emoji: '💻', bg: '#e8f5e9', color: '#2e7d32' },
              { name: 'Home & Furniture', emoji: '🛋️', bg: '#fff8e1', color: '#f57f17' },
              { name: 'Beauty & Personal Care', emoji: '💄', bg: '#f3e5f5', color: '#6a1b9a' },
              { name: 'Sports & Outdoors', emoji: '⚽', bg: '#e0f7fa', color: '#006064' },
              { name: 'Books & Learning', emoji: '📚', bg: '#fff3e0', color: '#e65100' },
              { name: 'Toys & Baby', emoji: '🧸', bg: '#fbe9e7', color: '#bf360c' },
            ].map((cat) => (
              <div
                key={cat.name}
                className="category-grid__item"
                style={{ background: cat.bg }}
              >
                <span className="category-grid__emoji">{cat.emoji}</span>
                <span className="category-grid__name" style={{ color: cat.color }}>{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Electronics */}
        <section className="home__section">
          <ProductSlider
            title="Top Electronics 🔌"
            products={electronics}
            viewAll={true}
            bgColor="#fff"
          />
        </section>

        {/* Wide Ad Banner */}
        <div className="home__wide-banner" style={{ background: 'linear-gradient(120deg,#ff6f00,#ffa000,#ffca28)' }}>
          <div className="wide-banner__content">
            <span className="wide-banner__tag">SUPER SAVINGS</span>
            <h2>Big Billion Days Sale</h2>
            <p>Biggest sale of the year — Up to 90% off across all categories!</p>
            <button className="wide-banner__btn">Shop Now</button>
          </div>
          <div className="wide-banner__emoji">🛍️</div>
        </div>

        {/* Fashion */}
        <section className="home__section">
          <ProductSlider
            title="Trending Fashion 👗"
            products={fashionProducts}
            viewAll={true}
            bgColor="#fff"
          />
        </section>

        {/* Home & Appliances */}
        <section className="home__section">
          <ProductSlider
            title="Home & Appliances 🏠"
            products={homeAppliances}
            viewAll={true}
            bgColor="#fff"
          />
        </section>

        {/* Features Strip */}
        <section className="home__features">
          {[
            { icon: '🚚', title: 'Free Delivery', desc: 'On orders over ₹499' },
            { icon: '🔄', title: 'Easy Returns', desc: '7-day hassle-free returns' },
            { icon: '🔒', title: '100% Secure', desc: 'Safe & encrypted payments' },
            { icon: '🎧', title: '24/7 Support', desc: 'Always here to help you' },
            { icon: '💳', title: 'No Cost EMI', desc: 'On select products' },
          ].map((f) => (
            <div key={f.title} className="home__feature-item">
              <span className="feature__icon">{f.icon}</span>
              <div>
                <p className="feature__title">{f.title}</p>
                <p className="feature__desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
