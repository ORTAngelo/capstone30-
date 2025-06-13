import React, {useState} from 'react';
import AddToCartButton from './AddToCartButton'; 
import '../Style/ProductDetails.css';
import { useNavigate } from 'react-router-dom';


const ProductDetails = ({ title, price, desc, stock, addItem, product }) => {
const [quantity, setQuantity] = useState(1);

const handleQuantityChange = (e) => {
  const newQuantity = Math.max(1, Math.min(stock, e.target.value)); 
  setQuantity(newQuantity);
};

const incrementQuantity = () => {
  if (quantity < stock) {
    setQuantity(quantity + 1); // Increase the quantity
  }
};

const decrementQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1); // Decrease the quantity
  }
};

const navigate = useNavigate();
const handleBuyNow = () => {
  // Navigate to the checkout page with the product and quantity
  navigate('/checkout', { state: { product, quantity } });
};

  return (
    <div className="col-12 col-md-5 text-start">
      <h1>{title}</h1>
      <h2>Rating</h2>
      <h3>${price}</h3>
      <p>{desc}</p>
      {/* <h3>Options</h3> */}
      <h4>Stocks:{stock}</h4>

      <div className="quantity-selector">
        <label htmlFor="quantity">Quantity:</label>
        
        <div className="quantity-controls">
           {/* Minus button */}
           <button 
            onClick={decrementQuantity} 
            disabled={quantity <= 1} // Disable if quantity is 1
          >
            -
          </button>
          
          {/* Input field */}
          <input 
            id="quantity" 
            type="number" 
            value={quantity} 
            onChange={handleQuantityChange}
            min="1"
            max={stock} 
          />
           {/* Plus button */}
           <button 
            onClick={incrementQuantity} 
            disabled={quantity >= stock} // Disable if quantity is equal to stock
          >
            +
          </button>
        </div>
      </div>
      
      <AddToCartButton addItem={addItem} product={product} quantity={quantity}/>
       {/* Buy Now Button */}
       <button
        className="btn btn-danger mt-3"
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetails;
