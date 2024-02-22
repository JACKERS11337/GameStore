import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import slidesData from "../../data/slides.json";
import { CartContext } from "../../context/cart";
import { useState, useContext } from "react";
import productsData from "../../data/products.json";

import "swiper/scss";
import "swiper/scss/pagination";
import "./style.scss";

export const Slider = () => {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const handleAddCart = (product) => {
    setLoading(true);
    setTimeout(() => {
      addToCart(product);
      setLoading(false);
    }, 1000);
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, stopOnLastSlide: false }}
      speed={1000}
    >
      {slidesData.map((slide) => (
        <>
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.name} />
            <div className="slider-description">
              <h4>{slide.name}</h4>
              <p>{slide.description}</p>
              <p>{slide.price}$</p>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};
