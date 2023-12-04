import React, { useState } from 'react';  // Added import for useState
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Service';
import Products from './pages/Products';

function App() {
  // Assuming you need to manage a menu state
  const [menu, setMenu] = useState("Home");

  return (
    <div>
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path=":ProductsId" element={<Products />} />
          <Route path="/cart" element={<cart />} /> {/* Ensure cart component is correctly imported */}
        </Routes>
        <Footer menu={menu} setMenu={setMenu} />
      </Router>
    </div>
  );
}

export default App;
