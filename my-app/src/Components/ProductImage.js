import React from 'react';

const ProductImage = ({ img, alt }) => {
  return (
    <div className="col-12 col-md-5">
      <img
        src={img}
        alt={alt}
        style={{ width: '100%', borderRadius: '8px' }}
      />
    </div>
  );
};

export default ProductImage;
