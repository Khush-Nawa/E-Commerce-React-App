import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { Navbar, Card, Container, Nav, Button, Badge } from 'react-bootstrap';

function NavScrollExample(props) {
  setInterval(() => {
    let a = new Date();
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time;
  }, 1000);
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Product">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact Us
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        <Card border="light" className="ms-3">
          <Card.Body>
            <h4 className="d-flex me-2">
              Current Time - <span id="time"></span>
            </h4>
          </Card.Body>
        </Card>
        <Button
            as={Link}
            to="/CartList"
            className="m-2"
            variant="outline-light">
            <i className="bi bi-cart4" style={{"font-size":"35px"}}></i>
            <Badge bg="dark">{props.count}</Badge>
          </Button>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
