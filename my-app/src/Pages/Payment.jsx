import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutPage = () => {
  const { items } = useCart();  // Get cart items using react-use-cart
  const location = useLocation(); // Get location state (product and quantity passed)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    note: '',
    paymentMethod: 'Gcash', // Default payment method
  });

  const navigate = useNavigate();
  const { product, quantity } = location.state || {};  // Get product and quantity from location state
  const isProductSelected = product && quantity > 0;

  useEffect(() => {
    // If no product or quantity is provided via navigation, we could redirect or handle error
    if (isProductSelected && (!product || quantity <= 0)) {
      alert('No valid product selected!');
    }
  }, [isProductSelected, product, quantity]);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any final checkout actions like saving order details
    console.log('Form submitted', formData);

   // Display notification upon successful order submission
   toast.success(`Your order with ${formData.paymentMethod} has been placed successfully!`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

   // Navigate to the home page after order is placed
   setTimeout(() => {
    navigate('/home'); // Redirect to home page
  }, 3000); // Wait for the notification to be visible before redirecting
};

  // Calculate total for ordered items only
  const calculateTotal = () => {
    if (isProductSelected) {
      return product.price * quantity;
    } else {
      // If no specific product is selected, calculate total from cart items
      return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
  };

  const total = calculateTotal(); // Get the total for ordered items

  return (
    <div className="container py-4">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Shipping Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="note" className="form-label">Additional Notes</label>
              <textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                className="form-control"
                rows="4"
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit Order</button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="col-md-6">
          <h4>Order Summary</h4>
          <ul className="list-group">

            {/* Display only the selected product if it was passed */}
            {isProductSelected && (
              <li className="list-group-item d-flex justify-content-between">
                <span>{product.title}</span>
                <span>{quantity} x ${product.price}</span>
              </li>
            )}

            {/* Display other items in the cart if no specific product is passed */}
            {!isProductSelected && items.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.title}</span>
                <span>{item.quantity} x ${item.price}</span>
              </li>
            ))}
          </ul>

          <hr />
          <div className="d-flex justify-content-between">
            <strong>Ordered Total:</strong> {/* Display the total of ordered items */}
            <strong>${total.toFixed(2)}</strong>

            <div className="col-md-6">
            <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
            <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="form-control"
                required
            >
                <option value="Gcash">Gcash</option>
                <option value="Cash on PickUp">Cash on PickUp</option>
            </select>
            </div>
          </div>
        </div>
      </div>
      {/* ToastContainer to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default CheckoutPage;