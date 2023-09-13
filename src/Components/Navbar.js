// Import necessary components from react-bootstrap and react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import logo from './logo.png';
import { Link } from 'react-router-dom';

// Define a functional component named CollapsibleExample that takes 'props' as input
function CollapsibleExample(props) {
  return (
    // Create a responsive Navbar that collapses on smaller screens
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary sticky-top" bg="dark" data-bs-theme="dark">
      <Container>
        {/* Add a brand logo to the Navbar, linking to the home page */}
        <Navbar.Brand as={Link} to="/E-Commerce-React-App/">
          <img src={logo} alt="logo" height={50} />
        </Navbar.Brand>
        {/* Create a toggle button for responsive navigation */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Create a collapsible section for navigation links */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav>
            {/* Add navigation links using react-router-dom */}
            <Nav.Link as={Link} to="/E-Commerce-React-App/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className='active' to="/E-Commerce-React-App/Product">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/E-Commerce-React-App/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/E-Commerce-React-App/Contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Add a shopping cart button with a badge showing the count of items */}
        <Button
          as={Link}
          to="/E-Commerce-React-App/CartList"
          className="m-2"
          variant="outline-light"
        >
          <i className="bi bi-cart4" style={{ "font-size": "35px" }}></i>
          {/* Display the cart item count received from the 'props' */}
          <Badge bg="dark">{props.count}</Badge>
        </Button>
      </Container>
    </Navbar>
  );
}

// Export the CollapsibleExample component as the default export
export default CollapsibleExample;
