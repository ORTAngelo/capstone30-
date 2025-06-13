import React from 'react';

const AddToCartButton = ({ addItem, product, quantity }) => {
  return (
    <button className="btn btn-success" onClick={() => addItem(product, quantity)}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
