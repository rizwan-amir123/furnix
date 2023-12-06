// src/HorizontalScrollableList.js
"use client"
import React, { useRef } from 'react';


const HorizontalScrollableList = () => {
  const scrollRef = useRef(null);
  const items= ["absa", "dfdf", "dfdfd", "dsadasd", "fbfb", "fsfsdfsd", "dfgfdgdf", "dsfsdfs"];
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className="flex items-center space-x-4 overflow-hidden relative">
      <button onClick={handleScrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2">
        {"<"}
      </button>
      <div ref={scrollRef} className="flex space-x-4 overflow-x-auto">
        {items.map((item, index) => (
          <div key={index} className="flex-none w-48 bg-gray-300 p-4">

            {item}
          </div>
        ))}
      </div>
      <button onClick={handleScrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2">
        {">"}
      </button>
    </div>
  );
};

export default HorizontalScrollableList;