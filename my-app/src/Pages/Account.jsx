// src/Pages/Account.js

import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Account = () => {
  // Sample user information (this could be fetched from an API or context)
  const [user, setUser] = useState({
    name: "User",
    email: "User@example.com",
    password: "",  // You won't display the password for security reasons
  });

  // Sample orders (this would also typically come from an API)
  const [orders, setOrders] = useState([
    { id: 1, date: "2025-04-10", status: "Order Place", total: "$99.00" },
  ]);

  const [updatedUser, setUpdatedUser] = useState(user);
  const navigate = useNavigate();

  // Handle changes to the user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would update the user data (e.g., make an API call).
    setUser(updatedUser);
    alert("Account updated successfully!");
  };

  // Handle Logout
  const handleLogout = () => {
    // Clear user data from localStorage (or wherever it's stored)
    localStorage.removeItem("user"); // Assuming you store user data in localStorage

    // Redirect to login page after logout
    navigate("/"); // Change '/login' if your login route is different
    window.location.reload();
  };

  return (
    <Container className="py-4">
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center mb-4">Your Account</h2>

          {/* Profile Section */}
          <h4>Profile Information</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={updatedUser.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={updatedUser.password}
                onChange={handleChange}
                placeholder="Enter your new password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Update Account
            </Button>
          </Form>

           {/* Logout Button */}
           <Button
            variant="danger"
            className="w-100 mt-3"
            onClick={handleLogout}
          >
            Logout
          </Button>

          {/* Order History Section */}
          <h4 className="mt-5">Order History</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
