// Import necessary components and modules from react and react-router-dom
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import custom components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import CartList from './Components/CartList';

// Define the functional component 'App'
function App() {
  // Define state variable 'cart' and its setter function 'setCart' using useState hook
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  // JSX code to render the App component
  return (
    <div>
      {/* Use the Router component to set up routing */}
      <Router>
        {/* Render the custom Navbar component with the cart length as a count */}
        <Navbar count={cart.length} />

        {/* Define routes using Routes and Route components */}
        <Routes>
          <Route path="/E-Commerce-React-App/" element={<Home />} />
          <Route path="/E-Commerce-React-App/Product" element={<Product addToCart={addToCart} />} />
          <Route path="/E-Commerce-React-App/About" element={<About />} />
          <Route path="/E-Commerce-React-App/Contact" element={<Contact />} />
          <Route path="/E-Commerce-React-App/CartList" element={<CartList Cart={cart} />} />
        </Routes>

        {/* Render the custom Footer component */}
        <Footer />
      </Router>
    </div>
  );
}

// Export the App component as the default export of this module
export default App;
