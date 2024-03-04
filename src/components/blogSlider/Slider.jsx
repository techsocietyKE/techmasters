'use client'
import React, { useState } from 'react'
const images = [
    'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://via.placeholder.com/600x300',
  ];
  
const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    const handlePrev = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  return (
    <div>
         <div className="relative w-full max-w-md mx-auto mt-8">
      <div className="overflow-hidden rounded-md">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`slide-${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Next and Previous Arrows */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full focus:outline-none"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full focus:outline-none"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
    </div>
  )
}

export default Slider