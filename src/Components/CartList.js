// Import necessary components from react-bootstrap and React hooks
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// Define the functional component 'CartList' with a prop 'Cart'
function CartList({ Cart }) {
  // Define state variable 'cart' and its setter function 'setCart' using useState hook
  const [cart, setCart] = useState([]);

  // Use useEffect hook to update 'cart' state whenever 'Cart' prop changes
  useEffect(() => {
    setCart(Cart);
  }, [Cart]);

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (cartIndex) => {
    const updatedCart = cart.map((item, index) =>
      cartIndex === index
        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
        : item
    );
    setCart(updatedCart);
  };

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (cartIndex) => {
    const updatedCart = cart.map((item, index) =>
      cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Define state variable 'show' and its setter function 'setShow' using useState hook
  const [show, setShow] = useState(false);

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  // JSX code to render the CartList component
  return (
    <div className='container my-3  '>
      {/* Map over the 'cart' array to render each item in the cart */}
      {cart?.map((cartItem, cartIndex) => (
        <Card className='my-3 row d-flex justify-content-between'>
          <Card.Body className='col ' key={cartIndex}>
            {/* Display cart item details and buttons to increase/decrease quantity */}
            <Card.Img src={cartItem.image_url} alt="cart-item" style={{ width: '50px' }} />
            <Card.Title >{cartItem.title}</Card.Title>
            <Button variant="dark" onClick={() => decreaseQuantity(cartIndex)}>-</Button>
            <span><strong>{cartItem.quantity}</strong></span>
            <Button variant="dark" onClick={() => increaseQuantity(cartIndex)}>+</Button>
            <div> <strong>$ {cartItem.price * cartItem.quantity}/-</strong></div>
          </Card.Body>
        </Card>
      ))}
      {/* Display the total price of items in the cart */}
      <Card.Subtitle style={{ fontSize: '30px' }} className='row'>
        Total: $ {' '}
        <span className='col'>{calculateTotalPrice()}/-</span>
      </Card.Subtitle>

      {/* Payment Form Modal */}
      <Button variant="success" onClick={handleShow}>Proceed To Pay</Button>
      <Modal show={show} onHide={handleClose}>
        <Form className='container'>
          <Modal.Body className="m-3">
            {/* Payment form fields */}
            <Modal.Header closeButton>
              <Modal.Title>Payment Form</Modal.Title>
            </Modal.Header>
            <Form.Group className="m-2">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="number" className="form-control form-control-lg" placeholder="1234 5678 9012 3457" />
            </Form.Group>
            <Form.Group className="m-2" controlId="formGroupName">
              <Form.Label>Candidate Name</Form.Label>
              <Form.Control type="name" className="form-control form-control-lg" placeholder="Cardholder's Name" />
            </Form.Group>
            <Form.Group className="m-2" controlId="formGridDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="date" className="form-control form-control-lg" placeholder="MM/YYYY" />
            </Form.Group>
            <Form.Group className="m-2" controlId="formGridPassword">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="password" className="form-control form-control-lg" placeholder="●●●" size={1} minLength={3} maxLength={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {/* Buttons to close the modal and proceed with payment */}
            <Button variant="warning" onClick={handleClose}>Close</Button>
            <Button variant="success" onClick={handleClose}>Pay Now</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

// Export the CartList component as the default export of this module
export default CartList;
