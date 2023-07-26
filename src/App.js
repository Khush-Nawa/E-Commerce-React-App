import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import CartList from './Components/CartList';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  return (
    <div>
      <Router>
        <Navbar count={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product addToCart={addToCart} />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CartList" element={<CartList Cart={cart}/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
