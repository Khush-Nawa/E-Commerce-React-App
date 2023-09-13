// Import necessary components from react-bootstrap and React
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Define the functional component 'Contact'
function Contact() {
  // JSX code to render the Contact component
  return (
    <>
      {/* Card component with an image overlay */}
      <Card className="bg-dark text-white">
        <Card.Img src="https://www.dialer360.com/wp-content/uploads/2019/03/How-E-Commerce-Contact-Center-Providing-the-Best-Service-1.jpg" height={500} alt="Card image" />
        <Card.ImgOverlay>
          {/* Card title and text */}
          <Card.Title className='text-dark'>E-Com API Web-App</Card.Title>
          <Card.Text className='text-dark'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text className='text-dark'>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>

      {/* Contact form */}
      <div className="container my-3">
        <h2 className='text-center'>Contact Form</h2>
        <Form>
          {/* First name and last name fields */}
          <Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Form.Group>
          </Row>

          {/* Email and password fields */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          {/* Address fields */}
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          {/* City, State, and Pin Code fields */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Uttar Pradesh</option>
                <option>Haydrabad</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          {/* Message textarea */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder='Enter message here' rows={4} />
          </Form.Group>

          {/* Gender selection radio buttons */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Gender
            </Form.Label>
            <Col >
              <Form.Check
                type="radio"
                label="Male"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Other"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>

          {/* Submit button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

// Export the Contact component as the default export of this module
export default Contact;
