import React from 'react';
import { Button, Card } from 'react-bootstrap';

function ProductItem(props) {
  const { title,/* category, description,*/ image_url, price, addToCart } = props;
  return (
    <div>
      <Card className="my-2" border="dark">
        <Card.Img variant="top" src={image_url} height={250} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <strong>$ {price}</strong>
          </Card.Text>
          <Card.Text>{props.id}</Card.Text>
          {/* <Card.Text>Category: {category}</Card.Text> */}
          {/* <Card.Text>{description}</Card.Text> */}
          <Button onClick={() => addToCart(props)} variant="outline-dark">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductItem;
