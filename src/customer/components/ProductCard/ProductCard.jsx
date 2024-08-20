import React from 'react';

const ProductCard = ({ title, description, price, imageUrl}) => (
  <div className="group block w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        style={{ width: '100%', height: '250px' }} // Fixed height
      />
    </div>
    <div className="p-4">
      <h3 className="text-sm text-gray-700">{title}</h3>
      <p className="text-base text-gray-900 mt-1">{description}</p>
      <p className="text-lg font-medium text-gray-900 mt-2">${price.toFixed(2)}</p>
    </div>
  </div>
);

export default ProductCard;
