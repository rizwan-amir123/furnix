"use client"
import React, { useState, useEffect } from 'react';

const CarouselCustom = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Auto-slide to the next image
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Adjust the interval as needed (e.g., every 3 seconds)

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src="https://drive.google.com/uc?export=view&id=1pkEWWge9Dox7v1QUfTRv4cDIG1wulaF8" alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
      

      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded" onClick={handlePrevSlide}>
        Previous
      </button>

      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded" onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
};

export default CarouselCustom;