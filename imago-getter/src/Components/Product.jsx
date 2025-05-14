import React, { useRef } from 'react';
import '../Style/Product.css'; 

const Product = () => {
  const productImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    url: `https://picsum.photos/200/400?random=${i + 1}`
  }));

  const sliderRef = useRef(null);
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isMouseDown = true;
    sliderRef.current.classList.add('active');
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isMouseDown = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isMouseDown = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Easy. Effective. Always on hand. Delightfully scented.
      </h2>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {productImages.map((image) => (
          <div
            key={image.id}
            className="relative w-[250px] h-[400px] flex-shrink-0 rounded-lg overflow-hidden group shadow-lg mx-2"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
