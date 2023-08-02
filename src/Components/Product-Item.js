// Import necessary components and modules from 'react-bootstrap' and 'react' libraries
import React from 'react';
import { Button, Card } from 'react-bootstrap';

// Define the functional component 'ProductItem' with props as input parameter
function ProductItem(props) {
  // Destructure the props to extract specific data fields
  const { title, image_url, price, addToCart } = props;

  // JSX code to render the ProductItem component
  return (
    <div>
      {/* Product card */}
      <Card className="my-2" border="dark">
        {/* Product image */}
        <Card.Img variant="top" src={image_url} height={250} />

        {/* Card body */}
        <Card.Body>
          {/* Product title */}
          <Card.Title>{title}</Card.Title>
          
          {/* Product price */}
          <Card.Text>
            <strong>$ {price}</strong>
          </Card.Text>

          {/* Display additional props.id (if available) */}
          <Card.Text>{props.id}</Card.Text>

          {/* 'Add to Cart' button */}
          <Button onClick={() => addToCart(props)} variant="outline-dark">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the ProductItem component as the default export of this module
export default ProductItem;
