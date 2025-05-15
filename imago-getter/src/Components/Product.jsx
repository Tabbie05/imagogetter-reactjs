import React from 'react'
import { products } from '../db/database'
import '../index.css' // Tailwind + 3D flip styles

const Product = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start py-20 bg-gray-100">
      {/* Heading aligned with cards (px-6) */}
      <div className="px-8 mb-8">
        <h2 className="text-3xl font-bold leading-tight text-left">
          Safe. Effective. Essential.
          Disinfection for a Healthier Tomorrow.
        </h2>
      </div>

      {/* Card carousel */}
      <div className="w-full overflow-x-auto px-8 hide-scrollbar">
        <div className="flex gap-6 w-max">
          {products.map((product, index) => {
            const bgColor = index % 2 === 0 ? 'bg-green-200' : 'bg-blue-200'

            return (
              <div key={index} className="group w-64 h-96 perspective rounded-xl shrink-0">
                <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d rotate-card group-hover:rotate-y-180">

                  {/* Front */}
                  <div
                    className={`absolute w-full h-full backface-hidden rounded-xl shadow-xl ${bgColor}`}
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  {/* Back */}
                  <div
                    className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl text-white p-4 flex flex-col justify-center items-center ${bgColor}`}
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
                    <p className="text-sm">Use: {product.fieldOfApplication}</p>
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
