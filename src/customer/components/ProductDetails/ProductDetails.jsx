import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert('Product added to cart!');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details.</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="mt-4 lg:mt-0">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {product.title}
          </h1>
          <p className="mt-2 text-gray-500">{product.description}</p>
          <p className="mt-4 text-lg font-medium text-gray-900">
            ${product.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-[#b29a76] hover:bg-[#b29a76]/90 text-white py-2 px-4 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
