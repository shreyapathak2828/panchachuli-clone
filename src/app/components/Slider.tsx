'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  "/categories/hero-1.jpeg",
  "/categories/hero-2.jpeg",
  "/categories/hero-3.jpeg",
  "/categories/hero-4.jpeg",
  "/categories/hero-5.jpeg",
];


export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">

      <div className="relative h-[80vh] transition-transform duration-500 ease-in-out">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

     
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
