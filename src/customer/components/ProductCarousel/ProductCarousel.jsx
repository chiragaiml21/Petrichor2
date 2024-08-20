import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductCard from "../ProductCard/ProductCard";
import Products from "./data.json";
import { useNavigate } from 'react-router-dom';
import './style.css';

const PrevArrow = ({ onClick }) => (
  <button
    className="custom-arrow prev-arrow"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <span className="arrow-icon">←</span>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="custom-arrow next-arrow"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <span className="arrow-icon">→</span>
  </button>
);

const ProductCarousel = () => {
  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const items = Products.products.map((product, index) => (
    <div key={index} className="item" onClick={() => handleCardClick(product)}>
      <ProductCard
        title={product.title}
        description={product.description}
        price={product.price}
        imageUrl={product.imageUrl}
        link={product.link}
      />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h2>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          renderPrevButton={() => <PrevArrow />}
          renderNextButton={() => <NextArrow />}
          paddingLeft={10}
          paddingRight={10}
          infinite={true}
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
