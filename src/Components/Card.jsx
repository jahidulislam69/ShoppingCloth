import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name, price, image, sizes, id}) => {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className="w-[450px] h-[600px] mx-auto cursor-pointer">
        <div className="relative group h-5/6">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
          {/* Size buttons */}
          <div className="absolute bottom-4 left-0 right-0 mx-auto hidden group-hover:flex gap-2 justify-center transition-opacity duration-300">
            {sizes.map((size) => (
              <button 
                key={size}
                className="p-2 bg-gray-900 text-white font-bold h-fit cursor-pointer w-15 hover:bg-gray-400 text-center"
                onClick={(e) => e.preventDefault()}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="font-mt mt-2 h-1/6">
          <h1 className="text-[14px] text-gray-600 sm:text-[16px]">{name}</h1>
          <h1 className="text-[14px] text-gray-600 sm:text-[16px]">BDT. {price}</h1>
        </div>
      </div>
    </Link>
  )
}

export default Card
