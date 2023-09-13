// Import necessary components from react-bootstrap
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';

// Define the functional component 'About'
function About() {

  // Using setInterval to update the current time every 1000ms (1 second)
  setInterval(() => {
    let a = new Date();
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time;
  }, 1000);

  // Return the JSX elements
  return (
    <>
      {/* Display a Figure with an image and caption */}
      <Figure>
        <Figure.Image
          width={2171}
          alt="171x180"
          src="https://ecomnews.in/wp-content/uploads/2022/11/What-is-eCommerce-and-its-types.jpg"
        />
        <Figure.Caption>
          {/* Some placeholder text */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Enim consequatur sit rerum maiores aperiam nihil praesentium saepe officia doloribus inventore
        </Figure.Caption>
      </Figure>

      {/* Display a Card with a border */}
      <Card border="light" className="ms-3">
        <Card.Body>
          {/* Show the current time */}
          <h4 className="d-flex me-2">
            Current Time - <span id="time"></span>
          </h4>
        </Card.Body>
      </Card>

      {/* Display an Accordion */}
      <Accordion>
        {/* Accordion Item #1 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            {/* Some placeholder text */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item #2 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            {/* Some placeholder text */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item #3 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            {/* Some placeholder text */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item #4 */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Accordion Item #4</Accordion.Header>
          <Accordion.Body>
            {/* Some placeholder text */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

// Export the About component as the default export of this module
export default About;
