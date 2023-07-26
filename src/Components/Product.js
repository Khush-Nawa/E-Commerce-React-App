import React, { useEffect, useState } from 'react';
import ProductItem from './Product-Item';

export default function Product({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let url = 'https://fakestoreapi.com/products';
      let data = await fetch(url);
      let parsedData = await data.json();
      setProducts(parsedData);
    }

    fetchProducts();
  }, []);

  return (
    <div className="container my-3">
      <div className="row my-3">
        {products.map((element) => (
          <div className="col-lg-3 col-md-5" key={element.id}>
            <ProductItem
              title={element.title}
              category={element.category}
              description={element.description}
              image_url={element.image}
              price={element.price}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
