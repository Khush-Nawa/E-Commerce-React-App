// Import necessary components and modules from react-bootstrap and react-router-dom
import React from 'react';
import logo from './logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';

// Define a functional component named OffcanvasExample that takes 'props' as a parameter
function OffcanvasExample(props) {

  // Define state variable setter function 'setShow' using useState hook
  const [setShow] = useState(false);

  // Function to close the modal
  const handleClose = () => setShow(false);
  return (
   
        // Render a Navbar component with 'expand' as the key and expand="md" as a prop
        <Navbar key="md" expand="md" className="bg-body-tertiary sticky-top" bg="dark" data-bs-theme="dark">
          {/* Create a fluid Container */}
          <Container fluid>
            {/* Render a Navbar.Brand component as a Link to the specified route */}
            <Navbar.Brand as={Link} to="/E-Commerce-React-App/">
              <img src={logo} alt="logo" height={50} />
            </Navbar.Brand>

            {/* Render a toggle button for the Offcanvas */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$"md"`} />

            {/* Render the Offcanvas component with an id and other attributes */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-$"md"`}
              aria-labelledby={`offcanvasNavbarLabel-expand-$"md"`}
              placement="end" bg="dark" data-bs-theme="dark"
            >
              {/* Render the header of the Offcanvas with a close button */}
              <Offcanvas.Header closeButton>
                {/* Render the title of the Offcanvas */}
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"md"`}>
                  E-Commerce-React-App
                </Offcanvas.Title>
              </Offcanvas.Header>
                            
              {/* Render the body of the Offcanvas */}
              <Offcanvas.Body>
                {/* Render a Nav component with justified content */}
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  {/* Render Nav.Links as Links to specified routes */}
                  <Nav.Link as={Link} to="/E-Commerce-React-App/" onClick={handleClose}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/E-Commerce-React-App/Product" onClick={handleClose}>
                    Product
                  </Nav.Link>
                  <Nav.Link as={Link} to="/E-Commerce-React-App/About" onClick={handleClose}>
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/E-Commerce-React-App/Contact" onClick={handleClose}>
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            {/* Render a Button as a Link to the specified route */}
            <Button
              as={Link}
              to="/E-Commerce-React-App/CartList"
              className="m-2"
              variant="outline-light"
            >
              {/* Render an icon */}
              <i className="bi bi-cart4" style={{ "font-size": "35px" }}></i>
              {/* Render a Badge component with a dark background and the count from props */}
              <Badge bg="dark">{props.count}</Badge>
            </Button>
          </Container>
        </Navbar>     
  );
}

// Export the OffcanvasExample component as the default export of this module
export default OffcanvasExample;
