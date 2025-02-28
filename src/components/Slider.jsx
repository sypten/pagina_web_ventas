import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400",
      alt: "Slide 1 - Stationery",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400",
      alt: "Slide 2 - Office Supplies",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400",
      alt: "Slide 3 - Paper",
    },
  ];
  

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const goToSlide = (index) => {
    setCurrentSlide((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={slide.id}
          >
            {index === currentSlide && (
              <img src={slide.image} alt={slide.alt} />
            )}
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
