import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CartList({ Cart }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(Cart);
  }, [Cart]);

  const decreaseQuantity = (cartIndex) => {
    const updatedCart = cart.map((item, index) =>
      cartIndex === index
        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
        : item
    );
    setCart(updatedCart);
  };

  const increaseQuantity = (cartIndex) => {
    const updatedCart = cart.map((item, index) =>
      cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };


  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container my-3  '>
      {cart?.map((cartItem, cartIndex) => (
        <Card className='my-3 row d-flex justify-content-between'>
          <Card.Body className='col ' key={cartIndex}>
            <Card.Img src={cartItem.image_url} alt="cart-item" style={{ width: '50px' }} />
            <Card.Title >{cartItem.title}</Card.Title>
            <Button variant="dark" onClick={() => decreaseQuantity(cartIndex)}>-</Button>
            <span><strong>{cartItem.quantity}</strong></span>
            <Button variant="dark" onClick={() => increaseQuantity(cartIndex)}>+</Button>
            <div> <strong>$ {cartItem.price * cartItem.quantity}/-</strong></div>
          </Card.Body>
        </Card>
      ))}
      <Card.Subtitle style={{ fontSize: '30px' }} className='row'>
        Total: $ {' '}
        <span className='col'>{calculateTotalPrice()}/-</span>
      </Card.Subtitle>

      {/* Payment Form */}

      <Button variant="success" onClick={handleShow}>Pay Now</Button>
      <Modal show={show} onHide={handleClose}>
        <Form className='container'>
          <Modal.Body className="m-3">
            <Modal.Header closeButton>
              <Modal.Title>Payment Form</Modal.Title>
            </Modal.Header>
            <Form.Group className="m-2">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="number"
                className="form-control form-control-lg"
                placeholder="1234 5678 9012 3457"/>
            </Form.Group>
            <Form.Group className="m-2" controlId="formGroupName">
              <Form.Label>Candidate Name</Form.Label>
              <Form.Control
                type="name"
                className="form-control form-control-lg"
                placeholder="Cardholder's Name"/>
            </Form.Group>
            <Form.Group className="m-2" controlId="formGridDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control 
                type="date"
                className="form-control form-control-lg"
                placeholder="MM/YYYY"/>
            </Form.Group>
            <Form.Group className="m-2" controlId="formGridPassword">
              <Form.Label>CVV</Form.Label>
              <Form.Control 
                type="password"
                className="form-control form-control-lg"
                placeholder="●●●"
                size={1}
                minLength={3}
                maxLength={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>Close</Button>
            <Button variant="success" onClick={handleClose}>Pay Now</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default CartList;
