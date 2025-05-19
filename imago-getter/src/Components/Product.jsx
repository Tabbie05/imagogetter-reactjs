import React, { useRef, useState } from 'react'
import { products } from '../db/database'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../index.css'

const Product = () => {
  const scrollRef = useRef(null)
  const [bgColor, setBgColor] = useState('bg-gray-100')

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })

  return (
    <div className={`w-full rounded-4xl min-h-screen flex flex-col justify-start py-20 transition-colors duration-500 ${bgColor} relative`}>
      {/* Heading */}
      <div className="px-8 mb-8">
        <h2 className="text-4xl font-bold leading-tight text-left text-gray-900">
          Safe. Effective. Essential.
          Disinfection for a Healthier Tomorrow.
        </h2>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:scale-110 transition z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:scale-110 transition z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Carousel */}
      <div ref={scrollRef} className="w-full overflow-x-auto px-8 hide-scrollbar">
        <div className="flex gap-6 w-max">
          {products.map((product, index) => {
            const isEven = index % 2 === 0
            const cardColor = isEven ? 'bg-green-200' : 'bg-blue-200'
            const sectionColor = isEven ? 'bg-green-300' : 'bg-blue-300'

            return (
              <div
                key={index}
                className="group w-64 h-96 perspective rounded-xl shrink-0"
                onMouseEnter={() => setBgColor(sectionColor)}
                onMouseLeave={() => setBgColor('bg-gray-100')}
              >
                <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d rotate-card group-hover:rotate-y-180">
                  
                  {/* Front */}
                  <div
                    className={`absolute w-full h-full backface-hidden rounded-xl shadow-xl ${cardColor}`}
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  {/* Back */}
                  <div
                    className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl text-white p-4 flex flex-col justify-center items-center ${cardColor}`}
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    <h3 className="text-xl font-bold mb-2 text-center">{product.name}</h3>
                    <p className="text-sm mb-1 text-center">{product.description}</p>
                    <p className="text-sm mb-1">Size: {product.size}</p>
                    <p className="text-sm mb-4">Use: {product.fieldOfApplication}</p>

                    {/* Button */}
                    <button
                      className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg transform transition duration-300 hover:scale-105 active:bg-blue-600"
                    >
                      Request a Quote
                    </button>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product
