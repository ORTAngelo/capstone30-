import React from 'react';
import data from '../Data/data';
import { useParams } from 'react-router-dom'; 
import { useCart } from "react-use-cart"

import ProductDetails from '../Components/ProductDetails';
import ProductImage from '../Components/ProductImage';

const ProductPage = () => {
  const { addItem } = useCart();
  const { id } = useParams(); // Get the product ID from the URL
  const product = data.productData.find((item) => item.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <p>Product not found</p>; // Handle case where product doesn't exist
  }

return (
    <div className="container py-4">
      <div className="row justify-content-center">
        {/* Left side: Image */}
        <ProductImage img={product.img} alt={product.title} />

        {/* Right side: Title, Description, Price, and Add to Cart */}
        <ProductDetails
          title={product.title}
          price={product.price}
          desc={product.desc}
          addItem={addItem}
          product={product}
          stock={product.stock}
        />
      </div>
    </div>
  );
};

export default ProductPage;
