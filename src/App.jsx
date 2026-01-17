import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Farmer from "./roles/Farmer";
import Merchant from "./roles/Merchant";
import FertilizerStore from "./roles/FertilizerStore";
import Advisor from "./roles/Advisor";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/farmer" element={<Farmer />} />
        <Route path="/dashboard/merchant" element={<Merchant />} />
        <Route path="/dashboard/fertilizer-store" element={<FertilizerStore />} />
        <Route path="/dashboard/advisor" element={<Advisor />} />
      </Routes>
    </Router>
  );
}

export default App;
