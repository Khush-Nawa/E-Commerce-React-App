// Import necessary modules from 'react' library
import React, { useEffect, useState } from 'react';
import ProductItem from './Product-Item';

// Define the functional component 'Product' with 'addToCart' prop as input parameter
export default function Product({ addToCart }) {
  // State hook to store the product data fetched from API
  const [products, setProducts] = useState([]);

  // useEffect hook to fetch the product data from the API when the component mounts
  useEffect(() => {
    // Define an async function 'fetchProducts' to fetch product data from the API
    async function fetchProducts() {
      let url = 'https://fakestoreapi.com/products';
      let data = await fetch(url); // Send a GET request to the API
      let parsedData = await data.json(); // Parse the response data as JSON
      setProducts(parsedData); // Update the 'products' state with the fetched data
    }

    // Call the 'fetchProducts' function when the component mounts (empty dependency array [])
    fetchProducts();
  }, []);

  // JSX code to render the Product component
  return (
    <div className="container my-3">
      <div className="row my-3">
        {/* Loop through the 'products' array and render each product using 'ProductItem' component */}
        {products.map((element) => (
          <div className="col-lg-3 col-md-5" key={element.id}>
            <ProductItem
              // Pass product details as props to the 'ProductItem' component
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
