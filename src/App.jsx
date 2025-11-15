import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home/Home";
import AboutUs from "./Screen/About/AboutUs";
import Contact from "./Screen/Contact/Contact";
import OurProducts from "./Screen/Products/OurProducts";
import OurTeam from "./Screen/OurTeam/OurTeam";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/ourTeam" element={<OurTeam />} />
         <Route path="/contact" element={<Contact/>} />
             <Route path="/products" element={<OurProducts/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
